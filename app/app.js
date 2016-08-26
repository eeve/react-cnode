import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './containers/Cnode';
import rootReducer from './reducers/reducers';

let store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware // 允许我们 dispatch() 函数
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
