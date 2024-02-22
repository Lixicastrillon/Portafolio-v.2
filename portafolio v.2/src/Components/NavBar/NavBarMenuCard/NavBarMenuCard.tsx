import "./NavBarMenuCard.scss";

import { BarMenuCard } from "../../types/types";
import classNames from "../../util/classes";

interface NavBarMenuCardProps {
  card: BarMenuCard;
  isExpanded: Boolean;
}

const NavBarMenuCard = ({ card, isExpanded }: NavBarMenuCardProps) => {
  return (
    <div className="NavBarMenuCard">
      <div className="zoom">
        <img
          className="profile"
          alt={card.displayName}
          src={card.photoUrl}
          width="100%"
        />
      </div>
      <div className={classNames("profileInfo", isExpanded ? "" : "collapsed")}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        <div className="icons">
          {card.infoprofile.map((arg) => (
            <div className="icon">
              <a href={arg.urls}>
                <arg.icons className="iconT" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavBarMenuCard;
