import "./Profile.scss";
import fondo from "./fondo.webp";
import { ProfileCard } from "../types/types";

interface ProfileCardProps {
  education: ProfileCard[];
}

const Profile = ({ education }: ProfileCardProps) => {
  return (
    <div className="profile container full-size  d-flex flex-column align-items-center">
      <div className="contornoH1">
        <h1>Perfil</h1>
      </div>
      <div className="d-flex justify-content-center w-100">
        {education.map((card) => (
          <div
            key={card.id}
            className="d-flex row justify-content-center profileCard p-4"
          >
            <card.icon className="iconP" />
            <h2 className="titleH2">{card.title}</h2>
            {/* <img src={card.certificate} /> */}
            <h3>{card.duration}</h3>
            <h3>{card.date}</h3>
          </div>
        ))}
      </div>
      <img className="fondoCodigo" src={fondo} />
    </div>
  );
};

export default Profile;
