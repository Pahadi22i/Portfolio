import { html, css, js, tailwind, react,todoist,picPortfolio,gaming,clone,cryptoCoin} from "../assets";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
  },
];

export const Skills = [
  {
    id: 1,
    icon: html,
    text: "HTML",
  },
  {
    id: 2,
    icon: css,
    text: "CSS",
  },
  {
    id: 3,
    icon: js,
    text: "JavaScript",
  },
  {
    id: 4,
    icon: tailwind,
    text: "Tailwind CSS",
  },
  {
    id: 5,
    icon: react,
    text: "React JS",
  },
];

export const Projects = [
  {
    id: 1,
    image: cryptoCoin,
    name: "HTML | CSS | React js |  API",
    work: "Crypto",
    github: "https://github.com/Pahadi22i/Crypto",
    live: "https://crypto-pahadi22i.vercel.app/",
  },
  {
    id: 2,
    image: gaming,
    name: "HTML | CSS | React js",
    work: "Gaming site",
    github: "https://github.com/Pahadi22i/Game",
    live: "https://game-pahadi22i.vercel.app/",
  },
  {
    id: 3,
    image: clone,
    name: "HTML | CSS | JavaScript",
    work: "Clone of Usabilityhub ",
    github: "https://github.com/Pahadi22i/clone",
    live: "https://pahadi22i.github.io/clone/",
  },
  {
    id: 4,
    image: picPortfolio,
    name: "HTML | CSS |",
    work: "Photo porfolio",
    github: "https://github.com/Pahadi22i/Photos",
    live: "https://pahadi22i.github.io/Photos/",
  },
  {
    id: 5,
    image: todoist,
    name: "React | CSS |",
    work: "Todo list",
    github: "https://github.com/Pahadi22i/Todo-list",
    live: "https://todo-list-pahadi22i.vercel.app/",
  },

];

export const FootersLink = [
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/devender-singh-3756aa203/",
  },
  {
    id: 3,
    icon: <FaGithub />,
    link: "https://github.com/Pahadi22i",
  },
  {
    id: 1,
    icon: <FaTwitter />,
    link: "https://twitter.com/Pahadi22i",
  },
];

