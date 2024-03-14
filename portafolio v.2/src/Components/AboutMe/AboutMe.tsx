import "./AboutMe.scss";
import { Skills } from "../types/types";

import fondo from "./fondo.jpg";

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
        <div className="w-45">
          <p>
            Aquí encontraras información sobre mis habilidades actuales en
            términos de programación, estoy comprometido con el aprendizaje
            continuo y el crecimiento en este campo dinámico. Poseo habilidades
            fundamentales que me permiten abordar desafíos con determinación y
            buscar oportunidades para mejorar constantemente mi conjunto de
            habilidades.
          </p>
        </div>
        <div className="w-45">
          <div className="box-tecn  d-flex flex-wrap">
            {skill.map((icon) => (
              <div className="skills d-flex" key={icon.id}>
                <div className="icon-tecn">
                  <icon.icon className="icons-tech" />
                </div>
                <div className="text-tecn">
                  <h3>{icon.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fondo h-100">
        <img src={fondo} className="image-fondo" />
      </div>
    </div>
  );
};

export default AboutMe;
