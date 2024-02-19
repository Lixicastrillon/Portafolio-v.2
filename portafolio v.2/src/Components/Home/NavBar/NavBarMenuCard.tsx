import "./NavBar.scss";

import { BarMenuCard } from "../../types/types";
import classNames from "../../util/classes";

interface NavBarMenuCardProps {
  card: BarMenuCard;
  isExpanded: Boolean;
}

const NavBarMenuCard = ({ card, isExpanded }: NavBarMenuCardProps) => {
  return (
    <div className="NavBarMenuCard">
      <img className="profile" src={card.photoUrl} width="15%" />
      <div className={classNames("profileInfo", isExpanded ? "" : "collapsed")}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        {card.infoprofile.map((arg) => (
          <div className="icon">
            <a href={arg.urls}>
              <arg.icons className="font-size:33px" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavBarMenuCard;
