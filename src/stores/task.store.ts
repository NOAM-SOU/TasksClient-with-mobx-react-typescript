import {
  observable,
  computed,
  makeObservable,
  action,
  runInAction,
  toJS,
} from "mobx";
import { taskApi } from "../apis/task.api";
import { CreateTaskDTo } from "../dto/create.task";
import { Todo } from "../interfaces/todo";

export class TaskStore {
  tasks: Todo[] = [];
  task: Todo = {
    title: "",
    description: "",
    completed: false,
    userId: "",
    _id: "",
  };

  get tasksList() {
    return this.tasks;
  }

  get taskInfo() {
    return this.task;
  }

  getAllTasks = async (id: string) => {
    const data = await taskApi.getAll(id);
    console.log(data.data);
    runInAction(() => {
      this.tasks = data.data;
    });
  };

  getTask = async (id: string | undefined) => {
    const data = await taskApi.getTask(id);
    console.log(data.data);
    const task = data.data;
    runInAction(() => {
      this.task = task;
    });
  };

  createTask = async (task: CreateTaskDTo, id: string) => {
    const data = await taskApi.createTask(task, id);
    const newTask = data.data;
    runInAction(() => {
      this.tasks.push(newTask);
    });
  };

  deleteTask = async (userId: string, id: string) => {
    const data = await taskApi.deleteTask(userId, id);
    const deletedTask = data.data;
    runInAction(() => {
      this.tasks = this.tasks.filter((task) => task._id !== deletedTask._id);
    });
  };

  updateTask = async (id: string, task: CreateTaskDTo) => {
    const data = await taskApi.updateTask(id, task);
    const updatedTask = data.data;
    runInAction(() => {
      this.tasks = this.tasks.filter((task) => {
        if (task._id === updatedTask._id) {
          task = updatedTask;
        }
        return task;
      });
    });
  };

  completeTask = async (id: string) => {
    const data = await taskApi.completeTask(id);
    const completedTask = data.data;
    runInAction(() => {
      this.tasks = this.tasks.map((task) => {
        if (task._id === completedTask._id) {
          task.completed = completedTask.completed;
        }
        return task;
      });
    });
  };

  constructor() {
    makeObservable(this, {
      tasks: observable,
      task: observable,
      getAllTasks: action,
      getTask: action,
      tasksList: computed,
      taskInfo: computed,
    });
  }
}
