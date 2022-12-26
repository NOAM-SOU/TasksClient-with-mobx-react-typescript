import { Formik, Form } from "formik";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../formTools/customInput/customInput";
import {
  SignupSchema,
  initial,
} from "../../formTools/validation/signUp.validation";
import { rootStores } from "../../stores/main";
import "./signUpForm.css";

const { authStore } = rootStores;

function SignUpForm() {
  const { signUp } = authStore;
  const navigate = useNavigate();
  return (
    <div className="signup-form-oficial">
      <Formik
        initialValues={initial}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await signUp(values);
          resetForm();
          navigate("/");
          setSubmitting(false);
        }}
      >
        {() => (
          <Form className="signup-form-form">
            <CustomInput name="name" type="string" placeholder="name" />
            <CustomInput name="email" type="email" placeholder="email" />
            <CustomInput
              name="password"
              type="password"
              placeholder="password"
            />
            <CustomInput
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
            />

            <button className="signup-form-btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default observer(SignUpForm);
