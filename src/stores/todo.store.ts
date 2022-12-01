import { observable, computed, makeObservable, action } from "mobx";
import { Todo } from "../interfaces/todo";

export class TodoStore {
  session = {
    todos: [
      {
        title: "Todo 1",
        content: "Todo 1 content",
        completed: false,
      },
      {
        title: "Todo 2",
        content: "Todo 2 content",
        completed: false,
      },
    ] as Todo[],
    points: 0,
  };

  get todos() {
    return this.session.todos;
  }

  get points() {
    return this.session.points;
  }

  addPoint() {
    this.session.points++;
  }

  constructor() {
    makeObservable(this, {
      session: observable,
      todos: computed,
      points: computed,
      addPoint: action,
    });
  }
}
