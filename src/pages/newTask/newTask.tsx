import { Field, Formik, Form } from "formik";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { initial, newTaskSchema } from "../../formTools/validation/newTask";
import { rootStores } from "../../stores/main";

const { taskStore, authStore } = rootStores;

function NewTask() {
  const { createTask } = taskStore;
  const { userInfo } = authStore;
  const navigate = useNavigate();

  return (
    <>
      <h1>add new task</h1>
      <Formik
        initialValues={initial}
        validationSchema={newTaskSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("values", values);

          await createTask(values, userInfo.id);
          resetForm();
          navigate("/");
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="title" type="string" placeholder="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field name="description" placeholder="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default observer(NewTask);
