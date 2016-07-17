import React, {PropTypes} from "react";

const FormElement = ({name, label, errors, children}) => {
  const formGroupClass = "form-group" + (errors & "has-error");

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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default FormElement;
