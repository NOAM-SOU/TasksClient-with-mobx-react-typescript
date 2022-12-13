import { CreateTaskDTo } from "../dto/create.task";
import { api } from "./api";

class TaskApi {
  getAll = async (id: string) => {
    return await api.get(`/tasks/all/${id}`);
  };

  async getTask(id: string | undefined) {
    return await api.get(`/tasks/${id}`);
  }

  async createTask(task: CreateTaskDTo, id: string) {
    return await api.post(`/tasks/${id}`, task);
  }

  deleteTask = async (userId: string, id: string) => {
    return await api.delete(`/tasks/${userId}/${id}`);
  };

  updateTask = async (id: string, task: CreateTaskDTo) => {
    return await api.put(`/tasks/${id}`, task);
  };

  completeTask = async (id: string) => {
    return await api.put(`/tasks/completed/${id}`);
  };
}

export const taskApi = new TaskApi();
