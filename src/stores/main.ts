import { api } from "../apis/api";
import { AuthStore } from "./auth.store";
import { TaskStore } from "./task.store";

const authStore = new AuthStore();
const taskStore = new TaskStore();

api.interceptors.response.use(undefined, (config) => {
  if (
    config.response.data.statusCode === 401 ||
    config.response.data.statusCode === 403
  ) {
    authStore.setUser(null);
  }
  return Promise.reject(config);
});

export const rootStores = {
  authStore,
  taskStore,
};
