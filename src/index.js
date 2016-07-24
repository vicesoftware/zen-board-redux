import 'babel-polyfill'; // can be optomized by only pulling in what you need
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import '../lib/bootstrap-admin-theme/docs/assets/css/application.css';
import '../lib/bootstrap-admin-theme/dist/toolkit.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/styles.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>,
	document.getElementById('app')
);
