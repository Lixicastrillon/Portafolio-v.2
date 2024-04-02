import "./AboutMe.scss";
import { Skills } from "../types/types";

interface AboutProps {
  skill: Skills[];
}

const AboutMe = ({ skill }: AboutProps) => {
  return (
    <div className="about container full-size d-flex flex-column align-items-center">
      <div className="contornoH1">
        <h1>habilidades</h1>
      </div>
      <div className="about1 w-100 d-flex justify-content-between">
        <div className="w-45 mt-5">
          <p className="box-description">
            Aquí encontraras información sobre mis habilidades actuales en
            términos de programación, estoy comprometida con el aprendizaje
            continuo y el crecimiento en este campo dinámico. Poseo habilidades
            fundamentales que me permiten abordar desafíos con determinación y
            buscar oportunidades para mejorar constantemente mi conjunto de
            habilidades.
          </p>
        </div>
        <div className="w-50">
          <div className="d-flex  justify-content-center containerTecnology">
            {skill.map((icon) => (
              <div
                className="d-flex flex-column align-items-center justify-content-center cardTecnology"
                key={icon.id}
              >
                <div className="icon-tecn">
                  <icon.icon className="icons-tech" />
                </div>
                <div className="text-tecn">
                  <h5>{icon.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fondo h-100"></div>
    </div>
  );
};

export default AboutMe;
