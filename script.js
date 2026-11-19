// --- App State ---
let currentRole = 'hirer'; // 'hirer' or 'runr'
let isOnline = true;
let currentQuestPrice = 75;

// --- 1. Navigation & View Switching ---
function switchView(viewId, navElement = null, navContainerId = null) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    
    // Show target view
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.remove('hidden');
        
        // Handle Theme Switching based on view
        if (viewId === 'view-runr-home') {
            document.body.setAttribute('data-theme', 'dark');
        } else if (viewId === 'view-hirer-home' || viewId === 'view-post-quest') {
            document.body.setAttribute('data-theme', 'light');
        }
    }

    // Update Bottom Nav Active State
    if (navElement && navContainerId) {
        const navContainer = document.getElementById(navContainerId);
        navContainer.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        navElement.classList.add('active');
    }
}

// --- 2. Role Switching (Demo specific) ---
function toggleRole() {
    currentRole = currentRole === 'hirer' ? 'runr' : 'hirer';
    
    if (currentRole === 'hirer') {
        // Switch to Hirer UI
        document.getElementById('nav-hirer').classList.remove('hidden');
        document.getElementById('nav-runr').classList.add('hidden');
        document.body.setAttribute('data-theme', 'light');
        
        // Default to Hirer Home
        switchView('view-hirer-home');
        document.querySelectorAll('#nav-hirer .nav-item')[0].classList.add('active');
    } else {
        // Switch to RUNR UI
        document.getElementById('nav-hirer').classList.add('hidden');
        document.getElementById('nav-runr').classList.remove('hidden');
        document.body.setAttribute('data-theme', 'dark');
        
        // Default to RUNR Home
        switchView('view-runr-home');
        document.querySelectorAll('#nav-runr .nav-item')[0].classList.add('active');
    }
}

// --- 3. Post Quest Logic ---
function selectSize(element, basePrice) {
    // Remove active state from all cards
    document.querySelectorAll('.select-card').forEach(c => c.classList.remove('active'));
    // Add active state to clicked card
    element.classList.add('active');
    
    // Calculate price: Base + Distance (25) + Platform Fee (5)
    currentQuestPrice = basePrice + 25 + 5; 
    
    // Update UI
    document.getElementById('base-fare').innerText = 'K' + basePrice;
    document.getElementById('total-fare').innerText = 'K' + currentQuestPrice;
}

function submitQuest() {
    // Simulate posting the quest
    alert(`Quest Posted Successfully!\nTotal payout: K${currentQuestPrice}`);
    
    // Reset UI back to Hirer Home
    switchView('view-hirer-home');
    document.querySelectorAll('#nav-hirer .nav-item')[0].classList.add('active');
}

// --- 4. RUNR Logic ---
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
    alert("You are now online! Quests will appear here.");
}

// --- 5. Chat Logic ---
function openChat() {
    document.getElementById('view-chat').classList.remove('hidden');
}

function closeChat() {
    document.getElementById('view-chat').classList.add('hidden');
}

function sendMessage() {
    const input = document.getElementById('chat-input-field');
    const text = input.value.trim();
    if (!text) return;

    const chatBox = document.getElementById('chat-messages');
    
    // 1. Add Sent Message
    const sentMsg = document.createElement('div');
    sentMsg.className = 'msg sent';
    sentMsg.innerText = text;
    chatBox.appendChild(sentMsg);
    
    // Clear input and scroll to bottom
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2. Simulate Reply after 1.5 seconds
    setTimeout(() => {
        const replyMsg = document.createElement('div');
        replyMsg.className = 'msg received';
        replyMsg.innerText = "Received! I'll confirm the OTP when you arrive.";
        chatBox.appendChild(replyMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);
}
