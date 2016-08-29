import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import './CnodeListCell.less';

export default class CnodeListCell extends Component {
	render() {
		const post = this.props.post;
		let imgwh = '1rem';
		let imgStyle = { width: imgwh, height: imgwh, borderRadius: '50%' };
		let placeholderImgSrc = `http://dummyimage.com/100x100/4d494d/686a82.gif`;
		let placeholder = <img data-flex-box="0" style={imgStyle} src={placeholderImgSrc} alt='logo' />;

		return (
			<li
				className='ui-cnode-list-cell'
				onClick={() => this.props.onCellClick(post.id)}>
				<Link
					to={`/detail/${post.id}`}
					data-flex='dir: left box: first'>
					<LazyLoad
						height={imgwh}
						offset={500}
						placeholder={placeholder}>
						<img
							data-flex-box='0'
							style={imgStyle}
							src={post.author.avatar_url}
						/>
					</LazyLoad>
					<div
						data-flex-box='1'
						className='ui-cnode-list-cell-title'>
						{post.title}
					</div>
				</Link>
			</li>
		)
	}
}

CnodeListCell.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		last_reply_at: PropTypes.string.isRequired,
		author: PropTypes.shape({
			loginname: PropTypes.string.isRequired,
			avatar_url: PropTypes.string.isRequired
		}).isRequired
	}).isRequired,
	onCellClick: PropTypes.func.isRequired
}
