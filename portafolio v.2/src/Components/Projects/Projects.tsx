import { ProjCard } from "../types/types";
import ProjectCard from "./projectCard/ProjectCard";
import "./Projects.scss";

interface projectProps {
  cardp: ProjCard[];
}

const Projects = ({ cardp }: projectProps) => {
  return (
    <div className="container full-size d-flex">
      <div className="projects d-flex flex-column">
        <div>
          <h1>Mis Trabajos</h1>
          {/* no se traduce será parte del fondo*/}
          <div className="work">Work</div>
          <p>
            He tenido el privilegio de formar parte de equipos que contribuyeron
            significativamente a mi desarrollo profesional en el ámbito del
            desarrollo web. Durante estas experiencias, mi enfoque estuvo
            orientado hacia la garantía de la funcionalidad y el rendimiento
            óptimo de las aplicaciones.
          </p>
        </div>
        <div className="cardsProjects row">
          {cardp.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
