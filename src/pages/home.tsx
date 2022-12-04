import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Todo } from "../interfaces/todo";
import { rootStores } from "../stores/main";

const { authStore, todoStore } = rootStores;
function Home() {
  const { userInfo } = authStore;
  const list: Todo[] = todoStore.todos;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>{`hello ${toJS(userInfo.name)}`}</div>
      <ul>
        {list.map((todo: Todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
      <button onClick={() => todoStore.addPoint()}>Add points</button>
      <div>{todoStore.points}</div>
      <Link to="/signup">signup</Link>
    </div>
  );
}

export default observer(Home);
