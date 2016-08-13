import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SignInLayout from "./SignInLayout";
import userProfile from "../../userProfile";

class SignIn extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {
        userName: "",
        password: ""
      }
    };

    this.authenticate = this.authenticate.bind(this);
    this.navigateToProjects = this.navigateToProjects.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    let credentials = this.state.credentials;

    const field = event.target.name;

    credentials[field] = event.target.value;

    return this.setState({credentials: credentials});
  }

  authenticate(e) {
    const {email, password} = this.state.credentials;
    e.preventDefault();
    this.props.actions.authenticate(email, password)
      .then(this.navigateToProjects);
  }

  navigateToProjects() {
    this.context.router.push("projects");
  }

  render() {
    const {userName, password} = this.state;
    return (
      <SignInLayout
        userName={userName}
        password={password}
        onSignIn={this.authenticate}
        onChange={this.updateState}/>
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
