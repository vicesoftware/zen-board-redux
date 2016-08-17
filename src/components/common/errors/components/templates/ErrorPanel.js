import React, {PropTypes} from "react";

const ErrorPanel = ({error}) => {
  return (
    <div id="error-container">
      {error &&
      <div className="row">
        <div className="col-lg-offset-4 col-lg-4">
          <div className="alert alert-danger" role="alert">
            <strong>{error.title}</strong>
            <br/>
            {error.message}
          </div>
        </div>
      </div>
      }
    </div>
  );
};

ErrorPanel.propTypes = {
  error: PropTypes.object
};

export default ErrorPanel;
