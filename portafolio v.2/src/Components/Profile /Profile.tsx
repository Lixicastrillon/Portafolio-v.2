import "./Profile.scss";
import { ProfileCard } from "../types/types";

interface ProfileCardProps {
  education: ProfileCard[];
}

const Profile = ({ education }: ProfileCardProps) => {
  return (
    <div className="profile container full-size  d-flex flex-column align-items-center">
      <div className="contornoH1">
        <h1>Educación</h1>
      </div>
      <div className="items-profession items-profession1  d-flex justify-content-center">
        {education.map((card) => (
          <div key={card.id} className="profession d-flex row  w-75 z-3">
            <img src={card.image} className="image-software w-100 p-2" />
            <div className="profesion-description w-100 p-4 d-flex flex-column justify-content-center align-items-center ">
              <span className="iconP mt-3">{card.icon}</span>
              <h3 className="titleH2">{card.title}</h3>
              <div className="elementp p-4">
                <p>{card.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
