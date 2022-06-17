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
  SiPostman,
} from "react-icons/si";
import { INavLinks, ISocialLinks, ITechs } from "./types";
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
    name: "HTML5",
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
    name: "Framer-Motion",
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
    id: "postman",
    name: "Postman",
    Icon: SiPostman,
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
