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
      <p>
        Aquí encontraras información sobre mis habilidades actuales en términos
        de programación, estoy comprometido con el aprendizaje continuo y el
        crecimiento en este campo dinámico. Poseo habilidades fundamentales que
        me permiten abordar desafíos con determinación y buscar oportunidades
        para mejorar constantemente mi conjunto de habilidades.
      </p>
      <div className="d-flex row">
        {skill.map((icon) => (
          <div className="skills" key={icon.id}>
            <h4>{icon.name}</h4>
            <img src={icon.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
