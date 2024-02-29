import "./ProjectCard.scss";

import { ProjCard } from "../../types/types";

interface ProjectCardProps {
  card: ProjCard;
}

const ProjectCard = ({ card }: ProjectCardProps) => {
  return (
    <div className="projectCard col-md-4 col-sm-6">
      <div className="image-container">
        <img className="imagesProject" src={card.image} />
        <img className="imageoverlay" src={card.logo} />
        <div className={"overlay " + "coloroverlay" + card.id}></div>
        <a href={card.url} target="_blank"></a>
      </div>
    </div>
  );
};
export default ProjectCard;
