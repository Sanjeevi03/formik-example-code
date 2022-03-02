import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  message: "",
};
const onSubmit = (values) => {
  console.log(values);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Name is Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid Email";
//   }
//   if (!values.message) {
//     errors.message = "Message Required";
//   }
//   return errors;
// };
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is requied"),
  message: Yup.string().required("Message is required"),
});
function Validation() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    //  validate,
    validationSchema,
  });
  console.log(formik.touched);
  return (
    <>
      <form style={{ margin: "1in" }} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />{" "}
        <br />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        <br />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
        />{" "}
        <br />
        {formik.touched.message && formik.errors.message ? (
          <div className="error">{formik.errors.message}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Validation;
