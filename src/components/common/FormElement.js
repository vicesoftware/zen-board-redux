import React, {PropTypes} from "react";

const FormElement = ({name, label, error, children}) => {
  const formGroupClass = "form-group" + (error & "has-error");

	return (
    <div className={formGroupClass}>
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
	);
};

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formGroupClass: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default FormElement;
