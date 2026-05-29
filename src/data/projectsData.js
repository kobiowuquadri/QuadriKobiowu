import trakImg from '../assets/trak1.png';
import trakApp1 from '../assets/trakapp1.png';
import trakApp2 from '../assets/trakapp2.png';
import trakApp3 from '../assets/trakapp3.png';
import trakApp4 from '../assets/trakapp4.png';
import safenaijaImg from '../assets/safanaija.png';
import safenaijaApp1 from '../assets/safenaijapp1.png';
import safenaijaApp2 from '../assets/safenaijaapp2.jpg';
import kodeliftImg from '../assets/kodelift.png';
import sirajImg from '../assets/siraj.png';
import sirajApp1 from '../assets/sirajapp1.png';
import sirajApp2 from '../assets/sirajapp2.png';

export const projects = [
    {
        id: "safenaija",
        title: "SafeNaija",
        shortDescription: "Emergency response and personal safety platform for fast alerts, location sharing, and trusted contact coordination.",
        fullDescription: "SafeNaija helps people quickly alert trusted contacts when they are in danger or need urgent assistance. The platform supports emergency messaging, location context, and safety workflows for high-pressure situations where speed and clarity matter.",
        problem: "People need a faster way to notify trusted contacts during emergencies such as accidents, health incidents, robberies, kidnappings, and missing-person situations.",
        impact: "Reduces friction during emergencies by making alerts, location details, and contact coordination available in one practical mobile-first workflow.",
        image: safenaijaImg,
        gallery: [safenaijaApp1, safenaijaApp2],
        technologies: ["React Native", "Expo", "React", "TailwindCSS", "Express.js", "MySQL", "TypeScript", "Firebase"],
        liveLink: "https://safenaija.com/",
        appStoreLink: "https://apps.apple.com/us/app/safenaija/id6755318110",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.safenaija.mobile",
        role: "Software Engineer",
        features: [
            "Emergency alert workflows",
            "Real-time location sharing",
            "Trusted contact management",
            "Health and personal safety alerts",
            "Mobile-first user experience",
            "QR-code scanning"
        ],
        highlight: "A practical safety product designed to help people act quickly when every second matters."
    },
    {
        id: "kodelift",
        title: "Kodelift",
        shortDescription: "Grassroots technology empowerment initiative helping young learners build practical software skills.",
        fullDescription: "Kodelift is a grassroots technology empowerment initiative designed to equip young minds with practical software development skills, mentorship, and real-world project experience. The program focuses on structured learning, community support, and early exposure to technology careers.",
        problem: "Many young learners need accessible, practical, and guided pathways into technology beyond theory-heavy learning.",
        impact: "Creates early access to software development education through structured training, mentorship, and project-based learning for students.",
        image: kodeliftImg,
        gallery: [kodeliftImg],
        technologies: ["Tech Education", "Mentorship", "Community Building", "Software Development Training"],
        liveLink: "https://kodelift.ng/",
        role: "Program Coordinator & Instructor",
        features: [
            "Structured software development training",
            "Mentorship for young learners",
            "Project-based learning",
            "Community technology empowerment",
            "Secondary school outreach",
            "Career readiness guidance"
        ],
        highlight: "Equipping young minds with practical technology skills and the confidence to build."
    },
    {
        id: "imprexitrak",
        title: "ImprexiTrak",
        shortDescription: "Project tracking and workflow management platform for transparent execution, team coordination, and delivery visibility.",
        fullDescription: "ImprexiTrak helps teams track projects, tasks, documents, conversations, and delivery progress in one operational platform. It is designed for teams that need clearer visibility, better accountability, and smoother communication across project stages.",
        problem: "Teams managing active projects need a single source of truth for progress, documents, tasks, updates, and communication.",
        impact: "Improves execution visibility by centralizing project tracking, team collaboration, notifications, and workflow management.",
        image: trakImg,
        gallery: [trakApp1, trakApp4, trakApp2, trakApp3],
        technologies: ["React", "TailwindCSS", "Zustand", "Express.js", "MySQL", "Socket.io", "Firebase", "PWA"],
        liveLink: "https://trak.com.ng/",
        role: "Software Engineer",
        features: [
            "Real-time project tracking",
            "Task management and workflow updates",
            "Team chat and communication",
            "Notification system",
            "Document management",
            "Progress visibility dashboards"
        ],
        highlight: "A workflow platform built to keep teams, documents, and decisions moving together."
    },
    {
        id: "siraj",
        title: "Siraj",
        shortDescription: "Ramadan reading, reflection, and journaling companion designed to support consistent Qur'an engagement.",
        fullDescription: "Siraj is a Ramadan companion app for structured Qur'an reading, daily reflection, and private spiritual journaling. It helps users keep a meaningful routine by breaking the month into guided daily sessions.",
        problem: "Many people want a consistent Ramadan reading and reflection habit but need a simple structure that keeps daily progress, reflection, and journaling in one place.",
        impact: "Encourages consistent daily engagement through guided reading sessions, reflection prompts, and a calm mobile experience.",
        image: sirajImg,
        gallery: [sirajApp1, sirajApp2],
        technologies: ["React Native", "Expo", "TypeScript", "Express.js", "MySQL", "Firebase"],
        liveLink: "https://siraj-delta.vercel.app/",
        role: "Software Engineer",
        features: [
            "Daily Ramadan reading sessions",
            "Qur'an completion planning",
            "Reflection prompts",
            "Private spiritual journaling",
            "Mobile-first experience"
        ],
        highlight: "A focused companion for building a steadier Ramadan reading and reflection routine."
    }
];
