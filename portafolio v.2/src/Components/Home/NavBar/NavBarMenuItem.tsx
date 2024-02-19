import { BarMenuItems } from "../../types/types";
import classNames from "../../util/classes";

interface NavBarMenuItemProps {
  item: BarMenuItems;
  isExpanded: Boolean;
}

const NavBarMenuItem = ({ item, isExpanded }: NavBarMenuItemProps) => {
  return (
    <div className="NavBarMenuItem">
      <a className={item.url}>
        <div
          className={classNames("ItemContent", isExpanded ? "" : "collapsed")}
        >
          <div className="icon">
            <item.icon className="font-size:33px" />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </a>
      {!isExpanded ? <div className="tooltip">{item.label}</div> : null}
    </div>
  );
};
export default NavBarMenuItem;
