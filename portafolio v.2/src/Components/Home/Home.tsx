import "./Home.scss";

const Home = () => {
  return (
    <div className="container full-size Home">
      <div className="section-home h-100">
        <div className="text-zone">
          <h1>Hola!</h1>
          <h1>Bienvenidos, soy Liced</h1>
          <h1>Web developer</h1>
          <p>Web Full stack Developer</p>
        </div>
        <a href="#" className="contact-button w-100">
          <div>
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">Contact me</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
