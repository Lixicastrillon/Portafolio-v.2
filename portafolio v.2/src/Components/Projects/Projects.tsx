import { ProjCard } from "../types/types";
import ProjectCard from "./projectCard/ProjectCard";
import "./Projects.scss";

interface projectProps {
  cardp: ProjCard[];
}

const Projects = ({ cardp }: projectProps) => {
  return (
    <div className="container full-size d-flex ">
      <div className="projects d-flex flex-column align-items-center justify-content-evenly z-3">
        <div className="contornoH1">
          <h1>Trabajos</h1>
        </div>
        <div className="work">Works</div>
        {/* no se traduce será parte del fondo*/}
        <p className="box-description-projets">
          He tenido el privilegio de formar parte de equipos que contribuyeron
          significativamente a mi desarrollo profesional en el ámbito del
          desarrollo web. Durante estas experiencias, mi enfoque estuvo
          orientado hacia la garantía de la funcionalidad y el rendimiento
          óptimo de las aplicaciones.
        </p>
        <div className="cardsProjects  row">
          {cardp.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
