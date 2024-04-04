import "./ContactMe.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div className="contacMe container full-size d-flex flex-column align-items-center justify-content-start ">
      <div className="cont-H1 z-3">
        <h1>Envíame un mensaje</h1>
      </div>
      <div className="mb-5 text-p p-2 z-3">
        <p>
          ¿Tienes alguna pregunta, propuesta, o simplemente quieres saludar?
        </p>
        <p>Te responderé lo antes posible.</p>
      </div>
      <form className="containerContactme w-75 z-3  p-4">
        <div className="together-n-e d-flex  row w-100">
          <div className="cont-name d-flex flex-column mb-5 w-50">
            <label className="la-c">Nombre</label>
            <input
              className="ic"
              placeholder="Introduzca su nombre"
              type="text"
              name="name"
              required
            ></input>
          </div>
          <div className="cont-email d-flex flex-column w-50">
            <label className="la-c">Dirección de correo electrónico</label>
            <input
              className="ic"
              placeholder="introduce tu dirección de correo electrónico"
              type="text"
              required
            ></input>
          </div>
        </div>
        <div className="cont-message d-flex flex-column w-100">
          <label className="la-c">Mensaje</label>
          <textarea
            className="ic"
            placeholder="Hola, creo que necesitamos una página web para nuestros productos en la Compañía X. ¿Qué tan pronto puedes entrar para discutir esto?"
            required
          ></textarea>
        </div>
        <div className="button-Cont">
          <button className="button-me">
            <div className="icon-Button">
              <FaArrowRightLong />
            </div>
            <span className="text-send">Enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
