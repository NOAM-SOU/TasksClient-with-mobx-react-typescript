import * as Yup from "yup";
import { rootStores } from "../../stores/main";

const { taskStore } = rootStores;
const { taskInfo } = taskStore;

export const editSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  completed: Yup.boolean(),
});

export const initial = {
  title: "",
  description: "",
  completed: false,
};
