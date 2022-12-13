import { Field, Formik, Form } from "formik";
import { observer } from "mobx-react";
import { useLocation, useNavigate } from "react-router-dom";
import { initial, editSchema } from "../formTools/validation/editTask";
import { rootStores } from "../stores/main";

const { taskStore } = rootStores;

function EditTask() {
  const { updateTask, taskInfo } = taskStore;
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, " useLocation Hook");
  // const data = location.state?.data;

  return (
    <>
      <Formik
        initialValues={initial}
        validationSchema={editSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("values", values);
          await updateTask(taskInfo._id, values);
          resetForm();
          navigate("/");
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="title"
              type="string"
              placeholder="title"
              // value={task.title}
            />
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

export default observer(EditTask);
