import React, { Component, PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import moment from '../lib/moment';

import './Comment.less';

export default class Comment extends Component {
	render() {
		const post = this.props.post;
		const replies = post.replies;

		const imgwh = '0.8rem';
		const imgStyle = { width: imgwh, height: imgwh, borderRadius: '50%' };
		const placeholderImgSrc = `http://dummyimage.com/80x80/4d494d/686a82.gif&text=logo`;
		const placeholder = <img data-flex-box="0" style={imgStyle} src={placeholderImgSrc} alt='logo' />;

		return (
			<div className='ui-comment'>
				<p className='ui-comment-title'>{post.reply_count}个回复</p>
				<ul className='ui-comment-list'>
					{replies.map((reply, index) =>
						<li key={index} data-flex='dir: left box: first'>
							<LazyLoad
								height={imgwh}
								placeholder={placeholder}>
								<img
									style={imgStyle}
									data-flex-box='0'
									src={reply.author.avatar_url} />
							</LazyLoad>
							<div data-flex-box='1' className='ui-comment-content'>
								<div className='ui-comment-inline-box'>
									<span>{reply.author.loginname}</span>
									<span className='little'>{index+1}楼</span>
									<span className='little'>{moment(reply.create_at).fromNow()}</span>
								</div>
								<div dangerouslySetInnerHTML={{ __html: reply.content  }} />
							</div>
						</li>
					)}
					{replies.length === 0 ? <li>还没有人回复，赶快抢沙发...</li> : null}
				</ul>
			</div>
		)
	}
}

Comment.propTypes = {
	post: PropTypes.shape({
		replies:PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			author: PropTypes.shape({
				loginname: PropTypes.string.isRequired,
				avatar_url: PropTypes.string.isRequired
			}).isRequired,
			content: PropTypes.string.isRequired,
			ups: PropTypes.array.isRequired,
			create_at: PropTypes.string.isRequired
		}).isRequired).isRequired
	}).isRequired
}
