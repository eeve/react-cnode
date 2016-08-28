import React, { Component, PropTypes } from 'react';
import './DetailMain.less';

export default class DetailMain extends Component {

	componentWillMount() {

	}

	render() {
		const { post } = this.props;
		return (
			<div className='ui-detail'>
				<h1 className='ui-detail-title'>{post.title}</h1>
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
