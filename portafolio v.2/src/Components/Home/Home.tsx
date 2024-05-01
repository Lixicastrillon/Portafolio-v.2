import "./Home.scss";

const Home = () => {
  return (
    <div className="container full-size-home Home">
      <div className="section-home h-100">
        <div className="text-zone">
          <span className="titleBue z-3">
            <h1>¡ Hola ! 👩🏼‍💻</h1>
            <br />
          </span>
          <h1>Bienvenidos, soy Liced</h1>
          <span className="titleBue z-3">
            <h1>Web developer</h1>
          </span>
          <p>Full Stack Web Developer</p>
          <a href="#contactme" className="contact-button w-100 z-3">
            <div className="button-cont">
              <span className="1"></span>
              <span className="2"></span>
              <span className="3"></span>
              <span className="4"></span>
              <span className="text">Contáctame</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
