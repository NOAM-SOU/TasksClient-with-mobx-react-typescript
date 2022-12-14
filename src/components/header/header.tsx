import { CgMenuLeftAlt } from "react-icons/cg";
import "./header.css";

function Header() {
  return (
    <div className="header-oficial">
      <div className="header-menu-div">
        <CgMenuLeftAlt id="header-menu" />
      </div>
      <div className="header-name-div">
        <div id="header-name">Task</div>
      </div>
    </div>
  );
}

export default Header;
