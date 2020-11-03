import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Form, Field } from "formik";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../Common/FormikControl";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
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
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className="container formset  border border-light p-5">
          <p className="h4 mb-4 text-center">Sign in</p>
          <FormikControl
            control="input"
            placeholder="E-mail"
            className="form-control mb-3"
            name="Email"
          />
          <FormikControl
            control="input"
            placeholder="Password"
            className="form-control mb-3"
            name="checkBoxOption"
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
            className="btn btn-info btn-block  fontset my-3"
            type="submit"
          >
            Sign in
          </button>

          <p className="fontsett text-center">
            Not a member?
            <Link className="ml-2" to="/singup">
              Singup
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
