import { toJS } from "mobx";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { rootStores } from "../stores/main";

const { taskStore } = rootStores;

function TaskDetails() {
  const { getTask, taskInfo } = taskStore;

  const { id } = useParams();
  console.log(`id:${id}`);

  useEffect(() => {
    getTask(id);
  }, []);

  const info = toJS(taskInfo);

  return (
    <div className="App">
      <h1>Task Details</h1>
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
  );
}

export default observer(TaskDetails);
