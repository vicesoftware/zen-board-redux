import React, {PropTypes} from "react";

const SignInLayout = ({onSignIn, userName, password, onChange}) => {
  return (
    <div className="row">
      <div className="col-lg-offset-4 col-lg-4">

        <div className="panel panel-default">
          <form className="form-signin">
            <h4 className="form-signin-heading">
              Please Sign In
            </h4>
            <label
              for="inputEmail"
              className="sr-only">Email address</label>
            <input
              name="userName"
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autofocus=""
              value={userName}
              onChange={onChange}/>
            <label for="inputPassword" className="sr-only">Password</label>
            <input
              name="password"
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
              value={password}
              onChange={onChange}/>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  value="remember-me"/> Remember me
              </label>
            </div>
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={onSignIn}>Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

SignInLayout.propTypes = {
  // name: PropTypes.string.isRequired
};

export default SignInLayout;
