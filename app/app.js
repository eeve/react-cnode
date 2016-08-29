import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/reducers';
import Routes from './routers/index';

// React.initializeTouchEvents(true);

let store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware // 允许我们 dispatch() 函数
	)
);

let container = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={Routes}></Router>
	</Provider>,
	container
);
