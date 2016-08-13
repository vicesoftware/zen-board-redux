import React, {PropTypes} from "react";

const ErrorPanel = ({title, message}) => {
	return (
    <div className="alert alert-danger" role="alert">
      <strong>{title}</strong>{message}
    </div>
	);
};

ErrorPanel.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
};

export default ErrorPanel;
