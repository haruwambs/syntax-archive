// ==========================================
// 1. CONFIGURATION (REPLACE THESE)
// ==========================================
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Global State
let currentUser = null;
let currentRole = 'hirer'; // 'hirer' or 'runr'
let isOnline = true;
let currentQuestPrice = 75;
let activeQuestId = null;
let messageSubscription = null;
let map = null; // Google Map instance

// ==========================================
// 2. GOOGLE MAPS INITIALIZATION
// ==========================================
// This function is automatically called by the Google Maps script tag in index.html
function initMap() {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return; // Prevent errors if we are on a view without a map

    // Default location: Lusaka, Zambia
    const lusaka = { lat: -15.3875, lng: 28.3228 };
    
    map = new google.maps.Map(mapContainer, {
        zoom: 12,
        center: lusaka,
        disableDefaultUI: true,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
            { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] }
        ]
    });

    // Add a marker for the RUNR's current location
    new google.maps.Marker({
        position: lusaka,
        map: map,
        title: "Your Location",
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#0055FF",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2
        }
    });
}

// ==========================================
// 3. AUTHENTICATION (Supabase)
// ==========================================
async function initAuth() {
    const { data: { session } } = await db.auth.getSession();
    if (session) {
        currentUser = session.user;
        console.log("Logged in as:", currentUser.email);
        
        // Load user profile to update UI
        const { data: profile } = await db.from('profiles').select('*').eq('id', currentUser.id).single();
        if (profile) {
            document.getElementById('runr-name').innerText = profile.full_name;
            document.getElementById('runr-avatar').innerText = profile.full_name.substring(0, 2).toUpperCase();
        }
    } else {
        console.log("No user logged in.");
    }
}

// Simple login/signup function for the demo (Replace with proper UI for production)
async function simulateLogin() {
    const email = prompt("Enter email (e.g., test@runr.com):");
    if (!email) return;
    const password = prompt("Enter password (min 6 characters):");
    if (!password) return;

    // Try to sign up
    let { error } = await db.auth.signUp({ email, password });
    
    if (error && error.message.includes('already registered')) {
        // If user exists, try to log in
        const { data, error: signInError } = await db.auth.signInWithPassword({ email, password });
        if (signInError) { alert(signInError.message); return; }
        currentUser = data.user;
    } else if (error) {
        alert("Signup error: " + error.message);
        return;
    } else {
        // Create a profile for the new user
        const { data: { user } } = await db.auth.getUser();
        if (user) {
            await db.from('profiles').insert([{ 
                id: user.id, 
                full_name: email.split('@')[0], 
                phone: "0000000000", 
                role: "hirer" 
            }]);
        }
        alert("Account created! You are now logged in.");
    }
    window.location.reload(); // Refresh to apply new auth state
}

// ==========================================
// 4. CREATE QUEST (Hirer)
// ==========================================
async function submitQuest() {
    if (!currentUser) {
        alert("Please login first (Click the 'Login' button in the top right).");
        return;
    }

    const pickup = document.getElementById('pickup-input').value;
    const dropoff = document.getElementById('dropoff-input').value;

    if (!pickup || !dropoff) {
        alert("Please fill in both Pickup and Drop-off locations.");
        return;
    }

    // Generate a 4-digit OTP for delivery verification
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    const { data, error } = await db.from('quests').insert([
        {
            hirer_id: currentUser.id,
            title: "Delivery Request",
            description: `Pickup: ${pickup}, Dropoff: ${dropoff}`,
            price_zmw: currentQuestPrice,
            pickup_location: pickup,
            dropoff_location: dropoff,
            status: 'open',
            otp_code: otp
        }
    ]).select();

    if (error) {
        alert("Error posting quest: " + error.message);
    } else {
        alert(`Quest Posted Successfully!\nShare this OTP with your RUNR at drop-off: ${otp}`);
        switchView('view-hirer-home');
        loadQuests(); // Refresh lists
    }
}

// ==========================================
// 5. LOAD QUESTS (RUNR and Hirer)
// ==========================================
async function loadQuests() {
    // 1. Load open quests for the RUNR view
    const { data: openQuests, error } = await db
        .from('quests')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false });

    if (error) { console.error("Error loading quests:", error); return; }

    const runrContainer = document.getElementById('runr-quest-list');
    if (runrContainer) {
        runrContainer.innerHTML = ''; // Clear loading text
        if (openQuests.length === 0) {
            runrContainer.innerHTML = '<p class="text-sm text-gray" style="text-align:center; padding: 20px;">No open quests right now.</p>';
        }
        openQuests.forEach(quest => {
            const el = document.createElement('div');
            el.className = 'quest-item';
            el.style.background = 'var(--white)';
            el.onclick = () => openChat(quest.id);
            el.innerHTML = `
                <div class="quest-icon"><i class="fa-solid fa-store"></i></div>
                <div class="quest-info">
                    <h4>${quest.title}</h4>
                    <p class="text-sm text-gray">• ${quest.pickup_location} to ${quest.dropoff_location} • K${quest.price_zmw} payout</p>
                </div>
                <span class="badge badge-green">Open</span>
            `;
            runrContainer.appendChild(el);
        });
    }

    // 2. Load the current user's quests for the HIRER view
    if (currentUser) {
        const { data: myQuests } = await db
            .from('quests')
            .select('*')
            .eq('hirer_id', currentUser.id)
            .order('created_at', { ascending: false });
        
        const hirerContainer = document.getElementById('hirer-quest-list');
        if (hirerContainer && myQuests) {
            hirerContainer.innerHTML = '';
            if (myQuests.length === 0) {
                 hirerContainer.innerHTML = '<p class="text-sm text-gray" style="text-align:center;">No active quests. Post one!</p>';
            } else {
                myQuests.forEach(quest => {
                    const el = document.createElement('div');
                    el.className = 'quest-item';
                    el.onclick = () => openChat(quest.id);
                    el.innerHTML = `
                        <div class="quest-icon blue"><i class="fa-solid fa-clock"></i></div>
                        <div class="quest-info">
                            <h4>${quest.title}</h4>
                            <p>To: ${quest.dropoff_location}</p>
                        </div>
                        <div class="quest-price">K${quest.price_zmw}</div>
                    `;
                    hirerContainer.appendChild(el);
                });
            }
        }
    }
}

// ==========================================
// 6. CHAT SYSTEM (Real-time)
// ==========================================
function openChat(questId) {
    if (!currentUser) {
        alert("Please login to chat.");
        return;
    }
    
    activeQuestId = questId;
    document.getElementById('view-chat').classList.remove('hidden');
    document.getElementById('chat-messages').innerHTML = ''; // Clear previous messages

    // Fetch existing messages
    loadMessages(questId);

    // Subscribe to new messages in real-time
    if (messageSubscription) db.removeSubscription(messageSubscription);
    messageSubscription = db.channel('public:messages')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `quest_id=eq.${questId}` }, 
        (payload) => {
            appendMessageToUI(payload.new.content, payload.new.sender_id === currentUser.id ? 'sent' : 'received');
        })
        .subscribe();
}

async function loadMessages(questId) {
    const { data, error } = await db
        .from('messages')
        .select('*')
        .eq('quest_id', questId)
        .order('created_at', { ascending: true });

    if (error) return;
    data.forEach(msg => {
        const type = msg.sender_id === currentUser.id ? 'sent' : 'received';
        appendMessageToUI(msg.content, type);
    });
}

async function sendMessage() {
    const input = document.getElementById('chat-input-field');
    const text = input.value.trim();
    if (!text || !activeQuestId || !currentUser) return;

    input.value = ''; // Clear input field immediately

    await db.from('messages').insert([{
        quest_id: activeQuestId,
        sender_id: currentUser.id,
        content: text
    }]);
}

function appendMessageToUI(text, type) {
    const chatBox = document.getElementById('chat-messages');
    const msgEl = document.createElement('div');
    msgEl.className = `msg ${type}`;
    msgEl.innerText = text;
    chatBox.appendChild(msgEl);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

function closeChat() {
    document.getElementById('view-chat').classList.add('hidden');
    if (messageSubscription) { 
        db.removeSubscription(messageSubscription); 
        messageSubscription = null; 
    }
}

// ==========================================
// 7. UI HELPERS (Navigation & State)
// ==========================================
function switchView(viewId, navElement = null, navContainerId = null) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    
    // Show target view
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.remove('hidden');
        
        // Handle theme switching based on view
        if (viewId === 'view-runr-home') document.body.setAttribute('data-theme', 'dark');
        else document.body.setAttribute('data-theme', 'light');
    }

    // Update active state on bottom navigation
    if (navElement && navContainerId) {
        const navContainer = document.getElementById(navContainerId);
        navContainer.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        navElement.classList.add('active');
    }

    // Re-initialize map if we just switched to the RUNR home
    if (viewId === 'view-runr-home' && map) {
        google.maps.event.trigger(map, "resize");
        map.setCenter({ lat: -15.3875, lng: 28.3228 });
    }
}

function toggleRole() {
    if (currentRole === 'hirer') {
        currentRole = 'runr';
        document.getElementById('nav-hirer').classList.add('hidden');
        document.getElementById('nav-runr').classList.remove('hidden');
        document.body.setAttribute('data-theme', 'dark');
        switchView('view-runr-home');
        loadQuests();
    } else {
        currentRole = 'hirer';
        document.getElementById('nav-runr').classList.add('hidden');
        document.getElementById('nav-hirer').classList.remove('hidden');
        document.body.setAttribute('data-theme', 'light');
        switchView('view-hirer-home');
        document.querySelectorAll('#nav-hirer .nav-item')[0].classList.add('active');
    }
}

function toggleOnline() {
    isOnline = !isOnline;
    const toggle = document.getElementById('online-toggle');
    const text = document.getElementById('online-text');
    if (isOnline) {
        toggle.classList.add('on'); 
        text.innerText = 'Online'; 
        text.className = 'text-sm font-bold text-green';
    } else {
        toggle.classList.remove('on'); 
        text.innerText = 'Offline'; 
        text.className = 'text-sm font-bold text-gray';
    }
}

function goOnline() {
    if (!isOnline) toggleOnline();
    alert("You are now online! Scroll down to see open quests.");
}

function selectSize(element, basePrice) {
    document.querySelectorAll('.select-card').forEach(c => c.classList.remove('active'));
    element.classList.add('active');
    currentQuestPrice = basePrice + 25 + 5;
    document.getElementById('base-fare').innerText = 'K' + basePrice;
    document.getElementById('total-fare').innerText = 'K' + currentQuestPrice;
}

// --- Initialization ---
window.onload = () => {
    initAuth();
    loadQuests();
};
