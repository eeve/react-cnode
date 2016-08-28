import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS, SET_TAB, GET_POSTING, GET_POSTED } from '../actions/actionCreators';


function tab(state = '', action) {
	switch (action.type) {
		case SET_TAB:
			return action.tab;
			break;
		default:
			return state;
	}
}

function posts(state = [], action) {
	switch (action.type) {
		case RECEIVE_POSTS:
			return action.posts;
			break;
		default:
			return state;
	}
}

function isLoading(state = true, action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return true;
			break;
		case RECEIVE_POSTS:
			return false;
			break;
		default:
			return state;
	}
}

function post(state = { isLoading: true }, action) {
	switch(action.type) {
		case GET_POSTING:
			return {
				isLoading: true
			}
			break;
		case GET_POSTED:
			console.log(888, action);
			return action.post;
			break;
		default:
			return state;
			break;
	}
}


const cnodeJsApp = combineReducers({
	tab, posts, isLoading, post
});

export default cnodeJsApp;
