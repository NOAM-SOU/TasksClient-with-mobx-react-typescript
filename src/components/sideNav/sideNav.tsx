import { GrFormAdd } from "react-icons/gr";
import { RiTaskLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { rootStores } from "../../stores/main";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import "./sideNav.css";

const { authStore } = rootStores;

function SideNav() {
  const { userInfo, logout } = authStore;
  return (
    <div className="sidenav-oficial">
      <div className="sidenav-icon-div">
        <RiTaskLine id="sidenav-icon" />
        <div className="sidenav-name">{userInfo.email}</div>
      </div>

      <div className="sidenav-favorites">
        My favorites
        <MdOutlineFavoriteBorder />
      </div>

      <div className="sidenav-add">
        Add task
        <GrFormAdd />
      </div>

      <div
        className="sidenav-logout"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <AiOutlineLogout />
      </div>

      <div
        className="sidenav-logout"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <AiOutlineLogout />
      </div>

      <div
        className="sidenav-logout"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <AiOutlineLogout />
      </div>

      <div
        className="sidenav-logout"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <AiOutlineLogout />
      </div>

      <div
        className="sidenav-logout"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <AiOutlineLogout />
      </div>

      <div
        className="sidenav-logout"
        onClick={() => {
          logout();
        }}
      >
        Logout
        <AiOutlineLogout />
      </div>
    </div>
  );
}

export default SideNav;
