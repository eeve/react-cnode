import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS, SET_TAB } from '../actions/actionCreators';



function tab(state = 'good', action) {
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

const todoApp = combineReducers({
	tab, posts, isLoading
});

export default todoApp;
