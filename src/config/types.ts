export type NavLinksProps = {
  name: string;
  url: string;
};

export interface INavLinks {
  home: NavLinksProps[];
  pages?: NavLinksProps[];
}
