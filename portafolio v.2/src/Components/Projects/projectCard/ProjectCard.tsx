import "./ProjectCard.scss";

import { ProjCard } from "../../types/types";

interface ProjectCardProps {
  card: ProjCard;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  return (
    <div className="projectCard col-md-4 col-sm-6">
      <div className="image-container d-flex">
        <img className="imagesProject" src={card.image} />
        {card.id === "01" ? (
          <img className="imageoverlay" src={card.logo} />
        ) : (
          <span className="logoText">{card.logo}</span>
        )}
        <span className="description">{card.description}</span>
        <div className={"overlay " + "coloroverlay" + card.id}></div>
        <button className="buttonVisita">
          <a href={card.url} target="_blank">
            Visita el sitio web
          </a>
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;
