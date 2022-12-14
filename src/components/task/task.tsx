import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Todo } from "../../interfaces/todo";
import { rootStores } from "../../stores/main";
import { BsTrash } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { SetStateProps } from "../../types/state.props";

import { TaskData } from "../../types/task.data";
import "./task.css";

const { authStore, taskStore } = rootStores;

function Task(props: TaskData) {
  const { completeTask } = taskStore;
  const { userInfo } = authStore;

  const { data } = props;
  return (
    <Link to={`/details/${data._id}`}>
      <div className="task-oficial" key={data._id}>
        <div className="task-title">{data.title}</div>

        {/* <Link to={`/details/${data._id}`}>{data.title}</Link>
        <BsTrash
          onClick={() => {
            taskStore.deleteTask(userInfo.id, data._id);
          }}
        />
        <Link to={`/edit/${data._id}`}>
          <GrEdit />
        </Link>
        <input
          type="checkbox"
          checked={data.completed}
          onChange={() => {
            completeTask(data._id);
          }}
        /> */}
      </div>
    </Link>
  );
}

export default observer(Task);
