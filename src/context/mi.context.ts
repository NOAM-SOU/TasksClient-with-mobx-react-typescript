import { createContext } from "react";
import { Context } from "../types/context.type";
export const MyContext = createContext<Context>({
  state: false,
  setState: () => {},
});
