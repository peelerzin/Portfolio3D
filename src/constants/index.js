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
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  hoff,
  dci,
  peel,
  dev,
  proj,
  square,
  wavy,
  threejs,
  postgre,
  prisma,
  circle,
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
    title: "Visual Artist",
    icon: mobile,
  },
  {
    title: "Musician",
    icon: backend,
  },
  {
    title: "Chess Player",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "postgre",
    icon: postgre,
  },
  {
    name: "prisma",
    icon: prisma,
  },
];

const experiences = [
  {
    title: "Intensive Bootcamp",
    company_name: "Dev Haus Leipzig",
    icon: dev,
    iconBg: "#383E56",
    date: "Octobre 2022 - March 2023",
    points: [
      "Front/Back-end Lessons.",
      "UI / UX Design approachs.",
      "Projects works such as clone websites, minigames, mobile responsiveness.",
      "Midterm/end projects in team applying Agile/Scrum methods.",
    ],
  },
  {
    title: "Orientation Course",
    company_name: "Digital Career Institute Leipzig",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "March 2021 - April 2021",
    points: [
      "Learning basics of HTML/CSS/JS.",
      "Project to build a blog.",
      "Tailwind CSS workshop.",
    ],
  },
  {
    title: "Secretary Assitant",
    company_name: "Hoff GMBH Leipzig/Ostrau",
    icon: hoff,
    iconBg: "#383E56",
    date: "May 2020 - September 2022",
    points: [
      "Organizing Plannings and classifying files.",
      " Writing/Answering Email, Phone calls.",
      "Keeping the agenda up to date.",
    ],
  },
  {
    title: "Visual Artist/Musician",
    company_name: "Freelance",
    icon: peel,
    iconBg: "#E6DEDD",
    date: "January 2013 - Present",
    points: [
      "Video edits for brands, musicians, labels while living in Marseille.",
      "Live Performances and exhibitions in EU/USA.",
      " Digital/analogue videos and audio techniques learned in Finland.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great student able to search solutions and asking pertinent questions in class.",
    name: "Dan Mc Atee",
    designation: " Senior Developer/Instructor",
    company: "Dev Haus Leipzig",
    image:
      "https://media.licdn.com/dms/image/C5603AQHsEwq21x36Uw/profile-displayphoto-shrink_800_800/0/1517839355600?e=1689206400&v=beta&t=uCzQ-pAEp4eHwprhwkNafyMEzfyWQxc-z6p52_1qVzY",
  },
  {
    testimonial: "Hard worker with a positive attitude towards new challenges.",
    name: "Franz Wollang",
    designation: " Senior Developer/Instructor",
    company: "Dev Haus Leipzig",
    image:
      "https://media.licdn.com/dms/image/C4E03AQGCoKHwX2UKsw/profile-displayphoto-shrink_800_800/0/1593041919411?e=1689206400&v=beta&t=0AxusUBPL1TKI8kwcFNzJsZT1nBlghf0HSp42U9TXbs",
  },
  {
    testimonial:
      "Thierry was always available to help and take new issues during the final project. ",
    name: "Suzy Powers",
    designation: "Instructor/Project Manager",
    company: "Dev Haus Leipzig",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEMl01BNnWDIw/profile-displayphoto-shrink_800_800/0/1682342193897?e=1689206400&v=beta&t=0J-DtmVM1UhzWoiYFF7GSplsfbGx7BBZAO8fVYDL4u0",
  },
];
const projects = [
  {
    name: "Celldodger Game",
    description:
      "Retro minigame where the player has to collect coins and hearts while avoiding enemies. The game has settings that the player can also change.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: proj,
    source_code_link: "https://github.com/peelerzin/Cellsdodger",
  },
  {
    name: "Previous Portofolio",
    description:
      "This is my old portfolio fully designed by myself containing some others projects I've worked on. I made it as a side project while doing my bootcamp.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: wavy,
    source_code_link: "https://github.com/peelerzin/pageperso",
  },
  {
    name: "Cinema Booking",
    description:
      "Mobile first application of a ticket booking system for cinema developed in Front and Back/end. This was realised as the midterm project of my bootcamp.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
    ],
    image: square,
    source_code_link: "https://github.com/peelerzin/camp-8-midterm-group-1",
  },
  {
    name: "Dall-e Replica",
    description:
      "MERN project where the user can get a random image or generate text from the Dall-e API and share it with the community.",
    tags: [
      {
        name: "mongo-db",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
    ],
    image: circle,
    source_code_link: "https://github.com/peelerzin/dall-e",
  },
];

export { services, technologies, experiences, testimonials, projects };
