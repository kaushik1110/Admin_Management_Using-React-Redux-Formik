import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Form, Field } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../Common/FormikControl";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const history = useHistory();
  var data = {
    email: "k@gmail.com",
    password: "123",
  };
  localStorage.setItem('data',JSON.stringify(data))
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (value) => {
    console.log("submit email", value.email);
    console.log("apdi email", data.email);
    console.log("submit pas", value.password);
    console.log("apdo pas", data.password);
    if (value.email === data.email && value.password === data.password) {
      toast.success("Login Successfull", {
        position: toast.POSITION.TOP_RIGHT,
        
      });
      setTimeout(() => {
        history.push({
          pathname: "/home",
        });
      }, 2000);
      // setTimeout(() => {
      //   console.log("setTimeout");
      // }, 1000);
      // setInterval(() => {
      //   console.log("setInterval");
      // }, 1000)
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
            />
            <FormikControl
              control="input"
              placeholder="Password"
              className="form-control mt--15 inputsett"
              name="password"
            />

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
