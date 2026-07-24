import trakImg from '../assets/trak1.png';
import trakApp1 from '../assets/trakapp1.png';
import trakApp2 from '../assets/trakapp2.png';
import trakApp3 from '../assets/trakapp3.png';
import trakApp4 from '../assets/trakapp4.png';
import safenaijaImg from '../assets/safanaija.png';
import safenaijaApp1 from '../assets/safenaijapp1.png';
import safenaijaApp2 from '../assets/safenaijaapp2.jpg';
import kodeliftImg from '../assets/kodelift.png';
import pagiaCardImg from '../assets/pagia.png';
import pagiaImg from '../assets/pagia-project.jpg';
import pagiaMobileLibrary from '../assets/pagia-mobile-library.png';
import pagiaMobileDetail from '../assets/pagia-mobile-detail.png';
import rekrutklinFeatureImg from '../assets/feature design.png';
import rekrutklinPrescreeningImg from '../assets/rekrutklin-prescreening.png';
import rekrutklinDashboardImg from '../assets/rekrutklin-dashboard.png';
import rekrutklinParticipantDetailsImg from '../assets/rekrutklin-participant-details.png';
import rekrutklinVideoSessionImg from '../assets/rekrutklin-video-session.png';
import gfbHeroDesktopImg from '../assets/gfb-website-hero-desktop.png';
import gfbAboutDesktopImg from '../assets/gfb-website-about-desktop.png';
import gfbMobileImg from '../assets/gfb-website-mobile.png';
import cyberblockDesktopImg from '../assets/cyberblock-website-desktop.png';
import cyberblockIphoneImg from '../assets/cyberblock-website-iphone.png';
import cyberblockGalaxyImg from '../assets/cyberblock-website-galaxy.png';
import modulesDesktopImg from '../assets/modules-website-desktop.png';
import modulesTabletImg from '../assets/modules-website-tablet.png';
import modulesIphoneImg from '../assets/modules-website-iphone.png';
import codeVortexDesktopImg from '../assets/codevortex-website-desktop.png';
import codeVortexTabletImg from '../assets/codevortex-website-tablet.png';
import codeVortexMobileImg from '../assets/codevortex-website-mobile.png';
import sirajImg from '../assets/siraj.png';
import sirajApp1 from '../assets/sirajapp1.png';
import sirajApp2 from '../assets/sirajapp2.png';

export const projects = [
    {
        id: "pagia",
        title: "Pagia",
        shortDescription: "Scalable backend for digital publishing, book commerce, ads, subscriptions, payouts, KYC, messaging, and revenue tracking.",
        fullDescription: "I built the entire backend system for Pagia, a digital publishing and e-commerce platform that enables authors and bookstores to publish, sell, advertise, and monetize books while giving readers access to a searchable book marketplace and reading experience.\n\nThe backend is built with Node.js, Express.js, TypeScript, Sequelize, MySQL, Socket.IO, Cloudinary, JWT authentication, cron jobs, and payment integrations. It includes role-based flows for readers, authors, bookstores, and administrators.",
        problem: "Pagia needed a structured backend that could support a multi-role publishing marketplace with book sales, reader access, author monetization, bookstore inventory, ads, subscriptions, KYC, messaging, and admin operations.",
        impact: "This backend supports a multi-role digital publishing marketplace with real-time communication, monetization, subscriptions, advertising, secure content access, and automated revenue operations.",
        image: pagiaCardImg,
        gallery: [pagiaMobileLibrary, pagiaMobileDetail, pagiaImg],
        liveLink: "https://www.pagia.io/",
        technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "MySQL",
            "Sequelize ORM",
            "Socket.IO",
            "JWT",
            "Passport.js",
            "Cloudinary",
            "Nodemailer",
            "Brevo",
            "node-cron",
            "Winston",
            "Multer",
            "Express Validator"
        ],
        role: "Backend Engineer",
        features: [
            "JWT authentication with refresh tokens, Google login, and Apple login",
            "Reader, author, bookstore, and admin role management",
            "Author book creation with chapters, genres, keywords, pricing, cover uploads, and encrypted written content",
            "Bookstore inventory, pricing, stock, metadata, and sales tracking",
            "Public book discovery APIs with UUID-based book identifiers",
            "Secure reader library, cart, checkout, order, and reading progress systems",
            "Admin-managed subscription plans with monthly and yearly billing support",
            "Payment initialization and verification through external provider integration",
            "Ads campaign system with wallet funding, targeting, status management, and analytics",
            "Monthly revenue settlement flow for authors and bookstores",
            "Real-time reader-author chat using Socket.IO",
            "Notification system with scheduled notifications, email templates, and retry-aware jobs",
            "Admin APIs for users, KYC, subscriptions, books, ads, reports, support, and payouts",
            "Cloudinary integration for cover images and book assets",
            "MySQL migrations for evolving schema safely"
        ],
        contributions: [
            "Built the entire backend system powering Pagia's publishing, commerce, ads, subscriptions, messaging, KYC, and revenue workflows",
            "Designed and improved backend APIs for readers, authors, bookstores, and admins",
            "Implemented UUID-based public book identity to prevent ID conflicts between author books and bookstore books",
            "Improved subscription lifecycle so admins can create and manage plans dynamically",
            "Refactored ads status and campaign flows",
            "Added automated revenue and payout settlement logic",
            "Built reader-author chat infrastructure with real-time socket support",
            "Improved book creation and editing flows for author and bookstore books",
            "Added encryption and decryption support for written book chapters",
            "Improved background job handling for external services like emails",
            "Fixed onboarding and KYC status sync issues",
            "Improved API response consistency for frontend performance and usability"
        ],
        highlight: "A scalable backend designed to handle complex publishing, commerce, monetization, and admin workflows cleanly."
    },
    {
        id: "rekrutklin-mobile-app",
        title: "Rekrutklin Mobile App",
        shortDescription: "Mobile clinical trial recruitment platform for participant pre-screening, eligibility criteria, appointments, pipelines, video sessions, and trial operations.",
        fullDescription: "I developed the Rekrutklin mobile application, a React Native and Expo-based platform built for clinical research teams and trial participants. The app supports participant pre-screening, consent flows, trial criteria management, recruitment pipelines, appointment coordination, user management, push notifications, deep linking, and video session workflows.\n\nThe project was designed for both operational staff and participants, with a focus on clean mobile UX, secure authentication, responsive layouts, and app store readiness for Android and iOS.",
        problem: "Clinical research teams need a secure mobile workspace for managing trial recruitment operations, participant screening, eligibility, appointments, pipelines, and video session workflows.",
        impact: "The app gives clinical research teams a centralized mobile workflow for recruitment operations, reducing manual coordination and making participant screening, trial tracking, and follow-up easier to manage from mobile devices.",
        image: rekrutklinFeatureImg,
        gallery: [
            rekrutklinFeatureImg,
            rekrutklinPrescreeningImg,
            rekrutklinDashboardImg,
            rekrutklinParticipantDetailsImg,
            rekrutklinVideoSessionImg
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.rekrutklin.mobile",
        technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "Expo Router",
            "NativeWind",
            "Zustand",
            "TanStack Query",
            "Axios",
            "Expo Secure Store",
            "Expo Notifications",
            "Expo Updates",
            "React Native Agora",
            "EAS Build",
            "Google Play Console",
            "App Store Connect"
        ],
        role: "Mobile App Developer / React Native Engineer",
        features: [
            "Clinical trial recruitment dashboard",
            "Participant pre-screening",
            "Trial criteria management",
            "Recruitment pipeline tracking",
            "Appointment and session management",
            "Staff and user management",
            "Deep link login access",
            "Push notification support",
            "Video session workflow",
            "Privacy policy, terms, and SMS consent pages",
            "Android, iOS, and tablet-ready app store assets"
        ],
        contributionsTitle: "My Responsibilities",
        contributions: [
            "Built the mobile app using React Native, Expo, Expo Router, and TypeScript",
            "Implemented staff login, secure session storage, authenticated API requests, and role-aware app navigation",
            "Developed participant pre-screening flows with Terms of Use, Privacy Policy, and SMS consent agreements",
            "Built trial management features including trial creation, eligibility criteria configuration, recruitment lists, and participant pipeline tracking",
            "Implemented appointment and session workflows with Agora-powered video session screens",
            "Added deep link support for login and public access flows",
            "Integrated Expo push notification setup and handled native configuration for Android and iOS builds",
            "Created legal document screens for Privacy Policy, Terms of Use, and SMS Consent",
            "Prepared Android and iOS production builds with EAS Build and configured Play Store/App Store assets, splash screens, icons, screenshots, and release metadata",
            "Improved mobile form usability, keyboard scrolling behavior, tablet screenshots, and app store submission readiness"
        ],
        highlight: "Built and prepared for release a React Native/Expo clinical trial recruitment app with pre-screening, staff authentication, trial management, recruitment pipelines, video sessions, push notifications, deep links, and Android/iOS store deployment support."
    },
    {
        id: "safenaija",
        title: "SafeNaija",
        shortDescription: "Emergency response and personal safety platform for fast alerts, location sharing, and trusted contact coordination.",
        fullDescription: "SafeNaija helps people quickly alert trusted contacts when they are in danger or need urgent assistance. I built the entire product myself, including the mobile app, backend system, and website. The platform supports emergency messaging, location context, and safety workflows for high-pressure situations where speed and clarity matter.",
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
        contributions: [
            "Built the entire SafeNaija mobile app, backend, and website alone",
            "Designed and implemented the emergency alert workflow from mobile experience to API delivery",
            "Built the backend services for contacts, alerts, location sharing, and user flows",
            "Created the public website and connected the product experience across web and mobile",
            "Handled the end-to-end product delivery from architecture to deployment"
        ],
        highlight: "A practical safety product designed to help people act quickly when every second matters."
    },
    {
        id: "imprexitrak",
        title: "ImprexiTrak",
        shortDescription: "Project tracking and workflow management platform for transparent execution, team coordination, and delivery visibility.",
        fullDescription: "ImprexiTrak helps teams track projects, tasks, documents, conversations, and delivery progress in one operational platform. I built the entire software myself, from the frontend experience to the backend workflows and deployment. It is designed for teams that need clearer visibility, better accountability, and smoother communication across project stages.",
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
        contributions: [
            "Built the entire software alone, covering frontend, backend, real-time communication, and deployment",
            "Designed the project tracking workflow, task system, notification flow, and document management experience",
            "Implemented backend APIs and real-time Socket.IO features for team communication",
            "Connected the product experience across dashboards, status updates, and operational project visibility"
        ],
        highlight: "A workflow platform built to keep teams, documents, and decisions moving together."
    },
    {
        id: "gfb-strategic-consulting-website",
        title: "GFB Strategic Consulting Limited Website",
        shortDescription: "A modern corporate consulting website built from scratch for GFB Strategic Consulting Limited, focused on premium branding, responsive pages, dynamic content, and contact experience.",
        fullDescription: "I built the official website for GFB Strategic Consulting Limited from scratch, creating a modern, premium, and professional corporate platform for a business transformation and strategic consulting firm serving corporate organizations, banks, fintechs, telecoms, energy companies, SMEs, NGOs, and West African institutions.\n\nThe goal was to create a stronger digital presence that clearly communicates the company's services, credibility, values, portfolio, and thought leadership across desktop, tablet, and mobile.",
        problem: "GFB Strategic Consulting Limited needed a polished corporate website that could communicate its consulting services, credibility, portfolio, thought leadership, and contact pathways to business leaders and institutional clients.",
        impact: "The final website presents GFB Strategic Consulting Limited as a credible, modern, and premium consulting brand. It improves user experience, communicates services more clearly, and provides a stronger digital presence for corporate clients and business leaders.",
        image: gfbHeroDesktopImg,
        gallery: [gfbHeroDesktopImg, gfbAboutDesktopImg, gfbMobileImg],
        liveLink: "https://gfbsconsulting.ng/",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Node.js API",
            "Google Maps Embed",
            "Responsive Web Design",
            "SEO Metadata"
        ],
        role: "Website Designer & Frontend Developer",
        features: [
            "Full-width modern hero section with strong brand messaging",
            "Responsive sticky navigation and mobile menu",
            "Premium service cards and portfolio cards",
            "Dynamic blog and portfolio content rendering",
            "Partner logo marquee section",
            "Contact form connected to an API endpoint",
            "Google Maps contact section",
            "SEO-friendly page structure",
            "Official LinkedIn and Instagram integration",
            "Fully responsive design across desktop, tablet, and mobile"
        ],
        contributionsTitle: "My Responsibilities",
        contributions: [
            "Built the website from scratch for GFB Strategic Consulting Limited",
            "Designed and developed the landing page and inner pages",
            "Improved visual hierarchy, spacing, typography, and responsiveness",
            "Applied the company's official brand colors: navy, blue, green, white, and black",
            "Created content sections across all key pages",
            "Built dynamic blog and portfolio detail pages",
            "Integrated official social media links",
            "Used African business-focused visuals to support the brand story",
            "Optimized mobile and desktop layouts",
            "Built a functional contact form connected to a backend API",
            "Created Home, About, Services, service detail, Portfolio, portfolio detail, Blog, blog detail, Contact, and Recruitment pages"
        ],
        highlight: "A from-scratch corporate website build for a premium consulting brand, combining strong business messaging, responsive design, dynamic content, and a functional contact experience."
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
        id: "cyberblock-website",
        title: "Cyberblock",
        shortDescription: "A modern cybersecurity website built for a client to present security solutions, trust-focused messaging, and clear contact pathways.",
        fullDescription: "I built the Cyberblock website for a cybersecurity client that provides security solutions and technology integrations. The website presents the brand with a clean, modern, and professional web experience across desktop and mobile.\n\nThe project focused on communicating trust, technical credibility, and solution clarity while giving prospective clients a simple path to explore the company, understand its cybersecurity offering, and make contact.",
        problem: "Cyberblock needed a professional website that could communicate its cybersecurity positioning clearly, support client trust, and make its solutions easier to discover.",
        impact: "The final website gives Cyberblock a stronger digital presence, a more polished brand presentation, and a responsive experience for organizations exploring cybersecurity support.",
        image: cyberblockDesktopImg,
        gallery: [cyberblockDesktopImg, cyberblockIphoneImg, cyberblockGalaxyImg],
        liveLink: "https://www.cyberblocksec.com/",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Web Design",
            "SEO Metadata",
            "Website Deployment"
        ],
        role: "Website Designer & Frontend Developer",
        features: [
            "Modern cybersecurity landing page",
            "Responsive desktop and mobile layouts",
            "Service and solutions presentation",
            "Company information pages",
            "Contact-focused user journey",
            "Strong brand visuals and security-focused messaging",
            "SEO-friendly page structure",
            "Cross-device presentation for client review and public use"
        ],
        contributionsTitle: "My Responsibilities",
        contributions: [
            "Built the Cyberblock website from scratch for a client",
            "Designed the page structure, visual hierarchy, spacing, and responsive layouts",
            "Created a professional cybersecurity brand presentation across home, solutions, company, and contact experiences",
            "Optimized the website for desktop and mobile viewing",
            "Implemented clear navigation and calls to action for prospective clients",
            "Prepared and deployed the public website on the client's domain"
        ],
        highlight: "A from-scratch client website for a cybersecurity brand, focused on credibility, responsive design, and clear solution communication."
    },
    {
        id: "modules-website",
        title: "Modules",
        shortDescription: "A responsive business device support website for onsite repair, maintenance, and technology support services across Nigeria.",
        fullDescription: "I built the Modules website for a business device support brand focused on helping organisations reduce technology downtime through onsite repair, maintenance, and support services.\n\nThe website positions Modules as a practical support partner for businesses and enterprises that rely on laptops, desktops, smartphones, and other work devices. It was designed to communicate fast response, technical confidence, service clarity, and easy access to support requests across desktop, tablet, and mobile.",
        problem: "Modules needed a professional digital presence that could explain its business device support offering, build confidence with organisations, and make onsite support requests easy to start.",
        impact: "The website gives Modules a polished public platform for communicating its services, reaching business customers, and converting support inquiries through clear calls to action.",
        image: modulesDesktopImg,
        gallery: [modulesDesktopImg, modulesTabletImg, modulesIphoneImg],
        liveLink: "https://modules.ng/",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Web Design",
            "SEO Metadata",
            "Website Deployment"
        ],
        role: "Website Designer & Frontend Developer",
        features: [
            "Full-width business device support hero section",
            "Responsive desktop, tablet, and mobile layouts",
            "Service-focused navigation and content structure",
            "Onsite support request calls to action",
            "Business audience messaging for SMEs, startups, schools, NGOs, healthcare, and corporate teams",
            "Trust-building presentation for repair, maintenance, and support services",
            "Mobile-friendly contact and WhatsApp access",
            "SEO-friendly page structure"
        ],
        contributionsTitle: "My Responsibilities",
        contributions: [
            "Built the Modules website from scratch",
            "Designed the visual layout, responsive structure, typography, and spacing",
            "Created a clear service presentation for business device repair and support",
            "Implemented desktop, tablet, and mobile experiences using the new brand visuals",
            "Added conversion-focused calls to action for onsite support requests",
            "Prepared and deployed the website on the public domain"
        ],
        highlight: "A from-scratch business support website built to help organisations request device repair and reduce technology downtime."
    },
    {
        id: "code-vortex-academy",
        title: "Code Vortex Academy",
        shortDescription: "A responsive coding academy website for kids, teens, and beginners learning tech skills through practical project-based classes.",
        fullDescription: "I built the Code Vortex Academy website for my coding academy, creating a polished digital presence for live coding classes, course discovery, enrollment, contact, and brand storytelling.\n\nThe website presents Code Vortex Academy as a practical coding school in Ibadan for kids, teens, and beginners who want to learn tech skills by building real projects. It was designed to communicate the academy's offer clearly across desktop, tablet, and mobile.",
        problem: "Code Vortex Academy needed a professional website that could explain its coding programs, build trust with parents and learners, and make course discovery and enrollment easy.",
        impact: "The website gives the academy a credible online presence, improves how courses and enrollment are presented, and makes it easier for prospective students and parents to understand the learning experience.",
        image: codeVortexDesktopImg,
        gallery: [codeVortexDesktopImg, codeVortexTabletImg, codeVortexMobileImg],
        liveLink: "https://codevortexacademy.com/",
        technologies: [
            "React",
            "JavaScript",
            "TailwindCSS",
            "Responsive Web Design",
            "SEO Metadata",
            "Website Deployment"
        ],
        role: "Founder & Website Developer",
        features: [
            "Modern academy landing page",
            "Responsive desktop, tablet, and mobile layouts",
            "Course discovery sections",
            "Enrollment-focused calls to action",
            "Kids, teens, and beginner-friendly messaging",
            "Contact and inquiry flows",
            "Branded visuals and academy identity",
            "SEO-friendly page structure"
        ],
        contributionsTitle: "My Responsibilities",
        contributions: [
            "Built the academy website from scratch",
            "Designed the user interface, responsive layout, and brand presentation",
            "Created the homepage sections for courses, enrollment, academy positioning, and contact",
            "Structured the website content to communicate the academy's value to parents, students, and beginners",
            "Optimized the experience for desktop, tablet, and mobile users",
            "Deployed the website and connected it to the academy's public domain"
        ],
        highlight: "A from-scratch coding academy website built to help learners discover practical tech classes and enroll with confidence."
    },
    {
        id: "siraj",
        title: "Siraj",
        shortDescription: "Ramadan reading, reflection, and journaling companion designed to support consistent Qur'an engagement.",
        fullDescription: "Siraj is a Ramadan companion app for structured Qur'an reading, daily reflection, and private spiritual journaling. I built the entire software myself, including the mobile experience, backend structure, and product workflow. It helps users keep a meaningful routine by breaking the month into guided daily sessions.",
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
        contributions: [
            "Built the entire software alone, from product flow to mobile interface and backend support",
            "Designed the daily Ramadan reading and reflection experience",
            "Implemented journaling, reading-session structure, and mobile-first user flows",
            "Handled the engineering decisions for the app architecture and delivery"
        ],
        highlight: "A focused companion for building a steadier Ramadan reading and reflection routine."
    }
];
