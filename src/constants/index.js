import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
 
  docker,
 
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Cloud Monster",
    icon: "/src/assets/company/cloud.jpeg",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node js",
    company_name: "Cloud Monster",
    icon: "/src/assets/company/cloud.jpeg",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ITM_BC",
    icon: "/src/assets/company/itm.jpeg",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "ITM_Bc",
    icon: "/src/assets/company/itm.jpeg",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Naim proved me wrong.",
    name: "Chawkie",
    designation: "COO",
    company: "Cloud Monster",
    image: "https://media.licdn.com/dms/image/C4E03AQErY6vWacNKwQ/profile-displayphoto-shrink_200_200/0/1598462940369?e=1695254400&v=beta&t=4k3lY5TyWxVUvUkpnj3kWpwycTS20bJuUDMyEb2xim4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Naim does.",
    name: "Chawkie",
    designation: "COO",
    company: "Cloud monster",
    image: "https://media.licdn.com/dms/image/C4E03AQErY6vWacNKwQ/profile-displayphoto-shrink_200_200/0/1598462940369?e=1695254400&v=beta&t=4k3lY5TyWxVUvUkpnj3kWpwycTS20bJuUDMyEb2xim4",
  },
  {
    testimonial:
      "After Naim optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mounir",
    designation: "CTO",
    company: "ITM-Bc",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Social media app",
    description:
      "Social media app: A digital platform that enables users to create profiles, share content, connect with others, and engage in real-time communication, fostering social interactions and information exchange across various networks and communities..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/src/assets/c1.PNG",
    source_code_link: "https://github.com/NaimGI",
  },
  {
    name: "Event Management",
    description:
      " An efficient digital solution designed to streamline and organize university events, simplifying the planning, scheduling, registration, and coordination processes, ensuring seamless communication and successful execution of diverse campus activities and functions..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/src/assets/event.jpg",
    source_code_link: "https://github.com/NaimGI",
  },
  {
    name: "Dashboard",
    description:
      "Admin Dashboard for University Event Management: A centralized interface displaying upcoming and past events, registration data, and key metrics for efficient planning and execution..",
    tags: [
      {
        name: "node js",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "Matrail ui",
        color: "pink-text-gradient",
      },
    ],
    image: "/src/assets/Dashboard.png",
    source_code_link: "https://github.com/NaimGI",
  },
];

export { services, technologies, experiences, testimonials, projects };
