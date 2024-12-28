import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { AiFillApi, AiOutlineGoogle } from "react-icons/ai";
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
  SiTailwindcss,
  SiWebpack,
  SiJest,
  SiSonarqube,
  // SiNginx,
} from "react-icons/si";
import { TbCurlyLoop } from "react-icons/tb";
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
  LightAboutVacay,
  DarkAboutVacay,
  LightShortenJB,
  DarkShortenJB,
  ProfileSpotify,
  DarkChatBoxTsismis,
  LightChatBoxTsismis,
  DarkDashboardThesis,
  LightDashboardThesis,
  DarkLoaderJB,
  LightLoaderJB,
  Light404JB,
  Dark404JB,
  AlbumSpotify,
  ArtistSpotify,
  PlaylistSpotify,
  TrackSpotify,
  UserPlaylistSpotify,
  UserTopArtistSpotify,
  UserTopTracksSpotify,
  DarkGCTsismis,
  LightGCTsismis,
  DarkFindRoomVacay,
  LightFindRoomVacay,
  LightHostRoomVacay,
  DarkHostRoomVacay,
  DarkDashboardVacay,
  LightDashboardVacay,
  DarkListingInfoVacay,
  LightListingInfoVacay,
  DarkMainPageVacay,
  LightMainPageVacay,
  DarkProfileVacay,
  LightProfileVacay,
  DarkReservationVacay,
  LightReservationVacay,
  DarkReviewVacay,
  LightReviewVacay,
  ProjectSetup,
  Others,
} from "../assets/projects";

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
    url: "https://web.facebook.com/jb6000",
    Icon: FiFacebook,
  },
];

export const techs: ITechs[] = [
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
    id: "webpack",
    name: "Webpack",
    Icon: SiWebpack,
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
    id: "loopback",
    name: "Loopback.js",
    Icon: TbCurlyLoop,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    Icon: SiMongodb,
  },
  {
    id: "mysql",
    name: "MySQL",
    Icon: SiMysql,
  },
  {
    id: "sequelize",
    name: "Sequelize ORM",
    Icon: SiSequelize,
  },
  // {
  //   id: "nginx",
  //   name: "Nginx",
  //   Icon: SiNginx,
  // },
  {
    id: "jest",
    name: "Jest",
    Icon: SiJest,
  },
  {
    id: "sonarqube",
    name: "SonarQube",
    Icon: SiSonarqube,
  },
  {
    id: "restapi",
    name: "RESTful API",
    Icon: AiFillApi,
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
    info: "A web app for hosting rooms within CARAGA Region for free which comes with map pinning support, listing dashboard, reservations, Google and Github OAuth, and many more.",
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
        name: "GoogleOAuth",
        Icon: AiOutlineGoogle,
      },
      {
        name: "GithubOAuth",
        Icon: FiGithub,
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
    features: [
      {
        image: { light: LightAboutVacay, dark: DarkAboutVacay },
        detail:
          "An about us page with FAQ's and a contact section for recommendations and reporting of bugs.",
      },
      {
        image: { light: LightFindRoomVacay, dark: DarkFindRoomVacay },
        detail:
          "A page to all available listings with province filter, price sorting, and pagination.",
      },
      {
        image: { light: LightHostRoomVacay, dark: DarkHostRoomVacay },
        detail:
          "A page for creating listings and becoming a host for free with map pinning support and image upload.",
      },
      {
        image: { light: LightDashboardVacay, dark: DarkDashboardVacay },
        detail:
          "A dedicated page for every created listing to manage them individually like accepting or declining reservations and update guest status. A listing can be taken out of the all available rooms if they are set to offline and can be deleted.",
      },
      {
        image: { light: LightListingInfoVacay, dark: DarkListingInfoVacay },
        detail:
          "All information of a single listing is readily accessible and can be viewed by anyone as long as it is put online by the owner. A room availability checker is added to ensure that it can only be reserved if no one uses the room in the date range inputted by the user. All reviews can also be viewed at the bottom of it and the full information of the owner.",
      },
      {
        image: { light: LightMainPageVacay, dark: DarkMainPageVacay },
        detail:
          "The landing page of the web application which features two (2) sections. The first one contains the hero section and the second one shows a couple of available listings.",
      },
      {
        image: { light: LightProfileVacay, dark: DarkProfileVacay },
        detail:
          "A user's profile page can also be accessed which displays all their information and their created listings if they have one.",
      },
      {
        image: { light: LightReservationVacay, dark: DarkReservationVacay },
        detail:
          "A user can also view all of their created reservations that showcase minimal information to it.",
      },
      {
        image: { light: LightReviewVacay, dark: DarkReviewVacay },
        detail:
          "All information of a single reservation can be viewed by the user and its current status. This is also where listing reviews are given which is only available if the reservation is accepted by the listing owner.",
      },
    ],
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
    features: [
      {
        image: { light: LightShortenJB, dark: DarkShortenJB },
        detail:
          "Enter a long URL and a short URL will be given below it. It has a copy to clipboard function when the button is clicked, and the short URL can be customized based on the user's preferences. However, if a similar long URL is shortened, it will just recycle its first shortened URL.",
      },
      {
        image: { light: LightLoaderJB, dark: DarkLoaderJB },
        detail:
          "When a shortened URL is used, a loader page is first displayed before they are redirected to its long URL.",
      },
      {
        image: { light: Light404JB, dark: Dark404JB },
        detail:
          "When a non-existing or invalid short URL is used, a page 404 will be displayed.",
      },
    ],
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
    features: [
      {
        image: { light: ProfileSpotify, dark: ProfileSpotify },
        detail:
          "Lets the logged in user view their spotify's personal information such as followers count, profile image, top artists and tracks of the month, and playlists.",
      },
      {
        image: { light: UserPlaylistSpotify, dark: UserPlaylistSpotify },
        detail:
          "A dedicated page to see all available playlists of the current logged in user.",
      },
      {
        image: { light: UserTopArtistSpotify, dark: UserTopArtistSpotify },
        detail:
          "Display the top 20 artists of the current user in three (3) different time frames; month, six (6) months, and all time.",
      },
      {
        image: { light: UserTopTracksSpotify, dark: UserTopTracksSpotify },
        detail:
          "Display the top 20 tracks of the current user in three (3) different time frames; month, six (6) months, and all time.",
      },
      {
        image: { light: AlbumSpotify, dark: AlbumSpotify },
        detail:
          "Display all information of an artist's album or singles such as it's popularity, the number count and all songs in the album, and copyright.",
      },
      {
        image: { light: ArtistSpotify, dark: ArtistSpotify },
        detail:
          "Display all information of an artist such as their popularity, followers count, all their albums and singles and a section of all artists related to them.",
      },
      {
        image: { light: PlaylistSpotify, dark: PlaylistSpotify },
        detail: "Display all songs in a playlist and its folowers count.",
      },
      {
        image: { light: TrackSpotify, dark: TrackSpotify },
        detail:
          "Display all available information of a track such as the album it belongs to, when it was released, the track's title, artist, duration and a 30-sec preview of it. Additionally, other tracks details such as its acousticness, time signature, temp, etc. is shown.",
      },
    ],
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
    features: [
      {
        image: { light: LightChatBoxTsismis, dark: DarkChatBoxTsismis },
        detail:
          "The navigation bar contains three items, for switching themes, real-time notifications indicator, and a logout dropdown button. In the main section, the left container contains all available chats, a search field to find users, and a '+' indicator for the creation of a new group chat. The right container contains all information of the current selected chat such as its name, all members present, and a leave button. Lastly, the center container contains the chat box of the current chat.",
      },
      {
        image: { light: LightGCTsismis, dark: DarkGCTsismis },
        detail:
          "The group chat can be updated when the gear indicator is pressed in the group info container. Any participants can rename the group chat but the adding and removing of participants is limited to the admin. If an admin leaves, a new randomized individual is selected as the new admin. If all participants leave the group chat, it will automatically be deleted.",
      },
    ],
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
    features: [
      {
        image: { light: LightDashboardThesis, dark: DarkDashboardThesis },
        detail:
          "The dashboard of the web application which features a table for all user/students and a calendar that will display all of the days that the student is present after they scanned their RFID tags in the school successfully. A demo and journal format manuscript is available just below.",
      },
      {
        image: { light: ProjectSetup, dark: ProjectSetup },
        detail:
          "The setup of the entire project wherein the Raspberry Pi and other components is contained in an acrylic enclosure (left) and is operated using computer peripherals such as  monitor, mouse, keyboard (right).",
      },
    ],
  },
  {
    name: "Others",
    info: "A compilation of all my other projects I have done when I first started my coding journey, and as a Computer Engineering student.",
    ogImage: {
      dark: Others,
      light: Others,
    },
    redirect: "others",
    techs: [
      {
        name: "React.js",
        Icon: SiReact,
      },
      {
        name: "TailwindCSS",
        Icon: SiTailwindcss,
      },
      {
        name: "Typescript",
        Icon: SiTypescript,
      },
    ],
    urls: {
      github: "https://github.com/Bernz322/other-projects",
      demo: "https://jb-others.netlify.app/",
    },
    features: [
      {
        image: { light: Others, dark: Others },
        detail:
          "There is really nothing awesome on this website aside from the projects it features 😊.",
      },
    ],
  },
];
