import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Form, Field } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../Common/FormikControl";

function Login() {
  var data = {
    email: "kaushik@gmail.com",
    password:"123",
  }
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (value) => {
    // if () {
      
    // }
    // else{
    //   toast.error("Enter valid Email and Password", {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    }
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required !"),
    password: Yup.string()
      // .min(8, "at least 8 chars")
      // .matches(/[a-z]/, "at least one lowercase char")
      // .matches(/[A-Z]/, "at least one uppercase char")
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "at least 1 number and special char (@,!,#, etc)."
      // )
      .required("Required !"),
  });

  return (
    <div>
      <ToastContainer />
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className="container formset  border border-light p-5">
          <p className="h4 mb-0 text-center">Sign in</p>
          <FormikControl
            control="input"
            placeholder="Email"
            className="form-control"
            name="email"
          />
          <FormikControl
            control="input"
            placeholder="Password"
            className="form-control mt--15 inputsett"
            name="password"
          />
          {/* <div>
          
          <Field
            type="email"
            id="email"
            name="email"
            className="form-control mb-3"
            placeholder="E-mail"
          />
          <ErrorMessage name="email" >
            {(errorMsg) => <div className="mb-2" style={{ color: "red", fontWeight: "normal" }}>{errorMsg}</div>}
          </ErrorMessage>
        </div> */}

          {/* <div>
          <Field
            type="password"
            id="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          <ErrorMessage name="password">
            {(errorMsg) => (
              <div
                className="mb-2"
                style={{ color: "red", fontWeight: "normal" }}
              >
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div> */}

          <button
            className="btn btn-info btn-block  fontset my-4"
            type="submit"
            onSubmit={(event) => onSubmit(event)}
          >
            Sign in
          </button>

          <p className="fontsett text-center">
            Not a member?
            <Link className="ml-2" to="/home">
              Singup
            </Link>
          </p>
        </Form>
      )}
    </Formik>
    </div>
  );
}

export default Login;
