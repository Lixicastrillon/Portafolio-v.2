import "./AboutMe.scss";
import { Skills } from "../types/types";

interface AboutProps {
  skill: Skills[];
}

const AboutMe = ({ skill }: AboutProps) => {
  return (
    <div className="about container full-size-about d-flex flex-column align-items-center">
      <div className="contornoH1-about m-4">
        <h1>Habilidades</h1>
      </div>
      <div className=" about1 w-100">
        <div className="w-45">
          <p className="box-description">
            Aquí encontraras información sobre mis habilidades actuales en
            términos de programación, estoy comprometida con el aprendizaje
            continuo y el crecimiento en este campo dinámico. Poseo habilidades
            fundamentales que me permiten abordar desafíos con determinación y
            buscar oportunidades para mejorar constantemente mi conjunto de
            habilidades.
          </p>
        </div>
        <div className="w-45 carrusel">
          <div className="d-flex  justify-content-center containerTecnology">
            {skill.map((icon) => (
              <div
                className={
                  "d-flex flex-column align-items-center justify-content-center cardTecnology style" +
                  icon.id
                }
                key={icon.name}
              >
                <div className="icon-tecn">
                  <icon.icon className="icons-tech" />
                </div>
                <div className="text-tecn">
                  <h4>{icon.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
