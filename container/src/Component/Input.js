import React from "react";

import { ErrorMessage, Field } from "formik";
import TextError from "../Common/TextError";

const Input = (props) => {
  const { label, name, value, ...rest } = props;
  return (
    <div className="textset inputbox form-group ">
      <label className="sizetext">{label}</label>
      <div>
        <Field id={name} name={name}  value={value ? value : ""} {...rest} />
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
};

export default Input;
