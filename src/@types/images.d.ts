declare module "*.png";
declare module "*.webp";
declare module "*.svg" {
  const content: any;
  export default content;
}
