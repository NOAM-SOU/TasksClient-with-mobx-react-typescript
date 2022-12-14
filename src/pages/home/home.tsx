import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Todo } from "../../interfaces/todo";
import { rootStores } from "../../stores/main";
import Tasks from "../../components/tasks/tasks";
import Header from "../../components/header/header";
import "./home.css";
import HomeImg from "../../components/homeImg/homeImg";
import { Link } from "react-router-dom";

const { authStore, taskStore } = rootStores;
function Home() {
  const { userInfo, logout } = authStore;
  const { getAllTasks, completeTask } = taskStore;
  const list: Todo[] = taskStore.tasksList;

  useEffect(() => {
    getAllTasks(userInfo.id);
  }, []);
  console.log("list", list);

  return (
    <div className="home-oficial">
      <Header />
      {list.length > 0 ? <Tasks /> : <HomeImg />}
      <button onClick={() => logout()}>logout</button>
      <Link to="/new">add</Link>
    </div>
  );
}

export default observer(Home);
