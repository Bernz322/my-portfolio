import { IconType } from "react-icons/lib";
export type NavLinksProps = {
  name: string;
  url: string;
};

export interface INavLinks {
  home: NavLinksProps[];
  pages?: NavLinksProps[];
}

export interface ISocialLinks {
  name: string;
  url: string;
  Icon: IconType;
}
export interface ITechs {
  id: string;
  name: string;
  Icon: IconType;
}

export interface IProjects {
  name: string;
  info: string;
  image: string;
  techs: {
    name: string;
    Icon: IconType;
  }[];
  urls: {
    github: string;
    demo: string;
  };
}
