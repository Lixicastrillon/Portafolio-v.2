import "./NavBarMenuItem.scss";

import { BarMenuItems } from "../../types/types";

interface NavBarMenuItemProps {
  item: BarMenuItems;
  isExpanded: Boolean;
  handleClick: any;
}

const NavBarMenuItem = ({
  item,
  isExpanded,
  handleClick,
}: NavBarMenuItemProps) => {
  return (
    <div className="NavBarMenuItem">
      <a href={item.url} onClick={handleClick}>
        <div className={`itemContent${isExpanded ? "" : "collapsed"}`}>
          <div className="icon">
            <item.icon className="iconT" />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </a>
      {!isExpanded ? <div className="tooltip">{item.label}</div> : null}
    </div>
  );
};
export default NavBarMenuItem;
