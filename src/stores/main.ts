import { AuthStore } from "./auth.store";
import { TodoStore } from "./todo.store";

const authStore = new AuthStore();
const todoStore = new TodoStore();

export const rootStores = {
  authStore,
  todoStore,
};
