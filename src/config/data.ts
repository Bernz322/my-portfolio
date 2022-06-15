import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { INavLinks, ISocialLinks } from "./types";
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
