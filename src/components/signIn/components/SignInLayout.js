import React, {PropTypes} from "react";
import Page from "../../common/page/Page";

const SignInLayout = ({onSignIn, email, password, rememberMe, onChange, isBusy}) => {
  return (
    <Page isBusy={isBusy}>
      <div className="row">
        <div className="col-lg-offset-4 col-lg-4">

          <div className="panel panel-default">
            <form className="form-signin">
              <h4 className="form-signin-heading">
                Please Sign In
              </h4>
              <label
                htmlFor="inputEmail"
                className="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required=""
                autoFocus=""
                value={email}
                onChange={onChange}/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
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
                    name="rememberMe"
                    value={rememberMe}
                    onChange={onChange}/> Remember me
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
    </Page>
  );
};

SignInLayout.propTypes = {
  onSignIn: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func
};

export default SignInLayout;
