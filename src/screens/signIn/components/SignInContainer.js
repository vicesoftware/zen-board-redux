import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SignIn from "./SignIn";
import userProfile from "../../../components/userProfile";
import errors from "../../../components/common/errors";

class SignInContainer extends React.Component {
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

  componentWillUnmount() {
    if (this.props.error) {
      this.props.actions.hideError();
    }
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
      .then(this.navigateToProjects)
      .catch(this.props.actions.showError);
  }

  navigateToProjects() {
    this.context.router.push("projects");
  }

  render() {
    const {isBusy} = this.props;
    const {userName, password, rememberMe} = this.state;
    return (
      <SignIn
        userName={userName}
        password={password}
        rememberMe={rememberMe}
        onSignIn={this.authenticate}
        onChange={this.updateState}
        isBusy={isBusy}/>
    );
  }
}

SignInContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isBusy: PropTypes.bool.isRequired,
  error: PropTypes.object
};

function mapStateToProps(state) {
  return {
    error: state.errors.userError,
    isBusy: state.busySpinner.count > 0
  };
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, userProfile.actions, errors.actions);
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

SignIn.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
