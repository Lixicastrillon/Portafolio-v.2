import "./ContactMe.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const defaultErrors = {
  name: "Nombre requerido",
  email: "Correo electrónico inválido",
  message: "Mensaje requerido",
  validateEmail:
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
};

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  // Validate Email
  const validations = (value: string, name: string) => {
    if (name === "email") {
      setErrors({
        ...errors,
        [name]: !defaultErrors.validateEmail.test(value)
          ? defaultErrors[name]
          : null,
      });
    } else {
      setErrors({
        ...errors,
        [name]: !value ? defaultErrors[name] : null,
      });
    }
  };

  const notify = () => {
    toast("mensaje enviado"); // mensaje de la notificación
  };
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
              value={formData.name}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => validations(e.target.value, e.target.name)}
              required
            ></input>
          </div>
          <div className="cont-email d-flex flex-column w-50">
            <label className="la-c">Dirección de correo electrónico</label>
            <input
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => validations(e.target.value, e.target.name)}
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
            name="message"
            value={formData.message}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => validations(e.target.value, e.target.name)}
            className="ic"
            placeholder="Hola, creo que necesitamos una página web para nuestros productos en la Compañía X. ¿Qué tan pronto puedes entrar para discutir esto?"
            required
          ></textarea>
        </div>
        <div className="button-Cont">
          <button className="button-me" onClick={notify}>
            <div className="icon-Button">
              <FaArrowRightLong />
            </div>
            <span className="text-send">Enviar</span>
          </button>
          <ToastContainer
            className="foo-bar"
            position="top-center"
            theme="dark"
            // autoClose={3000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
          />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
