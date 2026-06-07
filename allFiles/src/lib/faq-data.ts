/**
 * Comprehensive FAQ database and Profile Context for training Bipin's portfolio chatbot and robot.
 */

export const BIPIN_PROFILE = `
Full Name: Bipin Chandra Pandey
Role: Full Stack Web Developer & MCA Student
Current Location: Gorakhpur, Uttar Pradesh, India
Email: official.bipinchandra@gmail.com
Phone: +91 9565025178
GitHub: github.com (Bipin's Github)
Socials: Instagram, Twitter

Education:
1. Master of Computer Applications (MCA) - Institute of Technology & Management (ITM GKP), Gorakhpur, UP (2025 - 2027). Specializing in advanced software engineering, cloud computing, and AI/ML fundamentals.
2. Bachelor of Pharmacy (B.Pharm) - BBDNIIT Lucknow, UP (2015 - 2020). Completed with a strong foundation in pharmacology, medicinal chemistry, and laboratory research.
3. Intermediate (12th) - Board of High School & Intermediate Education, Barhaj, Deoria, UP (2013 - 2015), Science stream (Maths, Physics, Chemistry).
4. High School (10th) - Board of High School & Intermediate Education, Barhaj, Deoria, UP (2012 - 2013), Distinction in Mathematics and Science.

Skills:
- Frontend: HTML5/CSS3, JavaScript, React.js, Redux, Next.js, Tailwind CSS, Bootstrap, UI/UX Design.
- Backend: Node.js, Express.js.
- Databases: MongoDB, PostgreSQL, MySQL.
- Tools & DevOps: Git, GitHub, Docker, deployment pipelines.

Featured Projects:
1. Bike-time — Immersive Experience: Interactive biking experience website with dynamic animations, route exploration, and responsive layouts. Built with React, Node.js, Three.js, and Tailwind CSS.
2. 3D Portfolio Website — Interactive & Animated: A premium portfolio featuring real-time 3D elements with Spline, animations with GSAP, and a responsive React UI.
3. 3D Website Landing Page: Modern landing page using Spline, HTML, CSS, and JavaScript.

Career Transition (Pharmacy to IT):
Bipin has a unique background starting with Bachelor of Pharmacy (B.Pharm). During his pharmacy studies and early career, he developed a deep interest in software, programming, and technology's role in solving complex problems. Driven by this passion, he decided to switch his career to Computer Science and enrolled in the MCA program at ITM Gorakhpur. He has successfully transformed into a skilled Full Stack Developer, bridging his strong analytical skills from pharmacy with computer science.
`;

export interface FAQItem {
    keywords: string[];
    question: string;
    answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
    // Greetings & Essentials
    {
        keywords: ["hi", "hello", "hey", "greetings", "namaste", "whatsup", "whats up", "hola"],
        question: "Hi / Hello / Greetings",
        answer: "Hello! I am Bipin's AI Assistant. I can tell you about Bipin's skills, projects, education, contact details, or why he transitioned from pharmacy to software engineering. How can I help you today?"
    },
    {
        keywords: ["how are you", "how's it going", "how are you doing", "sab thik"],
        question: "How are you?",
        answer: "I'm running at peak efficiency and fully loaded with details about Bipin's portfolio! How are you doing, and how can I help you?"
    },
    {
        keywords: ["who is bipin", "tell me about bipin", "who is this", "about bipin", "introduce bipin"],
        question: "Who is Bipin Chandra Pandey?",
        answer: "Bipin Chandra Pandey is an aspiring Full-Stack Web Developer and a Master of Computer Applications (MCA) student at ITM GKP. He specializes in building modern web applications using React, Node.js, Express, and databases like MongoDB/PostgreSQL."
    },
    {
        keywords: ["who are you", "what are you", "your name", "robot name"],
        question: "Who are you?",
        answer: "I am Bipin's AI Portfolio Assistant! You can ask me anything about his technical projects, education, skills, contact info, or even voice-command me using the robot on the screen."
    },

    // Education
    {
        keywords: ["education", "qualification", "study", "where did he study", "degree", "college", "school"],
        question: "What is Bipin's educational qualification?",
        answer: "Bipin is currently pursuing his MCA (2025-2027) from ITM Gorakhpur. He holds a Bachelor of Pharmacy (B.Pharm) from BBDNIIT Lucknow (2015-2020), and completed his Intermediate and High School in Barhaj, Deoria, UP."
    },
    {
        keywords: ["mca", "itm", "itm gkp", "gorakhpur", "post graduate"],
        question: "Tell me about Bipin's MCA.",
        answer: "Bipin is pursuing his Master of Computer Applications (MCA) at the Institute of Technology & Management (ITM GKP) in Gorakhpur, UP (batch 2025-2027), where he focuses on software engineering, web development, cloud technologies, and AI."
    },
    {
        keywords: ["bpharm", "b.pharm", "pharmacy", "bbdniit", "lucknow"],
        question: "Tell me about Bipin's Pharmacy degree.",
        answer: "Bipin completed his Bachelor of Pharmacy (B.Pharm) from BBDNIIT Lucknow (2015 - 2020). He gained strong skills in pharmaceutical sciences, pharmacology, and chemical analysis, which enhanced his research and analytical abilities."
    },

    // Career Switch (Critical Q&A)
    {
        keywords: ["switch", "change", "transition", "why computer", "why it", "why coding", "pharmacy to cs", "b.pharm to mca", "why mca after bpharm"],
        question: "Why did Bipin switch from Pharmacy to Computer Science / MCA?",
        answer: "While studying pharmacy, Bipin discovered a fascination with programming, logic, and how software solves real-world problems. Recognizing his passion for tech, he decided to shift to computer science and enrolled in MCA. He now successfully applies his analytical science background to full-stack software development!"
    },

    // Technical Skills
    {
        keywords: ["skills", "languages", "technologies", "what does he know", "tech stack", "programming"],
        question: "What are Bipin's technical skills?",
        answer: "Bipin's technical stack includes Frontend (HTML5, CSS3, JavaScript, React/Redux, Next.js, Tailwind CSS, Bootstrap), Backend (Node.js, Express.js), Databases (MongoDB, PostgreSQL, MySQL), and DevOps tools (Git, GitHub, Docker)."
    },
    {
        keywords: ["frontend", "css", "html", "react", "nextjs", "javascript", "tailwind"],
        question: "What frontend skills does Bipin have?",
        answer: "Bipin is highly skilled in React.js, Redux, Next.js, Tailwind CSS, Bootstrap, JavaScript (ES6+), HTML5, and CSS3, with a keen focus on crafting premium, interactive, and responsive user interfaces."
    },
    {
        keywords: ["backend", "nodejs", "node", "express", "api", "database", "mongodb", "postgresql", "mysql"],
        question: "What backend and database technologies does Bipin use?",
        answer: "Bipin develops robust backend systems using Node.js and Express.js, and works with databases like MongoDB, PostgreSQL, and MySQL, including designing RESTful APIs and database schemas."
    },
    {
        keywords: ["devops", "docker", "git", "github", "deployment"],
        question: "Does Bipin know DevOps or cloud tools?",
        answer: "Yes, Bipin uses Git and GitHub for version control and collaborative development, and is learning Docker along with modern deployment workflows and cloud basics."
    },

    // Projects
    {
        keywords: ["projects", "what did he build", "portfolio items", "work samples"],
        question: "What projects has Bipin built?",
        answer: "Bipin has built several key projects, including 'Bike-time' (an interactive 3D biking experience website), a highly animated '3D Portfolio Website' with Spline and GSAP, and a '3D Landing Page' using Spline, HTML, and CSS."
    },
    {
        keywords: ["bike-time", "biketime", "bike time", "threejs", "three.js"],
        question: "What is the 'Bike-time' project?",
        answer: "Bike-time is an immersive website that offers an interactive biking experience. It features dynamic animations, route exploration, and stats, built using React, Node.js, Three.js, and Tailwind CSS."
    },
    {
        keywords: ["3d portfolio", "spline", "gsap", "animations"],
        question: "Tell me about Bipin's 3D Portfolio project.",
        answer: "Bipin built an interactive 3D Portfolio website featuring real-time 3D elements integrated with Spline, fluid animations using GSAP (GreenSock), and a responsive UI using React and Tailwind CSS."
    },
    {
        keywords: ["landing page", "3d landing page"],
        question: "Tell me about Bipin's 3D Landing Page project.",
        answer: "It is a modern 3D landing page utilizing Spline for 3D graphics, along with HTML, CSS, and JavaScript, creating a responsive and engaging user experience across all devices."
    },

    // Contact details
    {
        keywords: ["contact", "email", "phone", "number", "mobile", "social", "instagram", "twitter", "hire", "message", "mail"],
        question: "How can I contact Bipin?",
        answer: "You can email Bipin at official.bipinchandra@gmail.com, call him at +91 9565025178, or send a message directly using the 'Get In Touch' form on this website. He is also on Instagram and Twitter!"
    },
    {
        keywords: ["resume", "cv", "download resume", "download cv", "pdf"],
        question: "Where can I download Bipin's resume/CV?",
        answer: "You can download Bipin's resume directly by clicking the 'Download CV' button in the Hero (intro) section of this website, or access it at /Bipin_Chandra_Pandey_Resume_Final.pdf"
    },
    {
        keywords: ["location", "where does he live", "city", "state", "address"],
        question: "Where is Bipin located?",
        answer: "Bipin lives in Gorakhpur, Uttar Pradesh, India. He was educated in Barhaj (Deoria), Lucknow, and Gorakhpur."
    },

    // Miscellaneous/Fun
    {
        keywords: ["hobby", "hobbies", "interests", "free time"],
        question: "What are Bipin's hobbies and interests?",
        answer: "Beyond coding, Bipin enjoys exploring new technologies, experimenting with 3D design tools (like Spline), learning about cloud architecture, and researching pharmaceutical science trends."
    },
    {
        keywords: ["freelance", "work", "job", "hire me", "hiring", "open to work"],
        question: "Is Bipin open to job opportunities or freelance work?",
        answer: "Yes, Bipin is actively seeking full-time positions, internships, and freelance projects in Full Stack Development. You can contact him at official.bipinchandra@gmail.com to discuss opportunities!"
    }
];

/**
 * Searches the local FAQ database for a matching question.
 * Returns the answer if a good match is found.
 */
export function getLocalFAQResponse(query: string): string | null {
    const normalized = query.toLowerCase().replace(/[^\w\s]/g, "").trim();
    if (!normalized) return null;

    // 1. Direct short phrase mapping
    const greetings = ["hi", "hello", "hey", "greetings", "namaste", "whatsup", "whats up", "hola", "wassup", "good morning", "good afternoon", "good evening"];
    if (greetings.some(g => normalized === g || normalized.startsWith(g + " "))) {
        return FAQ_ITEMS[0].answer; // Greeting
    }

    if (normalized === "bipin" || normalized === "bipin chandra" || normalized === "bipin pandey" || normalized === "bipin chandra pandey") {
        return FAQ_ITEMS[2].answer; // Who is Bipin
    }

    // 2. Keyword Classification
    const hasBipin = normalized.includes("bipin") || normalized.includes("pandey") || normalized.includes("who is") || normalized.includes("about") || normalized.includes("kaun") || normalized.includes("introduce") || normalized.includes("explain");
    
    const isEducation = normalized.includes("education") || normalized.includes("qualification") || normalized.includes("study") || normalized.includes("college") || normalized.includes("school") || normalized.includes("mca") || normalized.includes("bpharm") || normalized.includes("b.pharm") || normalized.includes("degree") || normalized.includes("itm") || normalized.includes("bbdniit");
    const isSkills = normalized.includes("skill") || normalized.includes("tech") || normalized.includes("language") || normalized.includes("know") || normalized.includes("react") || normalized.includes("node") || normalized.includes("javascript") || normalized.includes("mongo") || normalized.includes("postgres") || normalized.includes("stack") || normalized.includes("tailwind") || normalized.includes("nextjs") || normalized.includes("css") || normalized.includes("html");
    const isProjects = normalized.includes("project") || normalized.includes("portfolio") || normalized.includes("bike-time") || normalized.includes("biketime") || normalized.includes("3d portfolio") || normalized.includes("landing page") || normalized.includes("work");
    const isContact = normalized.includes("contact") || normalized.includes("email") || normalized.includes("phone") || normalized.includes("number") || normalized.includes("mobile") || normalized.includes("social") || normalized.includes("instagram") || normalized.includes("twitter") || normalized.includes("hire") || normalized.includes("message") || normalized.includes("mail") || normalized.includes("connect");
    const isResume = normalized.includes("resume") || normalized.includes("cv") || normalized.includes("pdf") || normalized.includes("download");
    const isSwitch = normalized.includes("switch") || normalized.includes("change") || normalized.includes("transition") || normalized.includes("why computer") || normalized.includes("why it") || normalized.includes("why coding") || normalized.includes("pharmacy to cs") || normalized.includes("b.pharm to mca") || normalized.includes("why mca after bpharm") || normalized.includes("pharmacy to it") || normalized.includes("pharmacy to software");

    if (hasBipin || isEducation || isSkills || isProjects || isContact || isResume || isSwitch) {
        if (isSwitch) {
            return FAQ_ITEMS.find(item => item.question.includes("switch"))?.answer || null;
        }
        if (isResume) {
            return FAQ_ITEMS.find(item => item.question.includes("resume"))?.answer || null;
        }
        if (isEducation) {
            return FAQ_ITEMS.find(item => item.question.includes("qualification"))?.answer || null;
        }
        if (isSkills) {
            return FAQ_ITEMS.find(item => item.question.includes("skills"))?.answer || null;
        }
        if (isProjects) {
            return FAQ_ITEMS.find(item => item.question.includes("projects"))?.answer || null;
        }
        if (isContact) {
            return FAQ_ITEMS.find(item => item.question.includes("contact"))?.answer || null;
        }
        
        // If it just has Bipin or general "about" or "who is", return who is Bipin
        return FAQ_ITEMS.find(item => item.question.includes("Who is Bipin"))?.answer || null;
    }

    // Fallback search using original keyword count
    const words = normalized.split(/\s+/);
    let bestMatch: FAQItem | null = null;
    let maxMatchedKeywords = 0;

    for (const item of FAQ_ITEMS) {
        let matchedCount = 0;
        for (const kw of item.keywords) {
            if (words.includes(kw) || normalized.includes(kw)) {
                matchedCount++;
            }
        }
        if (matchedCount > 0 && matchedCount > maxMatchedKeywords) {
            maxMatchedKeywords = matchedCount;
            bestMatch = item;
        }
    }

    if (bestMatch && (maxMatchedKeywords >= 1 || words.length === 1)) {
        return bestMatch.answer;
    }

    return null;
}
