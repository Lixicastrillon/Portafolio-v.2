import "./App.scss";
import { BsFillEnvelopeArrowDownFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { BiLogoJavascript } from "react-icons/bi";
import { ImHtmlFive2 } from "react-icons/im";
import { SiSequelize } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";

import {
  BarMenuCard,
  BarMenuItems,
  ProjCard,
  ProfileCard,
  Skills,
} from "./Components/types/types";

import foto from "./foto.jpg";
import craftBeer from "./Components/Projects/CB.png";
import axes from "./Components/Projects/images-axes/axes.jpg";
import logoA from "./Components/Projects/images-axes/logow.png";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Profile from "./Components/Profile /Profile";

function App() {
  const items: BarMenuItems[] = [
    {
      id: "1",
      label: "Perfil",
      icon: IoMdPerson,
      url: "profile",
    },
    {
      id: "2",
      label: "Habilidades",
      icon: FaCheckSquare,
      url: "skills",
    },
    {
      id: "3",
      label: "Trabajos",
      icon: IoIosPeople,
      url: "works",
    },
    {
      id: "4",
      label: "Contáctame",
      icon: BsFillEnvelopeArrowDownFill,
      url: "contactme",
    },
  ];
  const card: BarMenuCard = {
    id: "card01",
    displayName: "Liced Castrillon",
    title: "Web developer",
    photoUrl: foto,
    infoprofile: [
      {
        urls: "",
        icons: RiLinkedinFill,
      },
      {
        urls: "",
        icons: IoLogoGithub,
      },
    ],
  };

  const cardp: ProjCard[] = [
    {
      id: "01",
      image: axes,
      url: "https://www.axesdev.com/",
      logo: logoA,
      description:
        "Portafolio de servicios de soluciones de software a la medida.",
    },
    {
      id: "02",
      image: craftBeer,
      url: "https://craftbeershop.vercel.app/",
      logo: "CraftBeer",
      description:
        "Tienda online para compra y venta de cerveza artesanal, proyecto final grupal del bootcamp full stack web developer.",
    },
    {
      id: "03",
      image: "",
      url: "https://craftbeershop.vercel.app/",
      logo: "Dogs",
      description:
        "Información de razas de perros, proyecto individual del bootcamp full stack web developer.",
    },
  ];

  const education: ProfileCard[] = [
    {
      id: "01",
      title: "Full Stack Web Developer",
      duration:
        "Este programa abarcó un total de 800 horas de aprendizaje práctico y teórico. Mi fecha de graduación en agosto de 2023 marcó el comienzo de mi trayectoria como desarrolladora.",
      icon: "👩🏼‍💻",
    },
    {
      id: "02",
      title: "Ingeniería industrial",
      duration:
        "Mi pregrado abarcó 5 años de dedicación y aprendizaje continuo. Mi formación en esta disciplina me proporcionó multiples habilidades, obtenido en noviembre del 2022.",
      icon: "👷🏼‍♀️",
    },
  ];

  const skill: Skills[] = [
    {
      id: "01",
      name: "JavaScript",
      icon: BiLogoJavascript,
    },
    {
      id: "01",
      name: "React",
      icon: RiReactjsLine,
    },
    {
      id: "02",
      name: "Node",
      icon: TbBrandNodejs,
    },
    {
      id: "03",
      name: "Typescript",
      icon: BiLogoTypescript,
    },
    {
      id: "04",
      name: "Bootstrap",
      icon: BsBootstrap,
    },
    {
      id: "05",
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      id: "06",
      name: "Sequelize",
      icon: SiSequelize,
    },
    {
      id: "07",
      name: "Postman",
      icon: SiPostman,
    },
    {
      id: "08",
      name: "Express",
      icon: SiExpress,
    },
    {
      id: "03",
      name: "Redux",
      icon: SiRedux,
    },
    {
      id: "09",
      name: "HTML",
      icon: ImHtmlFive2,
    },
    {
      id: "10",
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      id: "11",
      name: "Sass",
      icon: FaSass,
    },
  ];
  return (
    <div className="App">
      <div className="NavB">
        <NavBar items={items} card={card} />
      </div>
      <div className="w-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/education"
            element={<Profile education={education} />}
          />
          <Route path="/skills" element={<AboutMe skill={skill} />} />
          <Route path="/works" element={<Projects cardp={cardp} />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
