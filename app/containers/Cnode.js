import '../less/base';
import 'flex.css/dist/data-flex.css';
import '../lib/autosize';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actionCreators';

import CnodeList from '../components/CnodeList.js';


class App extends Component {

	componentDidMount() {
		this.props.dispatch(fetchPosts(this.props.tab));
	}

	render() {
		const { dispatch, posts } = this.props;

		if(this.props.isLoading) {
			return <p>Loading...</p>;
		}

		return (
			<div style={{
				fontSize: '0.30rem'
			}}>
				<CnodeList
					posts={posts}
					onCellClick={(id) => console.log(id)} />
			</div>
		);
	}
}

App.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	tab: PropTypes.oneOf([
		'',
    'ask',
    'share',
    'job',
    'good'
  ]).isRequired,
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		last_reply_at: PropTypes.string.isRequired,
		author: PropTypes.shape({
			loginname: PropTypes.string.isRequired,
			avatar_url: PropTypes.string.isRequired
		}).isRequired
	}).isRequired).isRequired
}

export default connect(state => {
	return {
		posts: state.posts,
		tab: state.tab,
		isLoading: state.isLoading
	}
})(App);
