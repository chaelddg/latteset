import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Settings from './components/settings';
import Menus from './components/menus';

const MainRoutes = () => {
	return (
		<div>
			<ul>
				<li><Link to="/">Settings</Link></li>
				<li><Link to="/menus">Menus</Link></li>
			</ul>
			<hr/>
			<Route exact path="/" component={Settings}/>
			<Route path="/menus" component={Menus}/>
		</div>
	);
};

export default MainRoutes;
