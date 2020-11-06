import React from "react";

import { Form } from "formik";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

import FormikControl from "../Common/FormikControl";
import "../App.css";

function Login() {
  const history = useHistory();
  var data = {
    email: "k@gmail.com",
    password: "123",
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (value) => {
    if (value.email === data.email && value.password === data.password) {
      toast.success("Login Successfull", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("token", JSON.stringify(data));
      setTimeout(() => {
        history.push({
          pathname: "/home",
        });
      }, 2000);
    } else {
      toast.error("Enter valid Email and Password", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
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
    <div>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="container formset  border border-light p-5">
            <p className="h4 mb-0 text-center">Sign in</p>
            <FormikControl
              control="input"
              placeholder="Email"
              className="form-control"
              name="email"
              value={formik.values.email}
            />
            <FormikControl
              control="input"
              placeholder="Password"
              className="form-control mt--15 inputsett"
              name="password"
              value={formik.values.password}
            />

            <button
              className="btn btn-info btn-block  fontset my-4"
              type="submit"
              onSubmit={(event) => onSubmit(event)}
            >
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
