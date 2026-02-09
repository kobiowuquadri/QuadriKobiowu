import sirajImg from '../assets/siraj.png';
import sirajApp1 from '../assets/sirajapp1.png';
import sirajApp2 from '../assets/sirajapp2.png';
import trakImg from '../assets/trak1.png';
import trakApp1 from '../assets/trakapp1.png';
import trakApp2 from '../assets/trakapp2.png';
import trakApp3 from '../assets/trakapp3.png';
import trakApp4 from '../assets/trakapp4.png';
import safenaijaImg from '../assets/safanaija.png';
import safenaijaApp1 from '../assets/safenaijapp1.png';
import safenaijaApp2 from '../assets/safenaijaapp2.jpg';
import kodeliftImg from '../assets/kodelift.png';

export const projects = [
    {
        id: "kodelift",
        title: "Kodelift",
        shortDescription: "Code. Grow. Lead. A grassroots tech empowerment initiative designed to equip young minds with future-ready skills.",
        fullDescription: "KODELIFT is a grassroots tech empowerment initiative designed to equip young minds with the skills to build their future. Through 6 weeks of intensive structured training, mentorship, and real-world projects, we empower students in Ibadan, Nigeria to become the next generation of tech leaders.\n\nFor the maiden edition in 2025, the program focuses on secondary schools within the City of Ibadan, selecting nominees based on aptitude and interest in technology.",
        image: kodeliftImg,
        gallery: [kodeliftImg],
        liveLink: "https://kodelift.ng/",
        technologies: ["Tech Education", "Mentorship", "Community Building", "Software Development Training"],
        role: "Lead Software Engineer Instructor",
        features: [
            "6 Weeks Intensive Training",
            "Structured Curriculum & Mentorship",
            "Real-world Project Experience",
            "Secondary Schools Focus (Ibadan)",
            "Aptitude-based Selection Process",
            "Full Sponsorship for Qualified Students"
        ],
        highlight: "Equipping young minds with the skills to build their future."
    },
    {
        id: "safenaija",
        title: "SafeNaija",
        shortDescription: "Your Safety, Our Alert. Instantly alert your trusted emergency contacts when you’re in danger.",
        fullDescription: "SafeNaija helps you quickly alert your trusted contacts when you are in danger or need urgent assistance.\n\nWith just one tap, the app sends a clear emergency message along with your location and time to your emergency contacts for situations like kidnappings, robberies, accidents, health emergencies, and missing persons — so help can reach you faster.",
        image: safenaijaImg,
        gallery: [safenaijaApp1, safenaijaApp2],
        technologies: ["React Native", "Expo", "React.js", "TailwindCSS", "Express.js", "MySQL", "TypeScript", "Firebase"],
        liveLink: "https://safenaija.com/",
        appStoreLink: "https://apps.apple.com/us/app/safenaija/id6755318110",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.safenaija.mobile",
        role: "Software Engineer",
        features: [
            "Emergency Alert System (Kidnapping, Robbery, Accidents)",
            "Real-time Location Sharing",
            "Health & Medical Emergency Alerts",
            "Missing Person Broadcasts",
            "Live Chat Box",
            "QR-Code Scanning"
        ],
        highlight: "With a single tap, alerts are sent instantly so help can reach you when it matters most."
    },
    {
        id: "trak",
        title: "Trak",
        shortDescription: "An architectural project management platform that provides real-time tracking and transparency for construction projects.",
        fullDescription: "TRAK is an architectural project management platform that provides real-time tracking and transparency for your construction projects. You can monitor progress, access documents, receive notifications, and communicate with your project team all in one place.\n\nTRAK is designed for all types of architectural projects including residential homes, commercial buildings, renovations, and new constructions. Our platform scales to fit projects of any size.",
        image: trakImg,
        gallery: [trakApp1, trakApp4, trakApp2, trakApp3],
        technologies: ["React.js", "TailwindCSS", "Zustand", "Express.js", "MySQL", "Socket.io", "Firebase", "PWA"],
        liveLink: "https://trak.com.ng/",
        role: "Software Engineer",
        features: [
            "Real-time Project Tracking",
            "Task Management & Automation",
            "Team Chat & Communication",
            "Notification System",
            "Document Management"
        ],
        highlight: "Your construction projects, transparent and on track."
    },
    {
        id: "siraj",
        title: "Sirāj",
        shortDescription: "سِرَاجٌ مُنِيرٌ\n\nA light for every day of Ramadan. Find guidance, reflection, and clarity in the Holy Qur’an with a companion designed for your heart.",
        fullDescription: "Ramadan is not just about fasting; it is about reconnecting with the Divine speech. The Qur'an was sent down as a guidance for mankind. Sirāj helps you honor this connection by making daily reading and reflection effortless and beautiful.\n\nThis is a solution I'm developing for myself to ensure a meaningful observance of Ramadan.",
        image: sirajImg,
        gallery: [sirajApp1, sirajApp2],
        technologies: ["React Native", "Expo", "TypeScript", "Express.js", "MySQL", "Firebase"],
        liveLink: "https://siraj-delta.vercel.app/",
        role: "Software Engineer",
        features: [
            "Complete the Qur’an in 29 or 30 days",
            "Deep daily reflections",
            "Private spiritual journaling"
        ],
        workflow: [
            {
                step: "01",
                title: "Read & Recite",
                description: "Read your assigned Juz’ or portion with focus and clarity."
            },
            {
                step: "02",
                title: "Reflect Deeply",
                description: "Ponder on a selected Ayah and its meaning for your life."
            },
            {
                step: "03",
                title: "Journal & Grow",
                description: "Capture your thoughts and spiritual state in your private log."
            }
        ],
        highlight: "Unlock Your Day: Each day opens a new guided session perfectly timed for Ramadan."
    }
];
