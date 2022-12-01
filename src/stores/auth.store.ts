import { action, computed, makeObservable, observable } from "mobx";
import { authApi } from "../apis/auth.api";
import { User, UserInfo } from "../interfaces/user";

export class AuthStore {
  user: UserInfo = {
    name: "",
    email: "",
    id: "",
  };

  signUp = async (user: User) => {
    const data = await authApi.signUp(user);
    console.log("mi data", data.data);
    return data.data;
  };

  constructor() {
    makeObservable(this, {
      user: observable,
    });
  }
}
