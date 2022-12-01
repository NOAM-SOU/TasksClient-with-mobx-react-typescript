import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import {
  SignupSchema,
  initial,
} from "../../formTools/validation/signUp.validation";
import { rootStores } from "../../stores/main";

const { authStore } = rootStores;

export function SignUpForm() {
  const { signUp } = authStore;
  const navigate = useNavigate();
  return (
    <>
      <h1>Signup</h1>
      <Formik
        initialValues={initial}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await signUp(values);
          resetForm();
          navigate("/");
          setSubmitting(false);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" placeholder="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field name="confirmPassword" />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
