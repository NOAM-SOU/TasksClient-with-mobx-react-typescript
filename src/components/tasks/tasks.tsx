import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Todo } from "../../interfaces/todo";
import { rootStores } from "../../stores/main";
import { BsTrash } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { SetStateProps } from "../../types/state.props";
import Task from "../task/task";
import "./tasks.css";

const { authStore, taskStore } = rootStores;
function Tasks() {
  const { userInfo } = authStore;
  const { getAllTasks, completeTask } = taskStore;
  const list: Todo[] = taskStore.tasksList;

  useEffect(() => {
    getAllTasks(userInfo.id);
  }, []);
  console.log("list", list);

  return (
    <div className="tasks-oficial">
      {list.map((task: Todo) => (
        <Task data={task} />
      ))}
    </div>
  );
}

export default observer(Tasks);
