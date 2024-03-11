import "./App.scss";
import { BsFillEnvelopeArrowDownFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import {
  BarMenuCard,
  BarMenuItems,
  ProjCard,
  ProfileCard,
} from "./Components/types/types";

import foto from "./foto.jpg";
import craftBeer from "./Components/Projects/CB.png";
import axes from "./Components/Projects/images-axes/axes.jpg";
import logoA from "./Components/Projects/images-axes/logow.png";
import NavBar from "./Components/NavBar/NavBar";
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
      url: "/",
    },
    {
      id: "2",
      label: "Habilidades",
      icon: FaCheckSquare,
      url: "/",
    },
    {
      id: "3",
      label: "Trabajos",
      icon: IoIosPeople,
      url: "/",
    },
    {
      id: "4",
      label: "Contáctame",
      icon: BsFillEnvelopeArrowDownFill,
      url: "/",
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
      certificate: "",
      duration: "",
      date: "2023",
    },
  ];
  return (
    <div className="App">
      <div className="NavB">
        <NavBar items={items} card={card} />
      </div>
      <div className="w-100">
        <Home />
        <Profile education={education} />
        <AboutMe />
        <Projects cardp={cardp} />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
