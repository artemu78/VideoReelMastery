// Image URLs from Pexels and other free stock image sites with appropriate attribution
export const REAL_IMAGES = {
  hero: "https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg", // Creative workspace setup
  
  // Process steps
  process: {
    aiScript: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg", // Laptop with text/AI 
    voice: "https://images.pexels.com/photos/8412420/pexels-photo-8412420.jpeg", // Microphone setup
    aiVideo: "https://images.pexels.com/photos/7048048/pexels-photo-7048048.jpeg", // Digital art/visuals
    stockMedia: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg", // Media library concept
    sound: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg", // Audio mixer
    capcut: "https://images.pexels.com/photos/2244082/pexels-photo-2244082.jpeg" // Video editing workstation
  },
  
  // Tools
  tools: {
    capcut: "https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg", // Video edit timeline
    elevenLabs: "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg", // Sound waves
    pikaLabs: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg", // Digital art
    sora: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg", // AI visual concept
    klingAI: "https://images.pexels.com/photos/1820567/pexels-photo-1820567.jpeg", // Creative visuals
    hailuoAI: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg" // Motion graphics concept
  },
  
  // Testimonial avatars
  testimonials: {
    sarah: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg", // Professional woman headshot
    marcus: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", // Professional man headshot
    elena: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" // Professional woman headshot
  }
};

export const VIDEO_CREATION_STEPS = [
  {
    id: 1,
    title: "AI Script Generation",
    icon: "pen-fancy",
    description: "Learn to create compelling scripts and visual descriptions using specialized AI writing assistants.",
    features: [
      "Prompt engineering for video scripts",
      "Creating engaging narratives",
      "Visual scene planning"
    ],
    color: "primary"
  },
  {
    id: 2,
    title: "Voice Generation with ElevenLabs",
    icon: "microphone-alt",
    description: "Master the art of creating professional narration using ElevenLabs' advanced voice synthesis technology.",
    features: [
      "Voice selection and customization",
      "Emotion and intonation control",
      "Audio mixing techniques"
    ],
    color: "secondary"
  },
  {
    id: 3,
    title: "AI Video Generation",
    icon: "film",
    description: "Generate stunning visuals using the latest AI video creation tools like KlingAI, Hailuo AI, Pika, and Sora.",
    features: [
      "Tool selection for different visual needs",
      "Prompt crafting for best results", 
      "Style and consistency control"
    ],
    color: "accent"
  },
  {
    id: 4,
    title: "Stock Media Integration",
    icon: "photo-video",
    description: "Learn to find and integrate high-quality visual assets from Sora library and CapCut's built-in media collections.",
    features: [
      "Media search techniques",
      "Visual consistency matching",
      "Copyright and licensing awareness"
    ],
    color: "primary"
  },
  {
    id: 5,
    title: "Sound Effects & Music",
    icon: "volume-up",
    description: "Create and integrate professional audio elements using ElevenLabs sound studio and CapCut's audio library.",
    features: [
      "Sound effect generation and selection",
      "Music tracks that enhance your story",
      "Professional audio mixing techniques"
    ],
    color: "secondary"
  },
  {
    id: 6,
    title: "CapCut Editing Mastery",
    icon: "cut",
    description: "Bring everything together in CapCut with professional editing techniques to create polished, engaging video reels.",
    features: [
      "Timeline organization and editing",
      "Transitions and visual effects",
      "Exporting for different platforms"
    ],
    color: "accent"
  }
];

export const AI_TOOLS = [
  {
    name: "CapCut Video Editor",
    description: "The professional-grade video editor that makes complex editing simple with AI-powered features.",
    tags: ["Video Editing", "Effects", "Transitions"],
    gradient: "from-primary/90 to-secondary/90"
  },
  {
    name: "ElevenLabs",
    description: "Create human-like voices and professional sound effects for your videos with advanced AI.",
    tags: ["Voice Generation", "Sound Effects", "Audio Mixing"],
    gradient: "from-secondary/90 to-accent/90"
  },
  {
    name: "Pika Labs",
    description: "Generate custom video clips from text descriptions with remarkable quality and creative control.",
    tags: ["Text-to-Video", "Animation", "Style Transfer"],
    gradient: "from-accent/90 to-primary/90"
  },
  {
    name: "Sora",
    description: "Create photorealistic videos from text with OpenAI's revolutionary video generation model.",
    tags: ["Photorealism", "Long-form Video", "Scene Generation"],
    gradient: "from-primary/90 to-secondary/90"
  },
  {
    name: "KlingAI",
    description: "Generate stylized video content with powerful control over aesthetics and motion.",
    tags: ["Style Control", "Motion Design", "Visual Effects"],
    gradient: "from-secondary/90 to-accent/90"
  },
  {
    name: "Hailuo AI",
    description: "Create dynamic visual sequences with advanced AI that specializes in fluid motion and transitions.",
    tags: ["Motion Graphics", "Seamless Transitions", "Visual Storytelling"],
    gradient: "from-accent/90 to-primary/90"
  }
];

export const PRICING_PLANS = [
  {
    name: "Basic Access",
    price: 99,
    period: "one-time",
    description: "Perfect for beginners looking to learn the fundamentals of AI video creation.",
    features: [
      { included: true, text: "Full masterclass access" },
      { included: true, text: "30-day access to recordings" },
      { included: true, text: "PDF workbooks" },
      { included: false, text: "Private community access" },
      { included: false, text: "1-on-1 feedback session" }
    ],
    cta: "Choose Basic",
    popular: false
  },
  {
    name: "Premium Access",
    price: 199,
    period: "one-time",
    description: "Complete package for creators serious about mastering AI video production.",
    features: [
      { included: true, text: "Everything in Basic" },
      { included: true, text: "Lifetime access to recordings" },
      { included: true, text: "Private community access" },
      { included: true, text: "Advanced templates & assets" },
      { included: true, text: "Email support" }
    ],
    cta: "Choose Premium",
    popular: true
  },
  {
    name: "VIP Access",
    price: 349,
    period: "one-time",
    description: "Exclusive mentorship package for professionals seeking personalized guidance.",
    features: [
      { included: true, text: "Everything in Premium" },
      { included: true, text: "1-on-1 feedback session (60 min)" },
      { included: true, text: "Custom project consultation" },
      { included: true, text: "Priority email support" },
      { included: true, text: "Early access to future updates" }
    ],
    cta: "Choose VIP",
    popular: false
  }
];

export const FAQ_ITEMS = [
  {
    question: "Do I need prior video editing experience?",
    answer: "No prior experience is needed. We start with the fundamentals and guide you through each step of the process. The masterclass is designed to be accessible for beginners while still providing valuable insights for experienced creators."
  },
  {
    question: "What equipment and software do I need?",
    answer: "You'll need a computer with internet access, CapCut (which has a free version), and access to the AI tools we cover. We provide guidance on free trials and alternatives where appropriate. No specialized hardware is required beyond a standard computer."
  },
  {
    question: "Do the AI tools covered require subscriptions?",
    answer: "Most of the AI tools we cover offer free trials or have free tiers. The course price does not include subscriptions to these tools. We'll show you how to maximize free options and guide you on which paid tools might be worth investing in based on your specific needs."
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "Basic access includes 30 days of access to recordings, while Premium and VIP packages include lifetime access to all course materials, updates, and the private community forum. You can download the workbooks and resources for future reference regardless of your plan."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 14-day satisfaction guarantee. If you're not completely satisfied with the masterclass, you can request a full refund within 14 days of purchase. Simply email our support team with your purchase details."
  },
  {
    question: "How is the masterclass delivered?",
    answer: "The masterclass includes a mix of pre-recorded video lessons, downloadable resources, interactive worksheets, and for Premium and VIP members, access to a private community for feedback and support. All content is accessible through our secure online platform."
  }
];

export const TESTIMONIALS = [
  {
    text: "This masterclass completely transformed my social media content. I'm now creating videos in hours that used to take me days, and they look so much more professional!",
    name: "Sarah Johnson",
    title: "Social Media Creator"
  },
  {
    text: "As a marketing director, this course has been a game-changer for our team. We're now producing in-house content that rivals what we used to outsource for thousands.",
    name: "Marcus Chen",
    title: "Marketing Director"
  },
  {
    text: "The AI tools section alone was worth the price. I'm now creating videos for my online courses that look like they had a professional production team behind them.",
    name: "Elena Rodriguez",
    title: "Online Educator"
  }
];
