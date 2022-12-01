import { observer } from "mobx-react";
import { Todo } from "../interfaces/todo";
import { rootStores } from "../stores/main";

const { todoStore } = rootStores;
function Home() {
  const list: Todo[] = todoStore.todos;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {list.map((todo: Todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
      <button onClick={() => todoStore.addPoint()}>Add points</button>
      <div>{todoStore.points}</div>
    </div>
  );
}

export default observer(Home);
