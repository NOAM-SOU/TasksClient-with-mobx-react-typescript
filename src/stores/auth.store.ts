import jwtDecode from "jwt-decode";
import { action, makeObservable, observable, runInAction, toJS } from "mobx";
import { authApi } from "../apis/auth.api";
import { User, UserInfo } from "../interfaces/user";

export class AuthStore {
  user: UserInfo = {
    name: "",
    email: "",
    id: "",
  };

  get userInfo() {
    return this.user;
  }

  setUser(token: string) {
    runInAction(() => {
      if (token == null) {
        localStorage.removeItem("token");
        this.user = {
          name: "",
          email: "",
          id: "",
        };
      } else {
        localStorage.setItem("token", token);
        this.user = jwtDecode(token);
      }
    });
  }

  signUp = async (user: User) => {
    const data = await await authApi.signUp(user);
    await this.setUser(data.data.token);
  };

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action.bound,
    });
  }
}
