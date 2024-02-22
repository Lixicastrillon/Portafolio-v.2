import "./NavBarMenuItem.scss";

import classNames from "../../util/classes";

import { BarMenuItems } from "../../types/types";

interface NavBarMenuItemProps {
  item: BarMenuItems;
  isExpanded: Boolean;
}

const NavBarMenuItem = ({ item, isExpanded }: NavBarMenuItemProps) => {
  return (
    <div className="NavBarMenuItem">
      <a className={item.url}>
        <div
          className={classNames("itemContent", isExpanded ? "" : "collapsed")}
        >
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
