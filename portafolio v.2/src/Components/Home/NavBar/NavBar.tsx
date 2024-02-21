import "./NavBar.scss";

import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
import { BarMenuItems, BarMenuCard } from "../../types/types";

import classNames from "../../util/classes";
import NavBarMenuCard from "./NavBarMenuCard/NavBarMenuCard";
import NavBarMenuItem from "./NavBarMenuItem/NavBarMenuItem";

interface BarMenuProps {
  items: BarMenuItems[];
  card: BarMenuCard;
}
const NavBar = ({ items, card }: BarMenuProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={classNames("NavBar", isExpanded ? "expanded" : "collapsed")}
    >
      <div className="menuButton">
        <button className="hamburgerButton" onClick={handleClick}>
          <div
            onClick={handleClick}
            className={`icon nav-icon-1 ${isExpanded ? "expanded" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <NavBarMenuCard card={card} isExpanded={isExpanded} />
      {items.map((item) => (
        <NavBarMenuItem key={item.id} item={item} isExpanded={isExpanded} />
      ))}
    </div>
  );
};

export default NavBar;
