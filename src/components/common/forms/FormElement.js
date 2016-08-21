import React, {PropTypes} from "react";

const FormElement = ({name, label, error, touched, children}) => {
  const showError = touched && error;
  const formGroupClass = "form-group" + (showError && " has-danger");

	return (
    <div className={formGroupClass}>
      <label className="col-form-label" htmlFor={name}>{label}</label>
      {children}
      {showError
        && <div className="form-control-feedback">{error}</div>}
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
