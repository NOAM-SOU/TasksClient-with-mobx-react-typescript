import { Formik, Form, Field } from "formik";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../formTools/customInput/customInput";
import {
  initial,
  loginSchema,
} from "../../formTools/validation/login.validation";
import { rootStores } from "../../stores/main";
import "./loginForm.css";

const { authStore } = rootStores;

function LoginForm() {
  const { login } = authStore;
  const navigate = useNavigate();
  return (
    <div className="login-form-oficial">
      <Formik
        initialValues={initial}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await login(values);
          resetForm();
          navigate("/");
          setSubmitting(false);
        }}
      >
        {() => (
          <Form className="login-form-form">
            <CustomInput name="email" type="email" placeholder="email" />
            <CustomInput
              name="password"
              type="password"
              placeholder="password"
            />

            <button className="login-form-btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default observer(LoginForm);
