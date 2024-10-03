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
];

export function getTech(name) {
  return techStack.find(
    (skill) => skill.title.toLowerCase() == name.toLowerCase()
  );
}
export const projects = [
  {
    title: "Hotel loans",
    description:
      "Hotel Management System with Admin Panel. Payment Gateway. User Dashboard. User Management. And More.Hotel Management System with Admin Panel. Payment Gateway. User Dashboard. User Management. And More.Hotel Management System with Admin Panel. Payment Gateway. User Dashboard. User Management. And More.",
    features: [
      "Hotel Management System",
      "Admin Panel",
      "Payment Gateway",
      "User Dashboard",
      "User Management",
    ],
    technology: ["React", "Tailwind", "Three.js"],
    link: "https://hotelloans.vercel.app",
    github: "https://github.com/soab42/hotelloans",
    icon: "portfolio.png",
  },
  {
    title: "Portfolio",
    description: "Portfolio",
    features: ["Portfolio"],
    technology: ["React", "Tailwind", "Three.js"],
    link: "https://syfuddhin.netlify.app",
    github: "https://github.com/soab42/portfolio",
    icon: "portfolio.png",
  },
];
