import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPython,
  SiRust,
  SiPostman,
} from "react-icons/si";
import { RiRemixRunFill } from "react-icons/ri";

const projexts = [
  {
    name: "Lynktree",
    tech: [<SiNextdotjs />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    desc: "A link management tool to organize and share multiple links through a single URL.",
    link: "https://lynktree.vercel.app",
    github: "https://github.com/Bluetooxth/Lynktree",
  },
  {
    name: "SyntaxBlog",
    tech: [<SiNextdotjs />, <SiTailwindcss />, <SiMongodb />],
    desc: "A full-stack blog application for developers to share their knowledge and experiences.",
    link: "https://syntaxblog.vercel.app",
    github: "https://github.com/Bluetooxth/SyntaxBlog",
  },
  {
    name: "Real Estate",
    tech: [<SiNextdotjs />, <SiTailwindcss />, <SiMongodb />],
    desc: "A real estate listing platform for listing and showcasing properties and scheduling visits.",
    link: "https://realxestate.vercel.app",
    github: "https://github.com/Bluetooxth/Real-Estate",
  },
  {
    name: "Dokxy",
    tech: [<SiNextdotjs />, <SiTailwindcss />, <SiMongodb />,<FaNodeJs />, <SiExpress />],
    desc: "A doctor-patient appointment system enabling easy scheduling, management, and communication.",
    link: "https://dokxyv1.vercel.app",
    github: "https://github.com/Bluetooxth/healthcare",
  },
  {
    name: "ReactJS Projects",
    tech: [<FaReact />],
    desc: "A collection showcasing diverse ReactJS projects to enhance learning and skill development.",
    github: "https://github.com/Bluetooxth/React-Projects",
  },
];

export default projexts;
