import {
  SiBootstrap,
  SiCloudinary,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FiCode, FiDatabase, FiFileText, FiGrid, FiLock, FiServer } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";

// Skill/tech ke naam se uska icon. Naya skill add karein to yahan bhi jod dein.
const ICONS = {
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "JavaScript": SiJavascript,
  "React": SiReact,
  "React.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "Express.js": SiExpress,
  "REST APIs": FiServer,
  "C++": SiCplusplus,
  "MongoDB": SiMongodb,
  "SQL": FiDatabase,
  "JWT": SiJsonwebtokens,
  "Bcrypt": FiLock,
  "Git": SiGit,
  "GitHub": SiGithub,
  "VS Code": VscVscode,
  "Postman": SiPostman,
  "Cloudinary": SiCloudinary,
  "Excel": FiGrid,
  "MS Word": FiFileText,
};

export default function TechIcon({ name, className }) {
  const Icon = ICONS[name] || FiCode;
  return <Icon aria-hidden="true" className={className} />;
}
