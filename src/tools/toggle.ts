import { Context } from "../types/context.type";
export function toggleFunction(set: Context) {
  set.setState(!set.state);
}
