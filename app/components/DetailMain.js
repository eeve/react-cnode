import React, { Component, PropTypes } from 'react';
import moment from '../lib/moment';
import tabs from '../constants/tabs.js';

import LazyLoad from 'react-lazyload';

import './DetailMain.less';

export default class DetailMain extends Component {

	componentWillMount() {

	}

	render() {
		const { post } = this.props;
		const create_at = moment(post.create_at).fromNow();

		let imgwh = '0.64rem';
		let imgStyle = { width: imgwh, height: imgwh, borderRadius: '50%' };
		let placeholderImgSrc = `http://dummyimage.com/64x64/4d494d/686a82.gif`;
		let placeholder = <img data-flex-box="0" style={imgStyle} src={placeholderImgSrc} alt='logo' />;

		return (
			<div className='ui-detail'>
				<h1 className='ui-detail-title'>{post.title}</h1>
				<div
					className='ui-detail-info'
					data-flex='dir: left box: first'>
					<LazyLoad
						height={imgwh}
						placeholder={placeholder}>
						<img
							style={imgStyle}
							data-flex-box='0'
							src={post.author.avatar_url} />
					</LazyLoad>
					<div
						className='ui-detail-subtitle'
						data-flex-box='1'>
						<div>
							<span>{post.author.loginname}</span>
							<span className='ui-detail-label'>{tabs[post.tab]}</span>
						</div>
						<div className='ui-detail-other'>
							<span>发布于{create_at}</span>
							<span>{post.reply_count}次浏览</span>
						</div>
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: post.content  }} />
			</div>
		)
	}

}

DetailMain.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired
	}).isRequired
}
