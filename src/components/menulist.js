import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from './menuitem';

class MenuList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menus: []
		};
	}
	componentDidMount() {
		axios.get('//localhost:3000/api/menus')
			.then(response => {
				this.setState({ menus: response.data });
			});
	}
	render() {
		const { menus } = this.state;
		return (
			<ul>
				{ menus.length ? menus.map(item => <MenuItem key={item.id} type={item.type}/>) : null }
			</ul>
		);
	}
}

export default MenuList;
