import React, { Component } from 'react';
import './Loading.less';

export default class Loading extends Component {
	render() {
		const text = this.props.text || '加载中...';
		return (
			<div className='ui-loading'>
				<div className='ui-loading-message'>
					<div className='ui-loading-inner'>
						<div className="spinner"></div>
						<span>{text}</span>
					</div>
				</div>
			</div>
		)
	}
}
