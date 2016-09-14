import React, {PropTypes} from "react";

const ErrorPanel = ({error}) => {
  let view = "";
  if (error) {
      view = (
      <div className="row">
        <div className="col-lg-offset-4 col-lg-4">
          <div className="alert alert-danger" role="alert">
            <strong>{error.title}</strong>
            <br/>
            {error.message}
          </div>
        </div>
      </div>
      );
  }
  
  return (
    <div id="error-container">
      {view}
    </div>
  );
};

ErrorPanel.propTypes = {
  error: PropTypes.object
};

export default ErrorPanel;
