import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "../Common/TextError";

const Textarea = (props) => {
  const { label, name, value, ...rest } = props;
  return (
    <div className="textset form-group ">
      <label className="sizetext">{label}:</label>
      <div>
        <Field as="textarea" name={name} {...rest} value={value ? value : ""}/>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
};

export default Textarea;
