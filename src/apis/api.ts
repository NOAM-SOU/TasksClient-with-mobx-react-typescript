import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  // create a global api instance
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = axios.create({
  // create a login api instance
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // add a request interceptor to the global api instance to add the token to the header
    const token = localStorage.getItem("token");
    if (token) {
      (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }
    return config;
  }
);
