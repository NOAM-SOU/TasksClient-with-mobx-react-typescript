import jwtDecode from "jwt-decode";
import * as mobx from "mobx";
import { authApi } from "../apis/auth.api";
import { User, UserInfo, UserLogin } from "../interfaces/user";
import { Token } from "../types/token";

export class AuthStore {
  user: UserInfo = {
    name: "",
    email: "",
    id: "",
  };
  token: Token = null;

  get userInfo() {
    return this.user;
  }

  get isUserLoggedIn(): boolean {
    console.log(this.user.email);

    return !!this.user.email;
  }

  get userToken(): Token {
    return (this.token = localStorage.getItem("token"));
  }

  setUser(token: Token) {
    mobx.runInAction(() => {
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
    const data = await authApi.signUp(user);
    await this.setUser(data.data.token);
  };

  login = async (user: UserLogin) => {
    const data = await authApi.login(user);
    await this.setUser(data.data.token);
  };

  logout = () => {
    this.setUser(null);
  };

  constructor() {
    mobx.makeObservable(this, {
      user: mobx.observable,
      token: mobx.observable,
      setUser: mobx.action.bound,
      signUp: mobx.action.bound,
      login: mobx.action.bound,
      logout: mobx.action.bound,
      isUserLoggedIn: mobx.computed,
      userInfo: mobx.computed,
      userToken: mobx.computed,
    });
    this.setUser(this.userToken);
  }
}
