import React, { Component, PropTypes } from 'react';

import '../less/desert.less';
import '../lib/prettify';
import '../lib/lang-css';

import DetailMain from '../components/DetailMain';
import Comment from '../components/Comment';
import Loading from '../components/Loading.js';

import { connect } from 'react-redux';
import { fetchPost } from '../actions/actionCreators';

class Detail extends Component {

	componentWillMount(){
		const { params } = this.props;
		this.props.dispatch(fetchPost(params.id));
	}

	componentDidMount(){
		setTimeout(() => PR.prettyPrint(), 200);
	}

	render() {
		const { post } = this.props;

		if(post.isLoading) {
			return <Loading text='数据加载中' />;
		}

		return (
			<div style={{
				fontSize: '0.25rem'
			}}>
				<DetailMain
					post={post}
				/>
				<Comment post={post}>
				</Comment>
			</div>
		);
	}

}

export default connect(state => {
	return {
		post: state.post
	}
})(Detail);
