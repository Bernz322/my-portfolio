<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/Bernz322/my-portfolio/main/src/assets/logo/logo.png" width="100" />
</div>
<h1 align="center"><a href='https://v1.jeffreybernadas.com' target='_blank' rel='noreferrer'>https://v1.jeffreybernadas.com</a></h1>
<p align="center">
 My first ever website portfolio with design inspiration from <a href="https://v4.brittanychiang.com" target="_blank" rel='noreferrer'>https://v4.brittanychiang.com</a>. Hosted in my own old laptop transformed server powered by Cloudflare and Nginx. 
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/jeffreybernadas/deploys" target="_blank" rel='noreferrer'>
    <img src="https://api.netlify.com/api/v1/badges/dcdb76d7-daa4-4f56-b5f8-897f742a8923/deploy-status" alt="Netlify Status" />
  </a>
</p>

## ⚒️ Built with the following technologies:

<ul>
    <li>React.js</li>
    <li>Typescript</li>
    <li>Styled Components</li>
    <li>Framer</li>
    <li>ESLint + Airbnb</li>
    <li>Docker</li>
    <li>Cloudflare and Nginx (deployment)</li>
</ul>

## 🎨 Palette

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Prussian       | ![#003152](https://via.placeholder.com/10/003152?text=+) `#003152` |
| Slate          | ![#abb9c4](https://via.placeholder.com/10/abb9c4?text=+) `#abb9c4` |
| Light Slate    | ![#d2d7dc](https://via.placeholder.com/10/d2d7dc?text=+) `#d2d7dc` |
| Lightest Slate | ![#e3ebec](https://via.placeholder.com/10/e3ebec?text=+) `#e3ebec` |
| Electric       | ![#79f6fc](https://via.placeholder.com/10/79f6fc?text=+) `#79f6fc` |
| Air Force      | ![#588bae](https://via.placeholder.com/10/588bae?text=+) `#588bae` |
| Dark Navy      | ![#001429](https://via.placeholder.com/10/001429?text=+) `#001429` |

## 🖼️ Preview

<h3 align='center'>Main Page - Light Mode</h3>

![main-light](https://raw.githubusercontent.com/Bernz322/my-portfolio/main/src/assets/readme/light-main.png)

<h3 align='center'>Main Page - Dark Mode</h3>

![main-dark](https://raw.githubusercontent.com/Bernz322/my-portfolio/main/src/assets/readme/dark-main.png)

<h3 align='center'>Project's Page - Light Mode</h3>

![project-light](https://raw.githubusercontent.com/Bernz322/my-portfolio/main/src/assets/readme/light-project.png)

<h3 align='center'>Project's Page - Dark Mode</h3>

![project-dark](https://raw.githubusercontent.com/Bernz322/my-portfolio/main/src/assets/readme/dark-project.png)

## 💻 Installation & Setup

- Clone repository
   ```
   git clone https://github.com/Bernz322/my-portfolio.git
   ```
   ```
   cd my-portfolio
   ```

#### Development Stage
1. Build the image
   ```
   docker build -t <your-image-name> --target development .
   ```
2. Run the image
   ```
   docker run -d --name <your-container-name> -p 3000:3000 <your-image-name>
   ```

#### Production Stage

1. Build the image
   ```
   docker build -t <your-image-name> --target production .
   ```

2. Run the image
   ```
   docker run -d --name <your-container-name> -p 80:80 <your-image-name>
   ```
