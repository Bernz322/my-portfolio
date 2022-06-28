declare module "*.png";
declare module "*.jpg";
declare module "*.webp";
declare module "*.pdf";
declare module "*.svg" {
  const content: any;
  export default content;
}
