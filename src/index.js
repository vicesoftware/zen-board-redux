/* eslint-disable import/default */
import "babel-polyfill"; // can be optomized by only pulling in what you need
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {setStore} from "./store";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import createRoutes from "./createRoutes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'jquery'; // Also requires ProvidePlugin entry in webpack.config files
import "tether";
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import "../lib/bootstrap-admin-theme/dist/toolkit.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./styles/styles.css";
import "react-select/dist/react-select.css";
import auth from "./components/common/auth";
import userProfileApi from "./api/stubUserProfileApi";
import userProfile from "./components/userProfile";
import _ from "lodash";

const {loadUserProfile} = userProfile.actions;

const store = configureStore();
setStore(store);

const requireAccess = auth.bindCheckAuth(
  tryGetUserProfile,
  onNotAuthenticated,
  onNotAuthorized
);

const routes = createRoutes(requireAccess);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);

function tryGetUserProfile() {
  let userProfile = store.getState().userProfile;

  if (_.isEmpty(userProfile)) {
    userProfile = userProfileApi.load();

    if (!_.isEmpty(userProfile)) {
      store.dispatch(loadUserProfile(userProfile));
    }
  }

  return userProfile;
}

function onNotAuthenticated(nextState, replace) {
  replace('/sign-in');
}

function onNotAuthorized(nextState, replace) {
  replace('/403');
}

