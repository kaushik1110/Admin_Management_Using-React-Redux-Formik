import React from "react";
import { Form } from "formik";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { addTodo } from "../Action/Action";
import FormikControl from "../Common/FormikControl";

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
  const Reducer = useSelector((state) => {
    return {
      state: state.Reducer.Update,
    };
  });

  const onSubmit = (value, { resetForm }) => {
    //
    const data = {
      id:
        Reducer.state.length === 0
          ? Math.random().toString(36).substr(2, 9)
          : Reducer.state[0].id,
      // id: Math.floor(Math.random() * 10000),
      name: value.name,
      address: value.address,
      birthDate: moment(value.birthDate).format("l"),
      email: value.email,
      genderOption: value.genderOption,
      hobbyOption: value.hobbyOption,
    };

    props.dispatch(addTodo(data));
    resetForm({ value: "" });
    toast.success("Login Successfull", {
      position: toast.POSITION.TOP_RIGHT,
      
    });
    setTimeout(() => {
      history.push({
      pathname: "/showdata",
    });
    }, 2000);
    
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
            {/* {console.log("formik", formik)}  *important* */}
            <Form className="container regisformset  border border-light p-5">
              <p className="h4 mb-0 text-center">Sign Up</p>

              {console.log("formik.values.birthDate", formik.values.birthDate)}

              {Reducer && Reducer.state && Reducer.state[0] ? (
                <FormikControl
                  control="input"
                  placeholder="Full Name"
                  label="Name :"
                  className="form-control"
                  name="name"
                  value={
                    formik.values.name
                      ? formik.values.name
                      : Reducer.state[0].name
                  }
                />
              ) : (
                <FormikControl
                  control="input"
                  placeholder="Full Name"
                  label="Name :"
                  className="form-control"
                  name="name"
                  value={formik.values.name}
                />
              )}

              {Reducer && Reducer.state && Reducer.state[0] ? (
                <FormikControl
                  control="input"
                  placeholder="Email"
                  label="Email :"
                  className="form-control"
                  name="email"
                  value={
                    formik.values.email
                      ? formik.values.email
                      : Reducer.state[0].email
                  }
                />
              ) : (
                <FormikControl
                  control="input"
                  placeholder="Email"
                  label="Email :"
                  className="form-control"
                  name="email"
                  value={formik.values.email}
                />
              )}

              {Reducer && Reducer.state && Reducer.state[0] ? (
                <FormikControl
                  control="textarea"
                  placeholder="Address"
                  label="Address :"
                  className="form-control"
                  name="address"
                  value={
                    formik.values.address
                      ? formik.values.address
                      : Reducer.state[0].address
                  }
                />
              ) : (
                <FormikControl
                  control="textarea"
                  placeholder="Address"
                  label="Address :"
                  className="form-control"
                  name="address"
                  value={formik.values.address}
                />
              )}

              {Reducer && Reducer.state && Reducer.state[0] ? (
                <FormikControl
                  control="date"
                  placeholder="Birth Date"
                  label="Birth Date :"
                  className="form-control"
                  name="birthDate"
                  autoComplete="off"
                  value={
                    formik.values.birthDate
                      ? formik.values.birthDate
                      : Reducer.state[0].birthDate
                  }
                />
              ) : (
                <FormikControl
                  control="date"
                  placeholder="Birth Date"
                  label="Birth Date :"
                  className="form-control"
                  name="birthDate"
                  autoComplete="off"
                  value={formik.values.birthDate}
                />
              )}

              {Reducer && Reducer.state && Reducer.state[0] ? (
                <FormikControl
                  control="radio"
                  placeholder="Gender"
                  label="Gender :"
                  className="form-control"
                  name="genderOption"
                  options={genderOptions}
                  value={
                    formik.values.genderOption
                      ? formik.values.genderOption
                      : Reducer.state[0].genderOption
                  }
                />
              ) : (
                <FormikControl
                  control="radio"
                  placeholder="Gender"
                  label="Gender :"
                  className="form-control"
                  name="genderOption"
                  options={genderOptions}
                  value={formik.values.genderOption}
                />
              )}

              {Reducer && Reducer.state && Reducer.state[0] ? (
                <FormikControl
                  control="checkbox"
                  label="Hobby"
                  name="hobbyOption"
                  options={checkBoxOptions}
                  value={
                    formik.values.hobbyOption
                      ? formik.values.hobbyOption
                      : Reducer.state[0].hobbyOption
                  }
                />
              ) : (
                <FormikControl
                  control="checkbox"
                  label="Hobby"
                  name="hobbyOption"
                  options={checkBoxOptions}
                  value={formik.values.hobbyOption}
                />
              )}

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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.Reducer.data,
  };
};
export default connect(mapStateToProps)(Singup);
