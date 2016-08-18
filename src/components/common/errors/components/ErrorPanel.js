import React, {PropTypes} from "react";
import {connect} from "react-redux";
import ErrorPanelTemplate from "./templates/ErrorPanel";

class ErrorPanel extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {userError} = this.props;

    return (
      <ErrorPanelTemplate error={userError}/>
    );
  }
}

ErrorPanel.propTypes = {
  error: PropTypes.object,
  userError: PropTypes.object
};

function mapStateToProps(state) {
  return {
    userError: state.errors && state.errors.userError
  };
}

export default connect(mapStateToProps)(ErrorPanel);
