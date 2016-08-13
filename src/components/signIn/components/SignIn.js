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
        password: "",
        rememberMe: false
      }
    };

    this.authenticate = this.authenticate.bind(this);
    this.navigateToProjects = this.navigateToProjects.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    let credentials = this.state.credentials;

    const field = event.target.name;

    if (field === "rememberMe") {
      credentials[field] = (event.target.value === "on");
    } else {
      credentials[field] = event.target.value;
    }

    return this.setState({credentials: credentials});
  }

  authenticate(e) {
    const {email, password, rememberMe} = this.state.credentials;
    e.preventDefault();
    this.props.actions.authenticate(email, password, rememberMe)
      .then(this.navigateToProjects);
  }

  navigateToProjects() {
    this.context.router.push("projects");
  }

  render() {
    const {userName, password, rememberMe} = this.state;
    return (
      <SignInLayout
        userName={userName}
        password={password}
        rememberMe={rememberMe}
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
