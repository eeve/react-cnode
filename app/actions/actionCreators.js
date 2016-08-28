import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(tab) {
	return {
		type: REQUEST_POSTS,
		tab
	}
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(tab, json){
	return {
		type: RECEIVE_POSTS,
		tab,
		posts: json.data,
		receivedAt: Date.now()
	}
}

export function fetchPosts(tab) {
	return function(dispatch) {
		dispatch(requestPosts(tab));
		fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}`)
			.then(response => response.json())
			.then(json =>
				dispatch(receivePosts(tab, json))
			)
	}
}

export const SET_TAB = 'SET_TAB';
export function setTab(tab){
	return {
		type: SET_TAB,
		tab
	}
}

export const GET_POSTING = 'GET_POSTING';
export function getPosting(isLoading) {
	return {
		type: GET_POSTING,
		post: {
			isLoading: isLoading
		}
	}
}

export const GET_POSTED = 'GET_POSTED';
export function getPosted(post) {
	return {
		type: GET_POSTED,
		post: {
			...post,
			isLoading: false
		}
	}
}

export function fetchPost(posts, id) {
	return function(dispatch) {
		dispatch(getPosting(true));
		let _posts_ = posts.filter(post => post.id === id);
		const post = _posts_.length === 1 ? _posts_[0] : null;
		dispatch(getPosted(post));
	}
}
