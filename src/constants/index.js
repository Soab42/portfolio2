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
    skill: "100%",
    image: "/icon/icons8-html5-512.png",
  },

  {
    title: "Css",
    description:
      "Css is a styling language for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "100%",
    image: "icon/icons8-css-480.png",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript is a scripting language for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "100%",
    image: "icon/icons8-javascript-480.png",
  },
  {
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "100%",
    image: "icon/icons8-react-native-480.png",
  },
  {
    title: "React Native",
    description:
      "React Native is a  javReact Native is a popular framework for building mobile applications using JavaScript and React",
    skill: "100%",
    image: "icon/icons8-react-native-480.png",
  },
  {
    title: "Next.js",
    description:
      "Next.js is a JavaScript library for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "100%",
    image: "icon/icons8-nextjs-240.png",
  },
  {
    title: "Tailwind",
    description:
      "Tailwind is a CSS framework for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "100%",
    image: "icon/icons8-tailwind-css-480.png",
  },
  {
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime for building server-side applications.",
    skill: "100%",
    image: "icon/icons8-nodejs-480.png",
  },
  {
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL database for building user interfaces. It is maintained by Meta and a community of developers.",
    skill: "100%",
    image: "icon/icons8-mongo-db-96.png",
  },

  {
    title: "MySQL",
    description: "MySQL is a relational database management system.",
    skill: "100%",
    image: "icon/icons8-mysql-500.png",
  },
  {
    title: "PHP",
    description:
      "PHP is a server-side scripting language for building web applications.",
    skill: "100%",
    image: "icon/icons8-php-512.png",
  },
  {
    title: "Laravel",
    description: "Laravel is a PHP framework for building web applications.",
    skill: "100%",
    image: "icon/icons8-laravel-96.png",
  },
  {
    title: "Flutter",
    description:
      "Flutter is a UI software development kit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    skill: "100%",
    image: "icon/icons8-flutter-240.png",
  },
  {
    title: "Three.js",
    description: "Three.js is a JavaScript library for creating 3D graphics.",
    skill: "100%",
    image: "icon/three.png",
  },
  {
    title: "Auth.js",
    description: "Auth.js is a JavaScript library for authentication.",
    skill: "100%",
    image: "icon/auth.webp",
  },
  {
    title: "Redux",
    description: "Redux is a JavaScript library for state management.",
    skill: "100%",
    image: "icon/icons8-redux-.png",
  },
  {
    title: "Git",
    description: "Git is a version control system.",
    skill: "100%",
    image: "icon/icons8-git-500.png",
  },
  {
    title: "Firebase",
    description:
      "Firebase is a cloud platform for building mobile and web apps.",
    skill: "100%",
    image: "/icon/icons8-firebase.png",
  },
];

export function getTech(name) {
  return techStack.find(
    (skill) => skill.title.toLowerCase() == name.toLowerCase()
  );
}
export const projects = [
  {
    title: "Company Landing Page",
    description:
      "A Next.js landing page for a company. It includes various features for showcasing services and company information.",
    features: [
      "Responsive Design",
      "Fast Performance",
      "SEO Optimized",
      "Clean and Modern UI",
    ],
    technology: ["Next.js", "Tailwind"],
    link: "https://hotelloans.vercel.app/",
    github: "https://github.com/Soab42/hotelloans",
  },
  {
    title: "Accounting System",
    description:
      "A full-featured accounting system with user authentication. Includes data storage and management using MongoDB.",
    features: [
      "User Authentication",
      "Financial Reports",
      "Responsive Dashboard",
      "Data Storage with MongoDB",
    ],
    technology: ["Next.js", "MongoDB", "Auth.js"],
    link: "https://accountingsystem-xi.vercel.app/login?email=test@pmk-bd.org&password=test@123",
    github: "https://github.com/Soab42/dmtechnology",
  },
  {
    title: "Official Publication",
    description:
      "A platform for managing and publishing official notices and reports. Includes admin controls for managing content.",
    features: [
      "Firebase Authentication",
      "Admin Control",
      "Publication Management",
      "Responsive Layout",
    ],
    technology: ["Next.js", "Firebase"],
    link: "https://pmkbd.netlify.app/",
    github: "https://github.com/Soab42/noticeBoard",
  },
  {
    title: "Loan Calculator",
    description:
      "A web application that helps users calculate loan payments. Features include a passbook and a print-ready format.",
    features: [
      "Loan Payment Calculation",
      "Passbook Integration",
      "Print-ready Format",
      "Redux State Management",
    ],
    technology: ["React", "Firebase", "Redux"],
    link: "https://loancalcall.web.app/",
    github: "https://github.com/Soab42/loancalcweb.git",
  },
  {
    title: "Consumer Report",
    description:
      "A Laravel-based system for generating and managing consumer reports. It includes data entry and report generation features.",
    features: [
      "User Authentication",
      "Data Entry Forms",
      "Report Generation",
      "Responsive UI",
    ],
    technology: ["Laravel", "MySQL"],
    link: "https://consumer-laravel.000webhostapp.com",
    github: "https://github.com/Soab42/pmkconsumer",
  },
  {
    title: "Cash Counter",
    description:
      "An Android app for managing cash transactions. It provides features like passbook and cash counting.",
    features: [
      "Cash Counting",
      "Passbook Feature",
      "Android App",
      "Flutter Development",
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
      "A React Native Android app for calculating loan payments. Offers a clean UI with an integrated calculator.",
    features: [
      "Loan Payment Calculation",
      "React Native UI",
      "Responsive Design",
      "Mobile App Development",
    ],
    technology: ["React Native"],
    imageLink: "/images/loancalc.jpg",
    link: "https://drive.usercontent.google.com/download?id=1S7Ao1TtXQ7gtvEOJwxfdGxGSAgdJEFwJ&export=download&authuser=0&confirm=t&uuid=6684c790-1354-41cd-84f4-648d26a67d06&at=APZUnTXsWG_Zz4xkSZbhltyJYEJ8%3A1707279769391",
    github: "https://github.com/Soab42/nativloancalc",
    isMobile: true,
    isFlutter: false,
  },
];
