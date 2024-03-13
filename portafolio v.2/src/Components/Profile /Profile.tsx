import "./Profile.scss";
import { ProfileCard } from "../types/types";
import mueble from "./mueble.png";
import one from "./1.png";
import two from "./2.png";

interface ProfileCardProps {
  education: ProfileCard[];
}

const Profile = ({ education }: ProfileCardProps) => {
  return (
    <div className="profile container full-size  d-flex flex-column align-items-center">
      <div className="contornoH1">
        <h1>Educación</h1>
      </div>
      <div className="d-flex justify-content-center w-100">
        {education.map((card) => (
          <div
            key={card.id}
            className="d-flex row justify-content-center profileCard p-4"
          >
            <span className="h2t"></span>
            <span className="iconP">{card.icon}</span>
            <h2 className="titleH2">{card.title}</h2>
            <div className="elementp">
              {/* <img src={card.certificate} /> */}
              <p>{card.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rueda h-100">
        <img src={mueble} />
      </div>
      <div className="rueda1 h-100">
        <img src={one} />
      </div>
      <div className="rueda2 h-100">
        <img src={two} />
      </div>
      {/* <div className="rueda3 h-100">
        <img src={three} />
      </div> */}
    </div>
  );
};

export default Profile;
