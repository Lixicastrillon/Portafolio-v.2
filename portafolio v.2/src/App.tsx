import "./App.scss";
import { BsFillEnvelopeArrowDownFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { BarMenuCard, BarMenuItems } from "./Components/types/types";

import foto from "./foto.jpg";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";

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
      label: "Proyectos",
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
  return (
    <div className="App">
      <div>
        <NavBar items={items} card={card} />
      </div>
      <div className="w-100">
        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
