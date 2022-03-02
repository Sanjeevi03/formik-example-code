import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  message: "",
  gender:'',
   languages:[],
   accept:false,
   color:''
};
const onSubmit = (values,reset) => {
  console.log(values);
  reset.resetForm()
};

const validationSchema = Yup.object({
  name: Yup.string().min(4,"Min Value 4").required(<div style={{color:'red'}}>Name is required</div>),
  email: Yup.string().email(<div style={{color:'red'}}>Invalid email</div>).required(<div style={{color:'red'}}>Email is requied</div>),
  message: Yup.string().required(<div style={{color:'red'}}>Message is required</div>),
  gender: Yup.string().required(<div style={{color:'red'}}>Gender is required</div>),
  languages: Yup.array().required(<div style={{color:'red'}}>Languages is required</div>),
  accept: Yup.boolean().oneOf([true], <div style={{color:'red'}}>Accept Terms & Conditions is required</div>),
  color: Yup.string().required(<div style={{color:'red'}}>Select is required</div>),
});
function Validation() {
  return (
    <>
    <h1>Formik </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form style={{ margin: "0.5in" }}>
           {/* Name Text Field */}
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" /> <br />
          <ErrorMessage name="name" sx={{color:'white'}}/> <br />

           {/* Email Text Field */}
          <label htmlFor="email">email</label>
          <Field type="email" name="email" /> <br />
          <ErrorMessage name="email" /> <br />
           
           {/* Message Text Field */}
          <label htmlFor="message">Message</label>
          <Field type="text" name="message" /> <br />
          <ErrorMessage name="message" /> <br />
          

           {/* Radio Button Field */}
          <label htmlFor="gender">Gender</label>
          <Field type="radio" name="gender" value="male" />Male 
          <Field type="radio" name="gender" value="female" />Female <br />
          <ErrorMessage name="gender" /> <br />

            {/* CheckBox  Field */}
          <label htmlFor="Languages">Languages</label>
          <Field type="checkbox" name="languages" value="tamil" />Tamil 
          <Field type="checkbox" name="languages" value="english" />English <br />
          <ErrorMessage name="languages" /> <br />

          {/* CheckBox  Field */}
          <label htmlFor="accept">Accept</label>
          <Field type="checkbox" name="accept"/> <br />
          <ErrorMessage name="accept" /> <br />

         {/* Select  Field */}
         <label>Select</label>
         <Field as="select" name="color">
             <option value="">Choose</option>
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field> <br /> <br />
          <ErrorMessage name="color" /> <br />


          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </Form>
      </Formik>
    </>
  );
}

export default Validation;
