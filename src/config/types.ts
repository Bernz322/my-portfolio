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
