import React, { Component, PropTypes } from 'react';
import LazyLoad from 'react-lazyload';

export default class CnodeListCell extends Component {
	render() {
		let placeholder = <img data-flex-box="0" style={{ width: 100, height: 100 }} src="http://dummyimage.com/100x100/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image" />;
		return (

			<li
				data-flex='dir: left box: first'
				style={{ padding: '20px 10px', borderBottom:'1px solid #eee', flex: 'row' }}
				onClick={() => this.props.onCellClick(this.props.post.id)}>
				<LazyLoad height={100}
					placeholder={placeholder} >
					<img
						data-flex-box="0"
						style={{ width: 100, height: 100 }}
						src={this.props.post.author.avatar_url} />
				</LazyLoad>
				<div
					data-flex-box="1"
					style={{
						marginLeft: 10
					}}>
					{this.props.post.title}
				</div>
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
