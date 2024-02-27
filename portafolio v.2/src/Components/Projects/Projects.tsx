import { ProjCard } from "../types/types";
import ProjectCard from "./projectCard/ProjectCard";
import "./Projects.scss";

interface projectProps {
  cardp: ProjCard[];
}

const Projects = ({ cardp }: projectProps) => {
  return (
    <div className="container full-size">
      <div className="projects">
        <h1>Projectos</h1>
        {/* no se traduce será parte del fondo*/}
        <div className="work">Work</div>
        <div>
          <p>
            He tenido la oportunidad invaluable de consolidar y ampliar mis
            conocimientos en desarrollo web trabajando en colaboración con
            equipos, me he dedicado a garantizar la funcionalidad y el
            rendimiento de las aplicaciones.
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
