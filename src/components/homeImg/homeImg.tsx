import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Todo } from "../../interfaces/todo";
import { rootStores } from "../../stores/main";
import Tasks from "../../components/tasks/tasks";
import Header from "../../components/header/header";
import { IoMdAddCircle } from "react-icons/io";
import "./homeImg.css";

const { authStore, taskStore } = rootStores;
function HomeImg() {
  const { userInfo, logout } = authStore;
  const { getAllTasks, completeTask } = taskStore;
  const list: Todo[] = taskStore.tasksList;

  useEffect(() => {
    getAllTasks(userInfo.id);
  }, []);
  console.log("list", list);

  return (
    <>
      <div className="home-img">
        {/* <Tasks /> */}

        <div className="home-start-div">
          <div className="home-start">add a task to get started</div>
        </div>
        <div className="home-add-div">
          <Link to="/new">
            <IoMdAddCircle id="home-add" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default observer(HomeImg);
