import "./App.scss";
import { BsFillEnvelopeArrowDownFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import foto from "./foto.jpg";
import NavBar from "./Components/Home/NavBar/NavBar";
import { BarMenuCard, BarMenuItems } from "./Components/types/types";

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
    <div className="navbar">
      <NavBar items={items} card={card} />
    </div>
  );
}

export default App;
