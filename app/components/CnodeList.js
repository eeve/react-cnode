import React, { Component, PropTypes } from 'react';
import CnodeListCell from './CnodeListCell';

export default class CnodeList extends Component {
	render() {
		return (
			<ul style={{ listStyle: 'none' }}>
				{this.props.posts.map((post, index) =>
					<CnodeListCell
						key={index}
						post={post}
						onCellClick={this.props.onCellClick} />
				)}
			</ul>
		)
	}
}

CnodeList.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		last_reply_at: PropTypes.string.isRequired,
		author: PropTypes.shape({
			loginname: PropTypes.string.isRequired,
			avatar_url: PropTypes.string.isRequired
		}).isRequired
	}).isRequired).isRequired,
	onCellClick: PropTypes.func.isRequired
}

