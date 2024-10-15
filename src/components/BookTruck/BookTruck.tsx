import css from "./BookTruck.module.css";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const BookSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email must be a valid format with @ symbol"
    )
    .required("Email is required"),
});

export default function BookTruck() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <h4>Book your campervan now</h4>
      <p>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={BookSchema}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>Username</label>
          <Field type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label className={css.label}>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />

          <label className={css.label}>Date</label>
          <Field type="date" name="date" />
          <label className={css.label}>Comment</label>
          <Field type="textarea" name="comment" />

          <button type="submit" className={css.submitBtn}>
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}
