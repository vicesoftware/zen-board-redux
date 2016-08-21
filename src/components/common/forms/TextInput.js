import React, {PropTypes} from "react";
import FormElement from "./FormElement";
import inputPropTypes from "./inputPropTypes";

const TextInput = (props) => {
  let inputClass = "form-control";

  if (props.touched && props.error) {
    inputClass += " form-control-danger";
  }

  return (
    <FormElement {...props}>
      <input
        type="Text"
        className={inputClass}
        {...props}/>
    </FormElement>
  );
};

TextInput.propTypes = inputPropTypes;

export default TextInput;
