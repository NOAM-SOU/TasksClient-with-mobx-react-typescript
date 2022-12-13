import * as Yup from "yup";

export const newTaskSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  completed: Yup.boolean().required("Required"),
});

export const initial = {
  title: "",
  description: "",
  completed: false,
};
