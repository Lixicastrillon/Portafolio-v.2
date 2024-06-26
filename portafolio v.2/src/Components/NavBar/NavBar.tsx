import "./NavBar.scss";

import { useState } from "react";
import { BarMenuItems, BarMenuCard } from "../types/types";

import classNames from "../util/classes";
import NavBarMenuCard from "./NavBarMenuCard/NavBarMenuCard";
import NavBarMenuItem from "./NavBarMenuItem/NavBarMenuItem";

interface BarMenuProps {
  items: BarMenuItems[];
  card: BarMenuCard;
}
const NavBar = ({ items, card }: BarMenuProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  const tooltips = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={classNames("NavBar", isExpanded ? "expanded" : "collapsed")}
    >
      <div className="menuButton">
        <div className="NavBar-menu-ms">
          <a href="#home" onClick={handleClick}>
            <p className="menu-ms">Desarrollador web</p>
          </a>
        </div>
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

      <div className=" navbar-2">
        <NavBarMenuCard card={card} isExpanded={isExpanded} />
        {items.map((item) => (
          <NavBarMenuItem
            key={item.id}
            item={item}
            isExpanded={isExpanded}
            handleClick={tooltips}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
