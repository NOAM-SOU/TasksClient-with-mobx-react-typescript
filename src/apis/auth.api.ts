import { User, UserLogin } from "../interfaces/user";
import { loginApi } from "./api";

class AuthApi {
  signUp = async (user: User) => {
    return await loginApi.post(`/auth/register`, user);
  };

  login = async (user: UserLogin) => {
    return await loginApi.post(`/auth/login`, user);
  };
}

export const authApi = new AuthApi();
