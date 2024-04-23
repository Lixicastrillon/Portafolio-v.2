import { FormErrors } from "../types/types";
import "./ContactMe.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const defaultErrors: any = {
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

  const [errors, setErrors] = useState<FormErrors>({});

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
    handleClickActive();
  };

  const notify = () => {
    toast.success("mensaje enviado"); // mensaje de la notificación
  };

  const refForm = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const serviceId = "service_2icojnt";
    const templateId = "template_5y8b7wr";
    const publicKey = "gCJmhFtIN7GamawV0";

    if (formData.name && formData.email && formData.message) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
          },
          publicKey
        )
        .then((result) => {
          console.log("success!", result.status, result.text);
        })
        .catch((error) => console.error(error));
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  console.log(buttonActive);
  console.log(formData);
  console.log(errors);

  const handleClickActive = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      errors.name ||
      errors.email ||
      errors.message
    ) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
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
      <form
        noValidate
        ref={refForm}
        action=""
        onSubmit={(e) => sendEmail(e)}
        className="containerContactme w-75 z-3  p-4"
      >
        <div className="together-n-e  w-100">
          <div className="cont-name d-flex flex-column mb-5">
            <label id="nameId" className="la-c form-label">
              Nombre
            </label>
            <input
              maxLength={200}
              required
              id="nameId"
              className={
                errors.name
                  ? "form-control is-invalid"
                  : errors.name === null
                  ? "form-control is-valid"
                  : "form-control"
              }
              placeholder="Introduzca su nombre"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => validations(e.target.value, e.target.name)}
            ></input>
            {errors.name ? (
              <div className="invalid-tooltip mt-1">Nombre requerido</div>
            ) : null}
          </div>
          <div className="cont-email d-flex flex-column mb-5 pe-0">
            <label id="emailId" className="la-c form-label">
              Dirección de correo electrónico
            </label>
            <input
              maxLength={200}
              id="emailId"
              type="email"
              name="email"
              className={
                errors.email
                  ? "form-control is-invalid"
                  : errors.email === null
                  ? "form-control is-valid"
                  : "form-control"
              }
              value={formData.email}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => validations(e.target.value, e.target.name)}
              placeholder="Introduzca su dirección de correo electrónico"
              required
            ></input>
            {errors.email ? (
              <div className="invalid-tooltip mt-1">
                Correo electrónico inválido
              </div>
            ) : null}
          </div>
        </div>
        <div className="cont-message d-flex flex-column mb-5 w-100">
          <label id="messageId" className="la-c form-label">
            Mensaje
          </label>
          <textarea
            maxLength={500}
            id="messageId"
            cols={30}
            rows={4}
            className={
              errors.message
                ? "form-control is-invalid control-size"
                : errors.message === null
                ? "form-control is-valid control-size"
                : "form-control control-size"
            }
            name="message"
            value={formData.message}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => validations(e.target.value, e.target.name)}
            placeholder="Hola, creo que necesitamos una página web para nuestros productos en la Compañía X. ¿Qué tan pronto puedes entrar para discutir esto?"
            required
          ></textarea>
          {errors.message ? (
            <div className="invalid-tooltip mt-1">Mensaje requerido</div>
          ) : null}
        </div>
        <div className="button-Cont">
          <button
            type="submit"
            className={`button-me${buttonActive ? "-valided" : "-invalided"}`}
            onClick={notify}
            value="Send"
            disabled={!buttonActive}
          >
            <div className="icon-Button">
              <FaArrowRightLong />
            </div>
            <span className="text-send">Enviar</span>
          </button>
          <ToastContainer
            className="foo-bar"
            position="top-center"
            theme="dark"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
