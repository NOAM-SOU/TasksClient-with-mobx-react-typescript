import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Todo } from "../interfaces/todo";
import { rootStores } from "../stores/main";
import { BsTrash } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";

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
    <div className="App">
      <h1>Todo List</h1>
      <div>{`hello ${userInfo.name}`}</div>
      <ul>
        {list.length === 0
          ? "No tasks"
          : list.map((task: Todo) => (
              <div key={task._id}>
                <Link to={`/details/${task._id}`}>{task.title}</Link>
                <BsTrash
                  onClick={() => {
                    taskStore.deleteTask(userInfo.id, task._id);
                  }}
                />
                <Link to={`/edit/${task._id}`} state={{ t: task }}>
                  <GrEdit />
                </Link>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    taskStore.completeTask(task._id);
                  }}
                />
              </div>
            ))}
      </ul>
      <Link to="/new">create task</Link>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}

export default observer(Home);
