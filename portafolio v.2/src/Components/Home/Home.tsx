import "./Home.scss";

const Home = () => {
  return (
    <div className="full-size">
      <div className="container">
        <div id="section-home" className="section-home">
          <div className="text-zone">
            <h1>Hola!</h1>
            <br />
            <h1>Bienvenido a mi página web, soy Liced.</h1>
            <br />
            <h1>Web developer</h1>
            <p className="gray-text">Full stack Developer</p>
          </div>
          <a href="#" className="contact-button">
            <div>
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">Contact me</span>
            </div>
          </a>
          <div className="scroll-down">
            <span>scroll down</span>
            <i className="bi bi-arrow-down"></i>
          </div>
          <div className="scroll-down scroll-down-left">
            <span>scroll down</span>
            <i className="bi bi-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
