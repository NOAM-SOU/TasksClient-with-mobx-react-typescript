import { Formik, Form, Field } from "formik";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import {
  initial,
  loginSchema,
} from "../../formTools/validation/login.validation";
import { rootStores } from "../../stores/main";

const { authStore } = rootStores;

function LoginForm() {
  const { login } = authStore;
  const navigate = useNavigate();
  return (
    <>
      <h1>login</h1>
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
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default observer(LoginForm);
