import React, { Component } from 'react';

class MenuItem extends Component {
	render() {
		const { type } = this.props;
		return (
			<li>{type}</li>
		);
	}
}

export default MenuItem;
