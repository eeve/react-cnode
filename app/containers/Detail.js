import React, { Component, PropTypes } from 'react';

import '../less/desert.less';
import '../lib/prettify';
import '../lib/lang-css';

import DetailMain from '../components/DetailMain';

import { connect } from 'react-redux';
import { fetchPost } from '../actions/actionCreators';

class Detail extends Component {

	componentWillMount(){
		const { params, posts } = this.props;
		this.props.dispatch(fetchPost(posts, params.id));
	}

	componentDidMount(){
		setTimeout(() => PR.prettyPrint());
	}

	render() {
		const { post } = this.props;

		if(post.isLoading) {
			return <p>Loading...</p>;
		}

		return (
			<div style={{
				fontSize: '0.25rem'
			}}>
				<DetailMain
					post={post}
				/>
			</div>
		);
	}

}

export default connect(state => {
	return {
		posts: state.posts,
		post: state.post
	}
})(Detail);
