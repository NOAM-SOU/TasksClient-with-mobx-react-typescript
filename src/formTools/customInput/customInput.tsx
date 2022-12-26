import { ErrorMessage, Field } from "formik";
import { CustomInputProps } from "../../types/custom.input";
import "./customInput.css";

export function CustomInput({ name, type, placeholder }: CustomInputProps) {
  return (
    <>
      <Field
        className="custom-input"
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} render={(msg) => <div>{msg}</div>} />
    </>
  );
}
