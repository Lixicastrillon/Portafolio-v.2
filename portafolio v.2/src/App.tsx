import "./App.scss";
import { FcAdvertising } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import foto from "./foto.jpg";
import NavBar from "./Components/Home/NavBar/NavBar";
import { BarMenuCard, BarMenuItems } from "./Components/types/types";

function App() {
  const items: BarMenuItems[] = [
    {
      id: "1",
      label: "hola",
      icon: FcAdvertising,
      url: "/",
    },
    {
      id: "2",
      label: "hola",
      icon: FcAdvertising,
      url: "/",
    },
  ];
  const card: BarMenuCard = {
    id: "card01",
    displayName: "liced Castrillon",
    title: "web developer",
    photoUrl: foto,
    infoprofile: [
      {
        urls: "",
        icons: FaLinkedin,
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
