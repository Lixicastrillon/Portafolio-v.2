import "./ProjectCard.scss";
import { HiCursorArrowRays } from "react-icons/hi2";

import { ProjCard } from "../../types/types";

interface ProjectCardProps {
  card: ProjCard;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  return (
    <div className="projectCard col-md-4 col-sm-6">
      <div className="image-container d-flex">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
        <img className="imagesProject" src={card.image} />
        {card.id === "01" ? (
          <img className="imageoverlay" src={card.logo} />
        ) : (
          <span className="logoText">{card.logo}</span>
        )}
        <span className="description">{card.description}</span>
        <div className={"overlay " + "coloroverlay" + card.id}></div>
        <a href={card.url} target="_blank" className="buttonV">
          <button className="buttonVisita">
            <div className="iconButton">
              <HiCursorArrowRays />
            </div>
            <span className="textV">ver más</span>
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
