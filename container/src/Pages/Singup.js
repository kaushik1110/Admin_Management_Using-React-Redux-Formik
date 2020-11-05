import React from "react";
import { Form } from "formik";
import { ToastContainer } from "react-toastify";
import { Formik } from "formik";
import { addTodo } from "../Action/Action";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as Yup from "yup";
import FormikControl from "../Common/FormikControl";
import { useDispatch } from "react-redux";
import ShowData from "./ShowData";

const Singup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    name: "",
    email: "",
    address: "",
    birthDate: "",
    genderOption: "",
    hobbyOption: "",
  };

  const onSubmit = (value,{ resetForm }) => {
    // 
    const data = {
       id: Math.floor(Math.random()*10000),
      name: value.name,
      address: value.address,
      birthDate: value.birthDate,
      email: value.email,
      genderOption: value.genderOption,
      hobbyOption: value.hobbyOption,
    };
    props.dispatch(addTodo(data));
    resetForm({value:''});

    // history.push({
    //   pathname: "/home",
    // });
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required !"),
    email: Yup.string().email("Invalid email format").required("Required !"),
    address: Yup.string().required("Required !"),
    birthDate: Yup.date().required("Required !").nullable(),
    genderOption: Yup.string().required("Required !"),
    hobbyOption: Yup.array().required("Required !"),
  });
  const genderOptions = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Other", value: "Other" },
  ];
  const checkBoxOptions = [
    { key: "Cricket", value: "Cricket" },
    { key: "Singing", value: "Singing" },
    { key: "Driving", value: "Driving" },
  ];
  return (
    <div>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <div className="">
            <Form className="container regisformset  border border-light p-5">
              <p className="h4 mb-0 text-center">Sign Up</p>
              <FormikControl
                control="input"
                placeholder="Full Name"
                label="Name :"
                className="form-control"
                name="name"
                // onChange={(e) => {
                //   initialValues({name : e.target.value});
                //   console.log(e);
                // }}
              />
              <FormikControl
                control="input"
                placeholder="Email"
                label="Email :"
                className="form-control"
                name="email"
              />
              <FormikControl
                control="textarea"
                placeholder="Address"
                label="Address :"
                className="form-control"
                name="address"
              />
              <FormikControl
                control="date"
                placeholder="Birth Date"
                label="Birth Date :"
                className="form-control"
                name="birthDate"
                autoComplete="off"
              />
              <FormikControl
                control="radio"
                placeholder="Gender"
                label="Gender :"
                className="form-control"
                name="genderOption"
                options={genderOptions}
              />
              <FormikControl
                control="checkbox"
                label="Hobby"
                name="hobbyOption"
                options={checkBoxOptions}
              />

              <button
                className="btn btn-info btn-block  fontset my-4"
                type="submit"
                onSubmit={(event) => onSubmit(event)}
              >
                Sign Up
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <ShowData />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.Reducer.data,
  };
};
export default connect(mapStateToProps)(Singup);
