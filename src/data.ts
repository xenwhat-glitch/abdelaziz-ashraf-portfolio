import { Skill, WorkExperience, Project, Certification, Education, HackathonAward } from "./types";

export const profileSummary = {
  name: "Abdelaziz Ashraf",
  title: "Android Developer & Software Engineer",
  tagline: "Building high-performance mobile ecosystems & exploring modern backend solutions.",
  bio: "Hi, I'm Abdelaziz Ashraf! My programming journey began in 2017 as a curious, self-driven learner. Today, I am a dedicated Android Developer with nearly two years of professional experience crafting dynamic, reliable, and user-centric Android applications in Kotlin and Java. \n\nAs a Computer Science graduate from Cairo University, my foundation is rooted in core software engineering, elegant architectural patterns, and algorithmic problem-solving. My professional projects encompass real-time telemetry, off-line synchronization systems, interactive multi-role platforms, and robust QR-code attendance engines. To provide complete engineering capabilities, I am currently expanding my ecosystem by mastering Spring Boot, Hibernate, and the Java enterprise stack.",
  email: "abdelaziz23702@gmail.com",
  phone: "+201124920370",
  linkedin: "https://www.linkedin.com/in/abdelaziz-ashraf-4825ba173/",
  location: "Cairo, Egypt",
  github: "https://github.com/Abdelziz237", // Placeholder/General GitHub for visual links
};

export const skillsList: Skill[] = [
  // Mobile Category
  {
    name: "Android Jetpack SDK",
    category: "mobile",
    level: 90,
    years: 3,
    featured: true,
    details: ["Lifecycle management", "ViewModel & StateFlows", "Core UI Toolkits", "WorkManager (Background tasks)"]
  },
  {
    name: "Jetpack Compose",
    category: "mobile",
    level: 90,
    years: 3,
    featured: true,
    details: ["Declarative UI layouts", "Custom modifiers", "Accompanist utilities", "Recomposition optimization"]
  },
  {
    name: "Kotlin Multiplatform (KMP)",
    category: "mobile",
    level: 60,
    years: 1,
    featured: true,
    details: ["Shared business logic layers", "Expect/Actual patterns", "Ktor Client", "SQLDelight database sharing"]
  },
  // Languages Category
  {
    name: "Kotlin",
    category: "language",
    level: 95,
    years: 3,
    featured: true,
    details: ["Coroutines & Flows", "Null-safety safety rules", "DSL creations", "Delegated properties", "Parcelable data classes"]
  },
  {
    name: "Java",
    category: "language",
    level: 90,
    years: 3,
    featured: true,
    details: ["OOP structures", "Concurrency elements", "Generics API", "Legacy codebase migrations"]
  },
  // Backend Category
  {
    name: "Spring Boot",
    category: "backend",
    level: 60,
    years: 1,
    featured: false,
    details: ["REST API controllers", "Spring Security setup", "Ioc & Dependency injection", "Microservice blueprints"]
  },
  {
    name: "Hibernate ORM",
    category: "backend",
    level: 60,
    years: 1,
    featured: false,
    details: ["Entity relationships", "JPQL/HQL queries", "Caching parameters", "Transaction managers"]
  },
  // Architecture Category
  {
    name: "MVVM / Clean Architecture",
    category: "architecture",
    level: 95,
    years: 3,
    featured: true,
    details: ["Separation of concerns", "Repository design patterns", "MVVM/MVI Hybrid Approach", "UseCases/Interactors separation", "Strict layer decoupled rules"]
  },
  {
    name: "Offline Storage (Room/SQLite)",
    category: "architecture",
    level: 88,
    years: 2,
    featured: false,
    details: ["Reactive queries using Flow", "Schema migrations", "DAO design patterns", "Performance optimizations", "Query indexing strategies"]
  },
  // Tools Category
  {
    name: "Git & CI/CD Pipelines",
    category: "tool",
    level: 70,
    years: 1,
    featured: false,
    details: ["Feature branching / Git Flow", "Conflict resolutions", "GitHub Actions workflows", "Gradle builds optimization"]
  },
  {
    name: "Retrofit & REST Integrations",
    category: "tool",
    level: 95,
    years: 3,
    featured: true,
    details: ["OkHttp interceptors", "Dynamic request caching", "JSON serialization converters", "Centralized error interceptors"]
  },
  {
    name: "QR & Attendance Hardware API",
    category: "tool",
    level: 85,
    years: 2,
    featured: false,
    details: ["ZXing QR scanning engine", "CameraX custom viewfinders", "Encryption on QR generation", "Real-time sync clocks"]
  }
];

export const workExperienceList: WorkExperience[] = [
  {
    id: "ischool",
    role: "Coding Instructor",
    company: "iSchool",
    location: "Cairo, Egypt",
    period: "Sep 2023 - Jul 2025",
    periodArabic: "سبتمبر ٢٠٢٣ - يوليو ٢٠٢٥",
    bulletPoints: [
      "Instruct and mentor the next generation of innovative technology builders in structured programming languages, core algorithmic thinking, and modern software design principles.",
      "Facilitate live coding workshops with an interactive curriculum spanning Kotlin, Java, and structural logic structures.",
      "Develop custom educational resources, assess software assignments, and deliver analytical performance reports to optimize student growth indexes.",
      "Cultivate high-level logical reasoning, system design thinking, and collaborative teamwork methodologies among student peer groups."
    ],
    technologies: ["Kotlin", "Java", "Object-Oriented Design", "Algorithmic Logic", "Interactive Teaching Methods"],
    achievements: [
      "Mentored and guided over 120+ students on software systems design, leading to multi-role creative computational projects.",
      "Re-architected coding assignment feedback rubrics to increase engagement metrics by 25%."
    ]
  },
  {
    id: "sanad",
    role: "Android Developer",
    company: "Sanad",
    location: "Cairo, Egypt",
    period: "Jan 2023 - Dec 2024",
    periodArabic: "يناير ٢٠٢٣ - ديسمبر ٢٠٢٤",
    bulletPoints: [
      "Led technical execution of three native Android applications representing the mobile footprint of Sanad—a large-scale multi-vendor interactive e-learning platform.",
      "Developed specific client apps targeted towards Parents, Students, and Admin/Attendance tracking personnel.",
      "Designed and deployed a highly reliable real-time push notification strategy, keeping parents actively aligned with student academic touchpoints.",
      "Engineered solid offline fallback architectures using local Room storage networks, enabling seamless app performance during low-connectivity phases.",
      "Built a secure, encrypted QR-based attendance generation and scanning workflow, improving morning check-in speeds and security telemetry.",
      "Integrated complex REST APIs, structured clean local model architectures, and tailored elegant responsive layouts."
    ],
    technologies: ["Kotlin", "Java", "Jetpack Compose", "Coroutines & Flow", "Retrofit", "Room DB", "Push Services", "ZXing Scanning Engine"],
    achievements: [
      "Delivered 3 interconnected mobile applications inside the ecosystem on time, supporting hundreds of daily active concurrent sync operations.",
      "Reduced localized app crashes to less than 0.2% by installing structured error boundary architectures and background synchronization retry queue mechanisms.",
      "Enhanced localized database data latency by 40% using highly optimized SQLite queries and reactive flows."
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "sanad-parents",
    title: "Sanad Parents Portal",
    role: "Lead Mobile Architect",
    client: "Sanad E-Learning Platform",
    description: "An elegant, real-time native Android application enabling parents to track academic trajectories, manage vendor payments, monitor live schedules, and receive critical push alerts directly from teachers.",
    detailedPoints: [
      "Designed user-centric MVVM layout to support multi-child academic analytics under one simplified visual account.",
      "Integrated FCM (Firebase Cloud Messaging) with custom priority-based channels to alert parents when their children complete assignments or register attendance violations.",
      "Formulated reliable custom charts displaying learning pacing over active quarters."
    ],
    impactMetrics: ["98% Parent Satisfaction Index based on active app store feedback", "Interactive payment tracking supporting multiple educational vendor products"],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM Pattern", "FCM Push Notifications", "Retrofit API Sync", "Coroutines"],
    category: "Android"
  },
  {
    id: "sanad-students",
    title: "Sanad Learning Hub",
    role: "Core Android Developer",
    client: "Sanad E-Learning Platform",
    description: "An interactive mobile classroom app enabling students of varying ages to access streaming video assignments, complete localized offline assessments, sync grades, and scan interactive learning materials.",
    detailedPoints: [
      "Engineered localized offline learning support—exams are downloaded automatically and results are queue-synchronized when stable internet triggers occur.",
      "Configured robust video streaming playback components featuring custom seek gestures and progress synchronization with the learning management core."
    ],
    impactMetrics: ["Enabled learning continuity for students during intermittent local provider outages", "Sync payload optimization reduced monthly mobile data costs for student users by 35%"],
    technologies: ["Kotlin", "Java", "Room Database", "Media3 ExoPlayer", "WorkManager Sync", "Material Design 3"],
    category: "Android"
  },
  {
    id: "sanad-attendance",
    title: "QR Attendance Terminal",
    role: "Lead Mobile Developer",
    client: "Sanad E-Learning Platform",
    description: "An ultra-responsive, lightweight companion application designed for administrative staff, utilizing encrypted QR scanning to log school-wide student arrival and departure data in real-time.",
    detailedPoints: [
      "Constructed custom camera viewfinders via Android CameraX, optimizing scanning speeds across budget devices to register scans in under 180 milliseconds.",
      "Engineered a local token-rotator security model to prevent QR hijacking or falsification of attendance records."
    ],
    impactMetrics: ["Scaled admin logging speed from analog rosters to automatic instant scans", "Process throughput successfully scanned 450+ arrivals in under 15 minutes of peak entry windows"],
    technologies: ["Kotlin", "CameraX Extension", "ZXing Decoding SDK", "Shared Flows", "Local Cryptography API"],
    category: "Android"
  },
  {
    id: "nasa-disaster-response",
    title: "SARA: Satellite Autonomous Response Assistant",
    role: "Lead Engineering Winner",
    client: "NASA Space Apps Hackathon",
    description: "A award-winning, offline-first communication and mapping application designed to support search & rescue operations following environmental catastrophes, utilizing lightweight data serialization and mesh concepts.",
    detailedPoints: [
      "Competed against 100+ multi-disciplinary elite developer teams to clinch the coveted First Category Award in the Space Apps Cairo node.",
      "Engineered highly compact byte-level payload serialization architectures, facilitating packet transfers over hyper-congested emergency frequency channels."
    ],
    impactMetrics: ["Honored with the 1st Category Award for outstanding social and technical utility", "Simulated packet handling maintained consistent status telemetry under mock grid failures"],
    technologies: ["Java/Kotlin", "Google Maps SDK", "Payload Packaging Protocol", "Network State Listeners", "SQLite Sync Database"],
    category: "Hackathon"
  },
  {
    id: "kmp-recipe-sharing",
    title: "Global Share Multiplatform Hub",
    role: "Solo Developer",
    description: "A modern Kotlin Multiplatform (KMP) experimental cookbook and product discovery platform utilizing a unified shared logic layer combined with native Jetpack Compose for Android and Swift UI for iOS.",
    detailedPoints: [
      "Demonstrates high competence in modern single-source code principles, building shared networking clients, database drivers, and local cache layers.",
      "Optimized build configurations to compile shared layers into frameworks, validating KMP's performance footprint against typical platform-agnostic frameworks."
    ],
    impactMetrics: ["90% reused single-source logic across target frameworks", "Strict repository and interface design ensuring native UI frameworks consume cleaner flows"],
    technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor HTTP Client", "SQLDelight Shared DB", "Coroutines Flow"],
    category: "KMP"
  },
  {
    id: "spring-store-backend",
    title: "Storefront Enterprise Core",
    role: "Full-Stack Trainee Developer",
    description: "An enterprise-grade, microservice-based backend RESTful system designed to support complex checkout, inventory tracking, role-based authorization, and high-performance querying.",
    detailedPoints: [
      "Authored clean Spring Controllers utilizing JPA and Hibernate to automate transactional consistency checks on parallel purchases.",
      "Built resilient JWT authentication gateways to secure client user data databases against malicious API attempts."
    ],
    impactMetrics: ["Constructed comprehensive test coverage checking database index response speeds", "Learned relational normalization practices and optimized lazy loading paths on deep entities"],
    technologies: ["Java SDK 17", "Spring Boot", "Spring Data Jpa", "PostgreSQL database", "Hibernate", "JWT Security"],
    category: "Backend"
  }
];

export const certificationsList: Certification[] = [
  {
    id: "meta-android",
    title: "Meta Android Developer Professional Certificate",
    issuer: "Coursera (Meta)",
    date: "Oct 2024",
    logo: "./assets/logos/Meta.png",
    topics: ["Native Android Architecture", "Data Storage & APIs", "React Native overview", "Mobile App Security", "Capstone Project delivery"]
  },
  {
    id: "google-kotlin-nano",
    title: "Advanced Android Kotlin Development by Google",
    issuer: "Udacity (Google)",
    date: "Nov 2022",
    logo: "./assets/logos/udacity.png",
    topics: ["Coroutines & Multi-threading", "WorkManager Background systems", "Advanced Canvas custom rendering", "Geo-fencing and maps", "Notification architectures"]
  },
  {
    id: "android-dev-track",
    title: "Android Development Track",
    issuer: "Udacity (Google)",
    date: "2022",
    logo: "./assets/logos/udacity.png",
    topics: ["Android SDK fundamentals", "OOP Best Practices", "REST endpoint mapping", "UI/UX component builds"]
  },
  {
    id: "localization-intl",
    title: "Android App Development: Localization & Internationalization",
    issuer: "Google",
    date: "2023",
    logo: "./assets/logos/Google.png",
    topics: ["RTL layout direction configurations", "Local resource specifiers", "Unicode and standard formatting", "Dynamic language selections"]
  },
  ,
  {
    id: "cloud-computing",
    title: "Introduction to Cloud Computing by IBM",
    issuer: "Coursera (IBM)",
    date: "2021",
    logo: "./assets/logos/IBM.png",
    topics: ["SaaS", "DevOps", "PaaS", "IaaS", "Cloud service models and use cases", "Cloud-Native Applications"]
  },
  {
    id: "google-android-certification",
    title: "Prepare for the Google Associate Android Developer Certification",
    issuer: "LinkedIn Learning (Google)",
    date: "2021",
    logo: "./assets/logos/Google.png",
    topics: ["Kotlin fundamentals", "Android app components", "Activity Lifecycle", "MVVM", "Navigation", "Room", "Unit Testing"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Professional Track",
    issuer: "Udacity/Chamber of Tech",
    date: "2021",
    logo: "./assets/logos/udacity.png",
    topics: ["SEO optimization metrics", "Content amplification models", "Google Ads targeting", "Visual branding principles"]
  }
];

export const educationHistory: Education[] = [
  {
    degree: "Bachelor's Degree",
    field: "Computer Science",
    institution: "Cairo University",
    period: "Sep 2020 - Jul 2024",
    highlights: [
      "Rigorous coursework in Data Structures, Advanced Algorithms, Database Management Systems, Software Engineering, and Operating Systems.",
      "Actively participated in student tech workshops and localized coding hackathons.",
      "Focused academic specialization in software architectures, mobile computing patterns, and state systems."
    ]
  }
];

export const honorsAndAwards: HackathonAward[] = [
  {
    event: "NASA Space Apps 2020 Hackathon (Cairo Node)",
    award: "1st Category Award Winner",
    year: "2020",
    description: "Recognized as the premier technical solution out of dozens of highly competitive team submissions for outstanding implementation of an autonomous rescue system during environmental communication outages.",
    projectBuilt: "SARA: Satellite Autonomous Response Assistant (Android Communication and Offline Spatial Navigator)"
  }
];
