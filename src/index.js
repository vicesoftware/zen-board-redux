import "babel-polyfill"; // can be optomized by only pulling in what you need
import React from "react";
import {render} from "react-dom";
import configureStore from "./store";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import createRoutes from "./createRoutes";
import "../lib/bootstrap-admin-theme/docs/assets/css/application.css";
import "../lib/bootstrap-admin-theme/dist/toolkit.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./styles/styles.css";
import "react-select/dist/react-select.css";
import auth from "./components/common/auth";

const store = configureStore();

const requireAccess = auth.bindCheckAuth(
  store,
  (nextState, replace) => {
      replace('/sign-in');
    },
  (nextState, replace) => {
      replace('/403');
    }
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
