export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const techStack = [
  {
    title: "Html",
    description:
      "Html is a markup language for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "Expert",
    image: "/icon/icons8-html5-512.png",
  },

  {
    title: "Css",
    description:
      "Css is a styling language for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "Expert",
    image: "icon/icons8-css-480.png",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript is a scripting language for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "Expert",
    image: "icon/icons8-javascript-480.png",
  },
  {
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "Expert",
    image: "icon/icons8-react-native-480.png",
  },
  {
    title: "React Native",
    description:
      "React Native is a  javReact Native is a popular framework for building mobile applications using JavaScript and React",
    skill: "Intermediate",
    image: "icon/icons8-react-native-480.png",
  },
  {
    title: "Next.js",
    description:
      "Next.js is a JavaScript library for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "Expert",
    image: "icon/icons8-nextjs-240.png",
  },
  {
    title: "Tailwind",
    description:
      "Tailwind is a CSS framework for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "Expert",
    image: "icon/icons8-tailwind-css-480.png",
  },
  {
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime for building server-side applications.",
    skill: "Intermediate",
    image: "icon/icons8-nodejs-480.png",
  },
  {
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "Expert",
    image: "icon/icons8-mongo-db-96.png",
  },

  {
    title: "MySQL",
    description: "MySQL is a relational database management system.",
    skill: "Intermediate",
    image: "icon/icons8-mysql-500.png",
  },
  {
    title: "PHP",
    description:
      "PHP is a server-side scripting language for building web applications.",
    skill: "Intermediate",
    image: "icon/icons8-php-512.png",
  },
  {
    title: "Laravel",
    description: "Laravel is a PHP framework for building web applications.",
    skill: "Intermediate",
    image: "icon/icons8-laravel-96.png",
  },
  {
    title: "Flutter",
    description:
      "Flutter is a UI software development kit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    skill: "Beginner",
    image: "icon/icons8-flutter-240.png",
  },
  {
    title: "Three.js",
    description: "Three.js is a JavaScript library for creating 3D graphics.",
    skill: "Beginner",
    image: "icon/three.png",
  },
  {
    title: "Redux",
    description: "Redux is a JavaScript library for state management.",
    skill: "Expert",
    image: "icon/icons8-redux-.png",
  },
  {
    title: "Git",
    description: "Git is a version control system.",
    skill: "Expert",
    image: "icon/icons8-git-500.png",
  },
  {
    title: "Prisma",
    description:
      "Prisma is an ORM (Object-Relational Mapping) tool for Node.js and TypeScript. It allows developers to interact with their database using a type-safe and auto-generated query builder.",
    skill: "Expert",
    image: "/icon/prisma.png",
  },
  {
    title: "langchain",
    skill: "Expert",
    image: "/icon/langchain.jpg",
  },
  {
    title: "langgraph",
    skill: "Expert",
    image: "/icon/langgraph.png",
  },
];

export const projects = [
  {
    title: "Genexa",
    description: `A web application that serves as a dashboard for NASA bioscience data, including
    publications. It features a backend API built with FastAPI and a frontend built with Next.js and
    React. The application is designed to be a one-stop solution for accessing and analyzing bioscience data.`,
    features: [
      "Backend API with FastAPI for high-performance data processing.",
      "Frontend with Next.js and React for a modern and responsive user interface.",
      "Database with PostgreSQL for reliable and scalable data storage.",
      "Database migrations with Alembic to manage database schema changes.",
      "AI-powered features with Langchain, Langgraph, and Faiss for advanced data analysis and insights.",
      "Responsive Layout that adapts to different screen sizes for a seamless user experience.",
    ],
    learnings: [
      "Advanced FastAPI techniques for building robust APIs.",
      "Implementing complex UI/UX with Next.js and React.",
      "Integrating AI models for data analysis using Langchain and Langgraph.",
      "Database management with PostgreSQL and Alembic.",
      "Understanding and implementing RAG for advanced search capabilities.",
    ],
    technology: [
      "Next.js",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Langchain",
      "Langgraph",
      "Faiss",
      "RAG",
      "SQLAlchemy",
      "Alembic",
    ],
    link: "https://genexa.syfuddhin.com/",
    github: "https://github.com/Soab42/space-app-dash",
  },
  {
    title: "NID Data Extractor",
    description:
      "An AI-powered data extractor tool built with Next.js and Gemini AI. It is designed to extract and save data from National ID cards, providing a fast and efficient way to manage user information.",
    features: [
      "Responsive Design for a seamless experience on all devices.",
      "Fast Performance for quick data extraction and processing.",
      "SEO Optimized to ensure high visibility on search engines.",
      "Clean and Modern UI for an intuitive and user-friendly experience.",
      "Secure data handling to protect user privacy.",
    ],
    learnings: [
      "Integrating Gemini AI for data extraction.",
      "Building a clean and modern UI with Next.js.",
      "Optimizing application performance for a better user experience.",
      "Implementing secure data handling practices.",
    ],
    technology: ["Next.js", "Gemini AI"],
    link: "https://nid-extractor.vercel.app",
    github: "https://github.com/Soab42/nid-extractor",
  },
  {
    title: "Utils.js",
    description:
      "A utility library for JavaScript that provides a collection of functions for common tasks. It is designed to be lightweight and easy to use, helping developers to write cleaner and more efficient code.",
    features: [
      "A wide range of utility functions for various tasks.",
      "Lightweight and easy to integrate into any project.",
      "Well-documented with clear examples.",
      "Open source and available on GitHub.",
    ],
    learnings: [
      "Creating a reusable utility library.",
      "Writing clean and well-documented code.",
      "Publishing and maintaining an open-source project.",
    ],
    technology: ["React", "MongoDB", "Gemini AI"],
    link: "https://utilsjs3.vercel.app/",
    github: "https://github.com/Soab42/utilsjs",
  },
  {
    title: "DevCafe",
    description:
      "A Next.js landing page for a company that showcases their services and company information. It is designed to be visually appealing and easy to navigate, providing a great first impression for potential clients.",
    features: [
      "Responsive Design for a seamless experience on all devices.",
      "Fast Performance for quick page loading.",
      "SEO Optimized to ensure high visibility on search engines.",
      "Clean and Modern UI for a professional look and feel.",
    ],
    learnings: [
      "Building a professional landing page with Next.js.",
      "Optimizing for SEO to improve search engine rankings.",
      "Creating a clean and modern UI with Tailwind CSS.",
    ],
    technology: ["React", "Tailwind", "firebase"],
    link: "https://devcafee.netlify.app/",
    github: "https://github.com/Soab42/devCafe",
  },
  {
    title: "Accounting System",
    description:
      "A full-featured accounting system with user authentication. It includes data storage and management using MongoDB, providing a secure and reliable solution for managing financial data.",
    features: [
      "User Authentication to ensure secure access to financial data.",
      "Financial Reports for detailed insights into financial performance.",
      "Responsive Dashboard for easy access to key financial metrics.",
      "Data Storage with MongoDB for reliable and scalable data management.",
    ],
    learnings: [
      "Implementing secure user authentication.",
      "Generating detailed financial reports.",
      "Building a responsive dashboard with Next.js.",
      "Managing data with MongoDB.",
    ],
    technology: ["Next.js", "MongoDB", "Auth.js"],
    link: "https://accountingsystem-xi.vercel.app/login?email=test@pmk-bd.org&password=test@123",
    github: "https://github.com/Soab42/dmtechnology",
  },
  {
    title: "Official Publication",
    description:
      "A platform for managing and publishing official notices and reports. It includes admin controls for managing content, ensuring that only authorized users can publish and update information.",
    features: [
      "Firebase Authentication for secure user access.",
      "Admin Control Panel for managing content and users.",
      "Publication Management for easy publishing and updating of notices.",
      "Responsive Layout for a seamless experience on all devices.",
    ],
    learnings: [
      "Implementing Firebase Authentication for secure user access.",
      "Building an admin control panel for content management.",
      "Developing a publication management system.",
      "Creating a responsive layout with Next.js.",
    ],
    technology: ["Next.js", "Firebase"],
    link: "https://pmkbd.netlify.app/",
    github: "https://github.com/Soab42/noticeBoard",
  },
  {
    title: "SAT Communication System",
    description:
      "A web application for managing SATCOM (Space and terrestrial communication network of Bangladesh) data. It features user authentication, data storage and management using MongoDB, and a responsive layout.",
    features: [
      "Next Auth for secure user authentication.",
      "Prisma for easy database access and management.",
      "Data Storage with MongoDB for reliable and scalable data storage.",
      "Responsive Layout for a seamless experience on all devices.",
    ],
    learnings: [
      "Implementing Next Auth for secure user authentication.",
      "Using Prisma for database access and management.",
      "Managing data with MongoDB.",
      "Building a responsive layout with Next.js.",
    ],
    technology: ["Next.js", "Prisma", "MongoDB"],
    link: "https://satcom.vercel.app/",
    github: "https://github.com/Soab42/satcom",
  },
  {
    title: "Loan Calculator",
    description:
      "A web application that helps users calculate loan payments. It features a passbook and a print-ready format, making it easy to track and manage loan payments.",
    features: [
      "Loan Payment Calculation for accurate loan payment estimates.",
      "Passbook Integration to track loan payments.",
      "Print-ready Format for easy printing of loan payment schedules.",
      "Redux State Management for a predictable and maintainable application state.",
    ],
    learnings: [
      "Implementing a loan payment calculation algorithm.",
      "Integrating a passbook feature to track payments.",
      "Creating a print-ready format for loan payment schedules.",
      "Managing application state with Redux.",
    ],
    technology: ["React", "Firebase", "Redux"],
    link: "https://loancalcall.web.app/",
    github: "https://github.com/Soab42/loancalcweb.git",
  },
  {
    title: "Digitech",
    description:
      "A company portfolio clone built with Next.js and Tailwind CSS. It is designed to showcase company information in a clean and modern UI, with a focus on responsive design and SEO optimization.",
    features: [
      "Responsive Design for a seamless experience on all devices.",
      "SEO Optimized to ensure high visibility on search engines.",
      "Clean and Modern UI for a professional look and feel.",
    ],
    learnings: [
      "Building a responsive website with Next.js and Tailwind CSS.",
      "Optimizing for SEO to improve search engine rankings.",
      "Creating a clean and modern UI.",
    ],
    technology: ["Next.js", "Tailwind CSS"],
    link: "https://digitech-sigma.vercel.app/",
    github: "https://github.com/Soab42/digitech",
  },
  {
    title: "Cash Counter",
    description:
      "An Android app for managing cash transactions. It provides features like a passbook and cash counting, making it easy to track and manage cash flow.",
    features: [
      "Cash Counting to quickly and accurately count cash.",
      "Passbook Feature to track cash transactions.",
      "Android App for easy access on the go.",
      "Flutter Development for a high-performance and visually appealing UI.",
    ],
    learnings: [
      "Developing a mobile app with Flutter.",
      "Implementing a cash counting feature.",
      "Creating a passbook feature to track transactions.",
      "Building a high-performance and visually appealing UI.",
    ],
    technology: ["Flutter"],
    imageLink: "/images/cashcounter-2.jpg",
    link: "https://drive.usercontent.google.com/download?id=10q79dGic2hnlZ9csZRvpKRg_NMQk6U2R&export=download&authuser=0&confirm=t&uuid=2a152144-dad4-47d4-bfea-1caf0bc98009&at=APZUnTXx2nVhWlgsUzZEYvwiGUk6%3A1707279716981",
    github: "https://github.com/Soab42/CashCounter-Flutter",
    isMobile: true,
    isFlutter: true,
  },
  {
    title: "Loan Calculator Android App",
    description:
      "A React Native Android app for calculating loan payments. It offers a clean UI with an integrated calculator, making it easy to estimate loan payments on the go.",
    features: [
      "Loan Payment Calculation for accurate loan payment estimates.",
      "React Native UI for a high-performance and visually appealing user interface.",
      "Responsive Design for a seamless experience on all devices.",
      "Mobile App Development for easy access on the go.",
    ],
    learnings: [
      "Developing a mobile app with React Native.",
      "Implementing a loan payment calculation algorithm.",
      "Building a high-performance and visually appealing UI.",
      "Creating a responsive design for a seamless experience on all devices.",
    ],
    technology: ["React Native"],
    imageLink: "/images/loancalc.jpg",
    link: "https://drive.usercontent.google.com/download?id=1S7Ao1TtXQ7gtvEOJwxfdGxGSAgdJEFwJ&export=download&authuser=0&confirm=t&uuid=6684c790-1354-41cd-84f4-648d26a67d06&at=APZUnTXsWG_Zz4xkSZbhltyJYEJ8%3A1707279769391",
    github: "https://github.com/Soab42/nativloancalc",
    isMobile: true,
    isFlutter: false,
  },
];

export const educations = [
  {
    title: "Bachelor Of Business Studies",
    name: "Honours",
    institution: "National University",
    duration: "2015 - 2017  (3 Years)",
    group: "Commerce",
    link: "/certificate/IMG_20220713_145127.jpg",
    certificate: "/certificate/IMG_20220713_145127.jpg",
  },
  {
    title: "Higher Secondary School Certificate",
    name: "HSC",
    institution: "Khoksa Janipur Pilot High School",
    duration: "2010 - 2012 (2 Years)",
    group: "Science",
    link: "/certificate/image2.png",
    certificate: "/certificate/image2.png",
  },
  {
    title: "Reactive Accelarator(React-Next)",
    name: "React-Next",
    institution: "Learn with Sumit (LWS)",
    duration: "2024 (4 Months)",
    group: "Information Technology",
    link: "https://learnwithsumit.com/certificates/verify/LWSCTXN-2TAK8DOG",
    certificate: "/certificate/Certificate-LWSCTXN-2TAK8DOG-rnext-batch-1.jpeg",
  },
  {
    title: "Think in a Redux way",
    name: "Redux",
    institution: "Learn with Sumit (LWS)",
    duration: "2023 (3 Months)",
    group: "Information Technology",
    link: "https://learnwithsumit.com/certificates/verify/LWSCTXN-7CX7WS0E",
    certificate: "/certificate/LWS-Certificate.jpg",
  },
];

export function getTech(name) {
  return techStack.find(
    (skill) => skill.title.toLowerCase() == name.toLowerCase()
  );
}
