import { CgMenuLeftAlt } from "react-icons/cg";
import { useContext } from "react";
import "./header.css";
import { MyContext } from "../../context/mi.context";
import { toggleFunction } from "../../tools/toggle";

function Header() {
  const { setState, state } = useContext(MyContext);

  return (
    <div className="header-oficial">
      <div className="header-menu-div">
        <CgMenuLeftAlt
          id="header-menu"
          onClick={() => toggleFunction({ setState, state })}
        />
      </div>
      <div className="header-name-div">
        <div id="header-name">Task</div>
      </div>
    </div>
  );
}

export default Header;
