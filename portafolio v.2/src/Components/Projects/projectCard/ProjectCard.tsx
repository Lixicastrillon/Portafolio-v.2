import "./ProjectCard.scss";

import { ProjCard } from "../../types/types";

interface ProjectCardProps {
  card: ProjCard;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  return (
    <div className="ProjectCard d-flex col-md-4 col-sm-6 justify-content-around">
      <div className="image-container">
        <img className="imagesProject" src={card.image} />
        <div className="overlay">
          <img src={card.logo} />
        </div>
      </div>
      <a href={card.url} target="_blank"></a>
    </div>
  );
};
export default ProjectCard;
