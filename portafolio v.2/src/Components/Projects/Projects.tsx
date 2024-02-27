import ProjectCard from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="container full-size">
      <div className="projects">
        <h1>Projectos</h1>
        <div>
          <p>
            he tenido la oportunidad invaluable de consolidar y ampliar mis
            conocimientos en desarrollo web trabajando en colaboración con
            equipos, me he dedicado a garantizar la funcionalidad y el
            rendimiento de las aplicaciones.
          </p>
        </div>
        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
