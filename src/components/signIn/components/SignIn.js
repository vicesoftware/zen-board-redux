import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SignInLayout from "./SignInLayout";

class SignIn extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <SignInLayout/>
    );
  }
}

SignIn.propTypes = {
  // actions: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(SignIn Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
