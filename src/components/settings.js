import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { makeSelectMenus } from './selectors';

import * as menuActions from '../store/actions';

class Settings extends Component {
	constructor(props){
		super(props);

		this.state = {
			menu_title: ''
		};

		this.handleChangeMenuTitle = this.handleChangeMenuTitle.bind(this);
		this.handleSaveMenuTitle = this.handleSaveMenuTitle.bind(this);
	}

	componentDidMount() {
		axios.get('//localhost:3000/api/menus')
			.then(response => {
				this.props.actions.setMenus(response.data);
			});
	}

	handleChangeMenuTitle({ target }) {
		this.setState({ menu_title: target.value });
	}

	handleSaveMenuTitle(e) {
		e.preventDefault();
		this.props.actions.addMenu(this.state.menu_title);
	}

	render() {
		const { menu_title } = this.state;
		const { menus } = this.props;
		console.log('menus',menus);
		return (
			<div>
				<h1>Settings</h1>
				<form>
					<input type="text" value={menu_title} onChange={this.handleChangeMenuTitle}/>
					<button type="submit" onClick={this.handleSaveMenuTitle}>Save</button>
				</form>
				<ul>
					{/* {
						menus.get('menus').map(menu => (
							<li key={menu.get('id')}>{menu.get('type')}</li>
						))
					} */}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		menus: makeSelectMenus(state)
	};
};

function mapDispatchToProps(dispatch, ownProps) {
	return {
		actions: bindActionCreators(menuActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
