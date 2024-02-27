import "./ProjectCard.scss";

import { ProjCard } from "../../types/types";

interface ProjectCardProps {
  card: ProjCard;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  return (
    <div className="ProjectCard d-flex col-md-6">
      <a href={card.url} target="_blank">
        <img className="imagesProject" src={card.image} />
      </a>
    </div>
  );
};
export default ProjectCard;
