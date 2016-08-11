import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SignInLayout from "./SignInLayout";
import userProfile from "../../userProfile";

class SignIn extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.authenticate = this.authenticate.bind(this);
    this.navigateToProjects = this.navigateToProjects.bind(this);

  }

  authenticate(e, userName, password) {
    e.preventDefault();
    this.props.actions.authenticate(userName, password)
      .then(this.navigateToProjects);
  }

  navigateToProjects() {
    this.context.router.push("projects");
  }

  render() {
    return (
      <SignInLayout onSignIn={this.authenticate}/>
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
    actions: bindActionCreators(userProfile.actions, dispatch)
  };
}

SignIn.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
