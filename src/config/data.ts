import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { AiFillApi, AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoSass } from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSequelize,
  SiArduino,
  SiRaspberrypi,
  SiJava,
  SiGithub,
  SiGit,
  SiMaterialui,
  SiPython,
  SiJavascript,
  SiFramer,
  SiExpress,
  SiMapbox,
  SiSpotify,
  SiSocketdotio,
  SiOpencv,
  SiGooglecalendar,
  SiMega,
  SiJsonwebtokens,
} from "react-icons/si";
import { INavLinks, IProjects, ISocialLinks, ITechs } from "./types";
import {
  DarkOGVacay,
  LightOGVacay,
  DarkOGJB,
  LightOGJB,
  OGSpotify,
  DarkOGTsismis,
  LightOGTsismis,
  LightOGThesis,
  DarkOGThesis,
} from "../assets/projects";
// import mantine from "../assets/logo/mantine.svg";
export const navLinks: INavLinks = {
  home: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],
  project: [{ name: "Home", url: "/" }],
};

export const socialLinks: ISocialLinks[] = [
  {
    name: "Github",
    url: "https://github.com/Bernz322",
    Icon: FiGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/brnzzzzzzz/",
    Icon: FiInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/brnz6000",
    Icon: FiTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jeffreybernadas/",
    Icon: FiLinkedin,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/userJeb64839928383894949qwerty",
    Icon: FiFacebook,
  },
];

export const techs: ITechs[] = [
  {
    id: "html5",
    name: "HTML",
    Icon: AiOutlineHtml5,
  },
  {
    id: "sass",
    name: "Sass",
    Icon: IoLogoSass,
  },
  {
    id: "javascript",
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    id: "typescript",
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    id: "java",
    name: "Java",
    Icon: SiJava,
  },
  {
    id: "python",
    name: "Python",
    Icon: SiPython,
  },
  {
    id: "react",
    name: "React.js",
    Icon: SiReact,
  },
  {
    id: "redux",
    name: "Redux",
    Icon: SiRedux,
  },
  {
    id: "styled-components",
    name: "Styled-Components",
    Icon: SiStyledcomponents,
  },
  {
    id: "materialui",
    name: "Material UI",
    Icon: SiMaterialui,
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    Icon: SiFramer,
  },
  {
    id: "node",
    name: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    id: "express",
    name: "Express.js",
    Icon: SiExpress,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    Icon: SiMongodb,
  },
  {
    id: "sequelize",
    name: "Sequelize ORM",
    Icon: SiSequelize,
  },
  {
    id: "mysql",
    name: "MySQL",
    Icon: SiMysql,
  },
  {
    id: "restapi",
    name: "RESTful API",
    Icon: AiFillApi,
  },
  {
    id: "jsonwebtoken",
    name: "JWT",
    Icon: SiJsonwebtokens,
  },
  {
    id: "github",
    name: "Github",
    Icon: SiGithub,
  },
  {
    id: "git",
    name: "Git",
    Icon: SiGit,
  },
  {
    id: "arduino",
    name: "Arduino",
    Icon: SiArduino,
  },
  {
    id: "raspberrypi",
    name: "Raspberry Pi",
    Icon: SiRaspberrypi,
  },
];

export const projects: IProjects[] = [
  {
    name: "Vacay",
    info: "A web app for hosting rooms within CARAGA Region for free. Comes with map pinning support, listing dashboard, reservations, and many more.",
    ogImage: {
      dark: DarkOGVacay,
      light: LightOGVacay,
    },
    redirect: "vacay",
    techs: [
      {
        name: "React.js",
        Icon: SiReact,
      },
      {
        name: "Redux",
        Icon: SiRedux,
      },
      {
        name: "MantineUI",
        Icon: SiMega,
      },
      {
        name: "Mapbox",
        Icon: SiMapbox,
      },
      {
        name: "Node.js",
        Icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        Icon: SiExpress,
      },
      {
        name: "RESTful API",
        Icon: AiFillApi,
      },
      {
        name: "JWT",
        Icon: SiJsonwebtokens,
      },
      {
        name: "Sequelize ORM",
        Icon: SiSequelize,
      },
      {
        name: "MySQL",
        Icon: SiMysql,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/vacay-app",
      demo: "https://vacaycaraga.netlify.app/",
    },
  },
  {
    name: "JBShort",
    info: "A free URL shortener web app with customizable short URL.",
    ogImage: {
      dark: DarkOGJB,
      light: LightOGJB,
    },
    redirect: "jbshort",
    techs: [
      {
        name: "React.js",
        Icon: SiReact,
      },
      {
        name: "Framer Motion",
        Icon: SiFramer,
      },
      {
        name: "Styled-Components",
        Icon: SiStyledcomponents,
      },
      {
        name: "Node.js",
        Icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        Icon: SiExpress,
      },
      {
        name: "RESTful API",
        Icon: AiFillApi,
      },
      {
        name: "MongoDB",
        Icon: SiMongodb,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/jbshort",
      demo: "https://www.jbshort.xyz/",
    },
  },
  {
    name: "Spotify Viewer",
    info: "A web app for showing your personal Spotify data such as playlists, top artists, and top tracks. View an artists data together with their singles, albums, and artists related to them. See a detailed information of each tracks and a preview of it.",
    ogImage: {
      dark: OGSpotify,
      light: OGSpotify,
    },
    redirect: "spotify",
    techs: [
      {
        name: "React.js",
        Icon: SiReact,
      },
      {
        name: "Styled-Components",
        Icon: SiStyledcomponents,
      },
      {
        name: "Node.js",
        Icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        Icon: SiExpress,
      },
      {
        name: "Spotify API",
        Icon: SiSpotify,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/spotify-api-profile-app",
      demo: "https://spotify-api-profile-app.herokuapp.com/",
    },
  },
  {
    name: "Tsismis",
    info: "A real-time chat app with group chat functionalities, real-time notifications, and dark theme.",
    ogImage: {
      dark: DarkOGTsismis,
      light: LightOGTsismis,
    },
    redirect: "tsismis",
    techs: [
      {
        name: "React.js",
        Icon: SiReact,
      },
      {
        name: "Styled-Components",
        Icon: SiStyledcomponents,
      },
      {
        name: "Material UI",
        Icon: SiMaterialui,
      },
      {
        name: "Socket.IO",
        Icon: SiSocketdotio,
      },
      {
        name: "Node.js",
        Icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        Icon: SiExpress,
      },
      {
        name: "RESTful API",
        Icon: AiFillApi,
      },
      {
        name: "JWT",
        Icon: SiJsonwebtokens,
      },
      {
        name: "MongoDB",
        Icon: SiMongodb,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/tsismis",
      demo: "https://www.tsismis.xyz/",
    },
  },
  {
    name: "Thesis",
    info: "A web app for viewing a student's attendance record based on their RFID tags. The attendance recording is done through a Raspberry Pi 4B with an RC522 Reader and a HOG algorithm-based Face Recognition functionality for added security. This is my undergraduate Thesis entitled 'Automated Attendance System using RFID, Face Recognition and SMS Capability'. Full details available in the repository.",
    ogImage: {
      dark: DarkOGThesis,
      light: LightOGThesis,
    },
    redirect: "thesis",
    techs: [
      {
        name: "React.js",
        Icon: SiReact,
      },
      {
        name: "Redux",
        Icon: SiRedux,
      },
      {
        name: "MantineUI",
        Icon: SiMega,
      },
      {
        name: "Full Calendar",
        Icon: SiGooglecalendar,
      },
      {
        name: "Node.js",
        Icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        Icon: SiExpress,
      },
      {
        name: "RESTful API",
        Icon: AiFillApi,
      },
      {
        name: "JWT",
        Icon: SiJsonwebtokens,
      },
      {
        name: "Sequelize ORM",
        Icon: SiSequelize,
      },
      {
        name: "MySQL",
        Icon: SiMysql,
      },
      {
        name: "Raspberry Pi 4B",
        Icon: SiRaspberrypi,
      },
      {
        name: "Python",
        Icon: SiPython,
      },
      {
        name: "OpenCV",
        Icon: SiOpencv,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/snnhs-attendance-system",
      demo: "https://snnhs-attendance.netlify.app/",
    },
  },
];
