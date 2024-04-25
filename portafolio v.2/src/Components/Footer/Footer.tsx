import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container ">
      <div className="hr mt-4 mb-2 z-3" />
      <div className="d-flex flex-md-row flex-column mt-3 justify-content-between z-3">
        <div className="card text-center mb-3 border-0 baseColor z-3">
          <h5 className="card-title fw-semibold fs-2 mb-3 text-white">
            Ubicación
          </h5>
          <p className="text-white">Villavicencio - Colombia</p>
        </div>
        <div className="card text-center mb-3 border-0 baseColor z-3">
          <h5 className="card-title fw-semibold fs-2 mb-3 z-3 text-white">
            Horario
          </h5>
          <p className="card-text text-white">Lunes a Viernes</p>
          <p className="text-white">8 AM - 5 PM</p>
        </div>
        <div className="card text-center mb-3 border-0 baseColor z-3">
          <h5 className="card-title fw-semibold fs-2 mb-3 z-3 text-white">
            Contacto
          </h5>
          <p className="card-text text-white">licedwebdeveloper@gmail.com</p>
          <p className="text-white">+57 3133049793</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
