import { Field, Formik, Form } from "formik";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { initial, editSchema } from "../../formTools/validation/editTask";
import { rootStores } from "../../stores/main";

const { taskStore } = rootStores;

function EditTask() {
  const { updateTask, taskInfo, getTask } = taskStore;
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    getTask(id);
  }, []);

  console.log("taskInfo", taskInfo);

  return (
    <>
      <Formik
        initialValues={{ ...initial, completed: taskInfo.completed }}
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
            <Field name="title" type="string" placeholder={taskInfo.title} />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field name="description" placeholder={taskInfo.description} />
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
