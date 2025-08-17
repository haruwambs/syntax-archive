

// Enhanced AI Tools Data with more details
const aiTools = [
    // Generative AI (10 tools)
    {
        name: "ChatGPT",
        category: "generative",
        description: "OpenAI's advanced conversational AI capable of understanding and generating human-like text across various domains. ChatGPT can assist with coding, content creation, brainstorming, and more with impressive contextual understanding.",
        features: [
            "Natural language conversations",
            "Code generation and explanation",
            "Content creation and editing",
            "Multi-turn dialogue memory",
            "Knowledge cutoff in 2023"
        ],
        link: "https://chat.openai.com",
        icon: "fas fa-comment-dots",
        rating: 5
    },
    {
        name: "DALL-E 3",
        category: "generative",
        description: "OpenAI's most advanced image generation model that creates highly detailed and creative images from text descriptions. DALL-E 3 understands nuanced prompts and can generate images in various styles.",
        features: [
            "Text-to-image generation",
            "High-resolution outputs",
            "Multiple art styles",
            "Contextual understanding",
            "Safe content generation"
        ],
        link: "https://openai.com/dall-e",
        icon: "fas fa-palette",
        rating: 5
    },
    {
        name: "Midjourney",
        category: "generative",
        description: "Cutting-edge AI art generator that creates stunning, artistic images from text prompts. Midjourney is particularly known for its artistic and sometimes surreal outputs.",
        features: [
            "Artistic image generation",
            "Multiple aspect ratios",
            "Style parameters",
            "Community showcase",
            "Discord integration"
        ],
        link: "https://www.midjourney.com",
        icon: "fas fa-image",
        rating: 4
    },
    {
        name: "Stable Diffusion XL",
        category: "generative",
        description: "Open-source text-to-image model that generates highly detailed images with improved composition and face generation compared to previous versions.",
        features: [
            "Open-source model",
            "1024x1024 resolution",
            "Fine control over outputs",
            "Run locally or in cloud",
            "Custom model training"
        ],
        link: "https://stability.ai/stable-diffusion",
        icon: "fas fa-magic",
        rating: 4
    },
    {
        name: "Runway ML",
        category: "generative",
        description: "Creative toolkit that makes it easy to experiment with machine learning in creative projects, including video editing, image generation, and more.",
        features: [
            "Multiple AI models",
            "Video editing tools",
            "Real-time collaboration",
            "Easy-to-use interface",
            "Export to various formats"
        ],
        link: "https://runwayml.com",
        icon: "fas fa-wand-magic-sparkles",
        rating: 4
    },
    {
        name: "Claude AI",
        category: "generative",
        description: "Anthropic's conversational AI assistant focused on being helpful, harmless, and honest. Claude excels at nuanced discussions and complex reasoning tasks.",
        features: [
            "100K token context",
            "File upload support",
            "Constitutional AI principles",
            "Strong reasoning skills",
            "API available"
        ],
        link: "https://claude.ai",
        icon: "fas fa-brain",
        rating: 5
    },
    {
        name: "Jasper AI",
        category: "generative",
        description: "AI content creation platform designed for businesses and marketers to generate high-quality written content quickly and efficiently.",
        features: [
            "50+ content templates",
            "Brand voice customization",
            "Plagiarism checker",
            "Multi-language support",
            "SEO optimization"
        ],
        link: "https://www.jasper.ai",
        icon: "fas fa-pen-fancy",
        rating: 4
    },
    {
        name: "Copy.ai",
        category: "generative",
        description: "AI-powered copywriting tool that helps generate marketing copy, product descriptions, and other business content in seconds.",
        features: [
            "90+ content types",
            "Team collaboration",
            "Tone adjustment",
            "Content improvement tools",
            "Simple interface"
        ],
        link: "https://www.copy.ai",
        icon: "fas fa-copy",
        rating: 4
    },
    {
        name: "Leonardo.Ai",
        category: "generative",
        description: "Creative AI platform for generating production-quality assets for games, apps, and other digital media projects.",
        features: [
            "Game asset generation",
            "Texture creation",
            "3D model support",
            "Style consistency",
            "Commercial license"
        ],
        link: "https://leonardo.ai",
        icon: "fas fa-gamepad",
        rating: 4
    },
    {
        name: "Adobe Firefly",
        category: "generative",
        description: "Adobe's family of creative generative AI models focused on image generation and text effects, integrated with Creative Cloud apps.",
        features: [
            "Photoshop integration",
            "Generative fill",
            "Text-to-vector graphics",
            "Commercial-safe outputs",
            "Style matching"
        ],
        link: "https://www.adobe.com/sensei/generative-ai/firefly.html",
        icon: "fas fa-fire",
        rating: 5
    },
    
    // Chatbots (7 tools)
    {
        name: "Dialogflow CX",
        category: "chatbot",
        description: "Google Cloud's advanced conversational AI platform for building complex, stateful chatbots and voice assistants with visual flow design.",
        features: [
            "Visual flow builder",
            "Multi-language support",
            "Omnichannel deployment",
            "Advanced NLP",
            "Google Cloud integration"
        ],
        link: "https://cloud.google.com/dialogflow",
        icon: "fas fa-robot",
        rating: 5
    },
    {
        name: "Rasa Pro",
        category: "chatbot",
        description: "Open-source conversational AI framework for building contextual assistants with full control over data and infrastructure.",
        features: [
            "On-premise deployment",
            "Custom NLU models",
            "Conversation-driven development",
            "Multi-turn dialogues",
            "Enterprise features"
        ],
        link: "https://rasa.com",
        icon: "fas fa-comments",
        rating: 4
    },
    {
        name: "Botpress",
        category: "chatbot",
        description: "Open platform to build, deploy and manage chatbots with visual flow editor and powerful natural language understanding capabilities.",
        features: [
            "Visual conversation builder",
            "NLU with small data",
            "Multi-channel",
            "Analytics dashboard",
            "Open-source core"
        ],
        link: "https://botpress.com",
        icon: "fas fa-comment-alt",
        rating: 4
    },
    {
        name: "ManyChat",
        category: "chatbot",
        description: "Chatbot platform for Facebook Messenger, Instagram, and WhatsApp with visual builder and marketing automation features.",
        features: [
            "Visual flow builder",
            "E-commerce integration",
            "Broadcasting",
            "CRM integration",
            "Template library"
        ],
        link: "https://manychat.com",
        icon: "fab fa-facebook-messenger",
        rating: 3
    },
    {
        name: "Pandorabots",
        category: "chatbot",
        description: "Platform for building and deploying AI chatbots using AIML technology with both cloud and on-premise options available.",
        features: [
            "AIML standard",
            "Voice and text interfaces",
            "Developer APIs",
            "Analytics dashboard",
            "20+ years of development"
        ],
        link: "https://www.pandorabots.com",
        icon: "fas fa-brain",
        rating: 3
    },
    {
        name: "IBM Watson Assistant",
        category: "chatbot",
        description: "Enterprise-grade conversational AI platform from IBM with advanced intent recognition and integration capabilities.",
        features: [
            "Enterprise security",
            "Omnichannel deployment",
            "Integration with IBM Cloud",
            "Advanced analytics",
            "Customizable NLP"
        ],
        link: "https://www.ibm.com/watson/assistant",
        icon: "fas fa-headset",
        rating: 4
    },
    {
        name: "Microsoft Bot Framework",
        category: "chatbot",
        description: "Comprehensive framework for building enterprise-grade conversational AI experiences that can integrate with Microsoft products.",
        features: [
            "Azure integration",
            "Multi-channel",
            "Adaptive dialogs",
            "Language understanding",
            "Open-source SDKs"
        ],
        link: "https://dev.botframework.com",
        icon: "fab fa-microsoft",
        rating: 4
    },
    
    // Video Editing (7 tools)
    {
        name: "Runway",
        category: "video",
        description: "AI-powered video editing platform with features like green screen removal, style transfer, and text-to-video generation.",
        features: [
            "30+ AI tools",
            "Real-time editing",
            "Collaboration features",
            "Cloud-based",
            "Export to multiple formats"
        ],
        link: "https://runwayml.com",
        icon: "fas fa-film",
        rating: 5
    },
    {
        name: "Descript",
        category: "video",
        description: "Video editing as easy as editing a doc with AI-powered transcription, overdub, and screen recording capabilities.",
        features: [
            "Text-based editing",
            "AI voice cloning",
            "Multi-track editing",
            "Screen recording",
            "Podcast tools"
        ],
        link: "https://www.descript.com",
        icon: "fas fa-video",
        rating: 5
    },
    {
        name: "Synthesia",
        category: "video",
        description: "Create professional videos with AI avatars and voiceovers in minutes without cameras or microphones.",
        features: [
            "140+ AI avatars",
            "120+ languages",
            "Custom avatars",
            "API access",
            "Enterprise security"
        ],
        link: "https://www.synthesia.io",
        icon: "fas fa-user-tie",
        rating: 4
    },
    {
        name: "Pictory",
        category: "video",
        description: "AI video generator that automatically creates short, highly-shareable branded videos from long-form content.",
        features: [
            "Script to video",
            "Blog to video",
            "Auto captions",
            "Stock media library",
            "Voiceovers"
        ],
        link: "https://pictory.ai",
        icon: "fas fa-photo-film",
        rating: 4
    },
    {
        name: "Fliki",
        category: "video",
        description: "Turn text into videos with AI voices in minutes. Perfect for content creators, marketers, and educators.",
        features: [
            "Text-to-speech",
            "Text-to-video",
            "75+ languages",
            "Rich media library",
            "Custom branding"
        ],
        link: "https://fliki.ai",
        icon: "fas fa-closed-captioning",
        rating: 3
    },
    {
        name: "HeyGen",
        category: "video",
        description: "Create engaging AI avatar videos with realistic lip-syncing for presentations, training, and marketing.",
        features: [
            "Custom avatars",
            "Lip-sync technology",
            "Multi-language support",
            "Template library",
            "Team collaboration"
        ],
        link: "https://www.heygen.com",
        icon: "fas fa-comment-dots",
        rating: 4
    },
    {
        name: "InVideo",
        category: "video",
        description: "Online video creation platform with AI-assisted editing, templates, and stock media for quick video production.",
        features: [
            "5000+ templates",
            "AI script generator",
            "Text-to-video",
            "Collaboration tools",
            "Stock media library"
        ],
        link: "https://invideo.io",
        icon: "fas fa-play-circle",
        rating: 4
    },
    
    // Machine Learning (7 tools)
    {
        name: "TensorFlow",
        category: "ml",
        description: "End-to-end open source platform for machine learning with comprehensive tools and libraries for research and production.",
        features: [
            "Flexible architecture",
            "Production-ready",
            "Keras integration",
            "TensorFlow Lite",
            "Large community"
        ],
        link: "https://www.tensorflow.org",
        icon: "fas fa-project-diagram",
        rating: 5
    },
    {
        name: "PyTorch",
        category: "ml",
        description: "Open source machine learning framework that accelerates the path from research prototyping to production deployment.",
        features: [
            "Pythonic approach",
            "Dynamic computation",
            "Strong GPU support",
            "TorchScript for production",
            "Research-focused"
        ],
        link: "https://pytorch.org",
        icon: "fas fa-fire",
        rating: 5
    },
    {
        name: "Scikit-learn",
        category: "ml",
        description: "Simple and efficient tools for predictive data analysis built on NumPy, SciPy, and matplotlib.",
        features: [
            "Classification algorithms",
            "Regression models",
            "Clustering methods",
            "Feature extraction",
            "Model evaluation"
        ],
        link: "https://scikit-learn.org",
        icon: "fas fa-chart-line",
        rating: 4
    },
    {
        name: "Keras",
        category: "ml",
        description: "High-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano.",
        features: [
            "User-friendly",
            "Modular architecture",
            "Easy prototyping",
            "Supports CNNs and RNNs",
            "TensorFlow integration"
        ],
        link: "https://keras.io",
        icon: "fas fa-network-wired",
        rating: 4
    },
    {
        name: "Fast.ai",
        category: "ml",
        description: "Deep learning library that provides high-level components for practitioners with state-of-the-art results.",
        features: [
            "Simplified APIs",
            "Best practices built-in",
            "Excellent documentation",
            "Free courses",
            "PyTorch based"
        ],
        link: "https://www.fast.ai",
        icon: "fas fa-bolt",
        rating: 4
    },
    {
        name: "Hugging Face Transformers",
        category: "ml",
        description: "State-of-the-art Natural Language Processing for TensorFlow and PyTorch with thousands of pretrained models.",
        features: [
            "Thousands of models",
            "Easy fine-tuning",
            "Model sharing",
            "Tokenization tools",
            "Pipeline API"
        ],
        link: "https://huggingface.co",
        icon: "fas fa-language",
        rating: 5
    },
    {
        name: "XGBoost",
        category: "ml",
        description: "Optimized distributed gradient boosting library designed to be highly efficient, flexible and portable.",
        features: [
            "Gradient boosting",
            "Parallel processing",
            "Handles missing values",
            "Feature importance",
            "Multiple languages"
        ],
        link: "https://xgboost.ai",
        icon: "fas fa-chart-bar",
        rating: 5
    },
    
    // NLP (7 tools)
    {
        name: "spaCy",
        category: "nlp",
        description: "Industrial-strength natural language processing library for Python with pre-trained statistical models and word vectors.",
        features: [
            "Fast processing",
            "Linguistic annotations",
            "Named entity recognition",
            "Dependency parsing",
            "Training API"
        ],
        link: "https://spacy.io",
        icon: "fas fa-keyboard",
        rating: 4
    },
    {
        name: "NLTK",
        category: "nlp",
        description: "Leading platform for building Python programs to work with human language data, ideal for teaching and research.",
        features: [
            "Text processing libraries",
            "Lexical analysis",
            "WordNet interface",
            "Classifiers and tokenizers",
            "Educational focus"
        ],
        link: "https://www.nltk.org",
        icon: "fas fa-book",
        rating: 4
    },
    {
        name: "Gensim",
        category: "nlp",
        description: "Robust open-source vector space modeling and topic modeling toolkit implemented in Python.",
        features: [
            "Topic modeling",
            "Word2Vec implementation",
            "Document similarity",
            "Memory efficiency",
            "Scalable algorithms"
        ],
        link: "https://radimrehurek.com/gensim",
        icon: "fas fa-chart-pie",
        rating: 3
    },
    {
        name: "AllenNLP",
        category: "nlp",
        description: "Open-source NLP research library built on PyTorch for developing language understanding systems.",
        features: [
            "Research-focused",
            "Pre-built models",
            "Configuration-driven",
            "Interpretability tools",
            "Active learning"
        ],
        link: "https://allennlp.org",
        icon: "fas fa-brain",
        rating: 3
    },
    {
        name: "Stanford CoreNLP",
        category: "nlp",
        description: "Java suite of core NLP tools providing linguistic annotations like part-of-speech tagging and named entity recognition.",
        features: [
            "Java implementation",
            "Multiple languages",
            "Neural network models",
            "Coreference resolution",
            "Sentiment analysis"
        ],
        link: "https://stanfordnlp.github.io/CoreNLP",
        icon: "fas fa-university",
        rating: 4
    },
    {
        name: "Flair",
        category: "nlp",
        description: "Simple framework for state-of-the-art NLP in Python, built on PyTorch with pre-trained models.",
        features: [
            "Contextual embeddings",
            "Sequence labeling",
            "Text classification",
            "Multi-language support",
            "Research-ready"
        ],
        link: "https://github.com/flairNLP/flair",
        icon: "fas fa-star",
        rating: 4
    },
    {
        name: "LangChain",
        category: "nlp",
        description: "Framework for developing applications powered by language models through composability and modularity.",
        features: [
            "LLM orchestration",
            "Memory components",
            "Agent systems",
            "Document loaders",
            "Tool integration"
        ],
        link: "https://www.langchain.com",
        icon: "fas fa-link",
        rating: 5
    },
    
    // Computer Vision (7 tools)
    {
        name: "OpenCV",
        category: "cv",
        description: "Open source computer vision and machine learning software library with thousands of algorithms for real-time computer vision.",
        features: [
            "2500+ algorithms",
            "Real-time operation",
            "C++, Python, Java",
            "Deep learning modules",
            "Active development"
        ],
        link: "https://opencv.org",
        icon: "fas fa-eye",
        rating: 5
    },
    {
        name: "YOLOv8",
        category: "cv",
        description: "Latest version of the YOLO real-time object detection system with improved accuracy and speed.",
        features: [
            "Real-time detection",
            "Multiple tasks",
            "Easy training",
            "Export to many formats",
            "Active community"
        ],
        link: "https://ultralytics.com/yolov8",
        icon: "fas fa-object-group",
        rating: 4
    },
    {
        name: "TensorFlow.js",
        category: "cv",
        description: "JavaScript library for training and deploying ML models in the browser and on Node.js, including computer vision models.",
        features: [
            "Browser-based ML",
            "Pretrained models",
            "Transfer learning",
            "WebGL acceleration",
            "Node.js support"
        ],
        link: "https://www.tensorflow.org/js",
        icon: "fab fa-js",
        rating: 4
    },
    {
        name: "Detectron2",
        category: "cv",
        description: "Facebook AI Research's next-generation software system for object detection and segmentation built on PyTorch.",
        features: [
            "Object detection",
            "Instance segmentation",
            "Keypoint detection",
            "Panoptic segmentation",
            "Research platform"
        ],
        link: "https://github.com/facebookresearch/detectron2",
        icon: "fas fa-object-ungroup",
        rating: 4
    },
    {
        name: "MediaPipe",
        category: "cv",
        description: "Cross-platform framework for building multimodal applied ML pipelines, especially for face, hand, and pose tracking.",
        features: [
            "Face detection",
            "Hand tracking",
            "Pose estimation",
            "Object detection",
            "Multi-platform"
        ],
        link: "https://mediapipe.dev",
        icon: "fas fa-hands",
        rating: 3
    },
    {
        name: "MMDetection",
        category: "cv",
        description: "Open source object detection toolbox based on PyTorch with many pre-trained models and algorithms.",
        features: [
            "Modular design",
            "300+ models",
            "Multiple backbones",
            "Training tools",
            "Active community"
        ],
        link: "https://github.com/open-mmlab/mmdetection",
        icon: "fas fa-search",
        rating: 4
    },
    {
        name: "Kornia",
        category: "cv",
        description: "Differentiable computer vision library for PyTorch that implements traditional vision algorithms as deep learning layers.",
        features: [
            "PyTorch-native",
            "Differentiable ops",
            "Image processing",
            "Geometric vision",
            "Deep learning integration"
        ],
        link: "https://kornia.org",
        icon: "fas fa-camera",
        rating: 4
    },
    
    // Audio Processing (5 tools)
    {
        name: "Whisper",
        category: "audio",
        description: "OpenAI's automatic speech recognition system trained on 680,000 hours of multilingual and multitask supervised data.",
        features: [
            "Multilingual support",
            "Speech translation",
            "Noise robustness",
            "Open-source",
            "Command-line interface"
        ],
        link: "https://openai.com/research/whisper",
        icon: "fas fa-microphone",
        rating: 5
    },
    {
        name: "Jukebox",
        category: "audio",
        description: "Neural net that generates music, including rudimentary singing, as raw audio in a variety of genres and artist styles.",
        features: [
            "Music generation",
            "Vocals synthesis",
            "Multiple genres",
            "Artist styles",
            "Raw audio output"
        ],
        link: "https://openai.com/research/jukebox",
        icon: "fas fa-music",
        rating: 4
    },
    {
        name: "Spleeter",
        category: "audio",
        description: "Deezer's source separation library with pretrained models for separating audio tracks (vocals, drums, bass, etc.).",
        features: [
            "Stem separation",
            "Pretrained models",
            "Command-line tool",
            "Python library",
            "Real-time capable"
        ],
        link: "https://github.com/deezer/spleeter",
        icon: "fas fa-wave-square",
        rating: 4
    },
    {
        name: "VocalRemover",
        category: "audio",
        description: "Separates vocals and accompaniment from any song with powerful AI algorithms and provides high-quality output tracks.",
        features: [
            "Vocal isolation",
            "Karaoke creation",
            "Instrumental extraction",
            "Web interface",
            "High-quality output"
        ],
        link: "https://vocalremover.org",
        icon: "fas fa-microphone-slash",
        rating: 3
    },
    {
        name: "Audo.ai",
        category: "audio",
        description: "AI-powered audio enhancement tool that removes background noise and improves clarity for recordings and calls.",
        features: [
            "Noise removal",
            "Speech enhancement",
            "Real-time processing",
            "API available",
            "Batch processing"
        ],
        link: "https://www.audo.ai",
        icon: "fas fa-volume-up",
        rating: 3
    }
];

// DOM Elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const toolModal = document.getElementById('tool-modal');
const closeBtns = document.querySelectorAll('.tool-modal-close');
const tabBtns = document.querySelectorAll('.tab-btn');
const toolsContainer = document.getElementById('tools-container');
const categoryLinks = document.querySelectorAll('.footer-links a[data-category]');
const searchBar = document.getElementById('search-bar');
const themeToggle = document.getElementById('theme-toggle');
const currentYear = document.getElementById('current-year');

// Tool modal elements
const toolModalTitle = document.getElementById('tool-modal-title');
const toolModalImage = document.getElementById('tool-modal-image');
const toolModalDescription = document.getElementById('tool-modal-description');
const toolModalFeatures = document.getElementById('tool-modal-features');
const toolModalCategory = document.getElementById('tool-modal-category');
const toolModalRating = document.getElementById('tool-modal-rating');
const toolModalLink = document.getElementById('tool-modal-link');

// Set current year
currentYear.textContent = new Date().getFullYear();

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display all tools initially
    displayTools(aiTools);
    
    // Set up event listeners
    setupEventListeners();
    
    // Add fade-in animation to sections when scrolling
    setupScrollAnimations();
    
    // Check for saved theme preference
    checkThemePreference();
});

// Display tools in the grid
function displayTools(tools) {
    toolsContainer.innerHTML = '';
    
    if (tools.length === 0) {
        toolsContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3 style="color: var(--darker); margin-bottom: 1rem;">No tools found</h3>
                <p style="color: var(--gray);">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    tools.forEach((tool, index) => {
        const toolCard = document.createElement('div');
        toolCard.className = 'card tool-card fade-in';
        toolCard.dataset.category = tool.category;
        toolCard.dataset.toolId = index;
        toolCard.style.animationDelay = `${index * 0.1}s`;
        
        // Create star rating
        const stars = Array(5).fill('<i class="far fa-star"></i>');
        for (let i = 0; i < tool.rating; i++) {
            stars[i] = '<i class="fas fa-star"></i>';
        }
        
        toolCard.innerHTML = `
            <div class="card-header">
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div>
                    <h3 class="tool-title">${tool.name}</h3>
                    <span class="tool-category">${getCategoryName(tool.category)}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-rating">
                ${stars.join('')}
            </div>
            <div class="tool-actions">
                <button class="tool-details-btn btn btn-secondary" style="width: 100%; margin-bottom: 0.5rem;">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                <a href="${tool.link}" target="_blank" class="tool-link">
                    Visit Website <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        toolsContainer.appendChild(toolCard);
    });
    
    // Add event listeners to detail buttons
    document.querySelectorAll('.tool-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const toolId = this.closest('.tool-card').dataset.toolId;
            showToolDetails(aiTools[toolId]);
        });
    });
}

// Show tool details in modal
function showToolDetails(tool) {
    toolModalTitle.textContent = tool.name;
    toolModalDescription.textContent = tool.description;
    toolModalCategory.textContent = getCategoryName(tool.category);
    toolModalRating.textContent = `${tool.rating}/5`;
    toolModalLink.href = tool.link;
    
    // Set icon in modal image
    toolModalImage.innerHTML = `<i class="${tool.icon}"></i>`;
    
    // Populate features
    toolModalFeatures.innerHTML = '';
    tool.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        toolModalFeatures.appendChild(li);
    });
    
    // Show modal
    toolModal.classList.add('active');
    document.body.classList.add('no-scroll');
}

// Get formatted category name
function getCategoryName(category) {
    const names = {
        'generative': 'Generative AI',
        'chatbot': 'Chatbot',
        'video': 'Video Editing',
        'ml': 'Machine Learning',
        'nlp': 'Natural Language',
        'cv': 'Computer Vision',
        'audio': 'Audio Processing'
    };
    return names[category] || category;
}

// Filter tools by category
function filterTools(category) {
    if (category === 'all') {
        displayTools(aiTools);
    } else {
        const filteredTools = aiTools.filter(tool => tool.category === category);
        displayTools(filteredTools);
    }
}

// Search tools
function searchTools(query) {
    const filteredTools = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) || 
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        getCategoryName(tool.category).toLowerCase().includes(query.toLowerCase())
    );
    displayTools(filteredTools);
}

// Set up scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .community-cta').forEach(section => {
        observer.observe(section);
    });
}

// Check for saved theme preference
function checkThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Mobile navigation toggle
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Close modal buttons
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toolModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close modals when clicking outside
    toolModal.addEventListener('click', (e) => {
        if (e.target === toolModal) {
            toolModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Category tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter tools
            filterTools(btn.dataset.category);
        });
    });

    // Category links in footer
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            // Update active tab
            tabBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === category) {
                    btn.classList.add('active');
                } else if (category === 'all' && btn.dataset.category === 'all') {
                    btn.classList.add('active');
                }
            });
            // Filter tools
            filterTools(category);
            // Scroll to tools section
            document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Search functionality
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            searchTools(query);
        } else {
            // If search is empty, show tools based on active category
            const activeCategory = document.querySelector('.tab-btn.active').dataset.category;
            filterTools(activeCategory);
        }
    });

    // Highlight active section in navigation
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});