export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Power Root Group of Companies',
    pos: 'Mobile App & API Services Developer',
    duration: '2023 - Present',
    title: "Collaborated with team on a C# and Java mobile app to optimize warehouse and production management by automating data entry processes, job dispatch, and inventory tracking.",
    icon: '/assets/java.png',
  },
  {
    id: 2,
    name: 'EZPro',
    pos: 'ERP System Developer',
    duration: '2021 - 2023',
    title: "Deployed new features and spearheaded report customization for company's ERP system, effectively addressing client requirements and enhancing overall system functionality.",
    icon: '/assets/system.png',
  },
  {
    id: 3,
    name: 'OffGamers Companies',
    pos: 'AI Testing Model Developer (Intern)',
    duration: '2021 - 2021',
    title: "Developed and tested Robotic Process Automation (RPA) models using UI Vision to streamline and automate repetitive tasks, enhancing operational efficiency and accuracy.",
    icon: '/assets/ai.png',
  },
];

export const skills = [
  {
    name: "Java",
    img: "assets/java.png",
  },
  {
    name: "JavaScript",
    img: "assets/javas2.png",
  },
  {
    name: "React",
    img: "assets/react.png",
  },
  {
    name: "Python",
    img: "assets/python.png",
  },
  {
    name: "C#",
    img: "assets/csharp.png",
  },
  {
    name: "C++",
    img: "assets/cplus.png",
  },
  {
    name: "HTML",
    img: "assets/html.png",
  },
  {
    name: "CSS",
    img: "assets/css.png",
  },
];