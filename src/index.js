// ***************************
// ***************************
// *** TODO : ADD THE FF  ****
// ***************************
// ***************************
// ***************************
// react redux router // ok
// redux saga //
// reselect //

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Do not use BrowserRouter as Router
// when creating custom history
const history = createHistory();

const middleware = routerMiddleware(history);

import App from './routes';

import reducers from './store';

// Setup redux store for browser purpose
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
	composeEnhancers(
		applyMiddleware(middleware)
	)
)

const render = Component => {
	const element = (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<AppContainer>
					<Component />
				</AppContainer>
			</ConnectedRouter>
		</Provider>
	);

	ReactDOM.render(
		element,
		document.getElementById('root')
	);
}

render(App);

if (module.hot) {
	module.hot.accept('./routes', () => { render(App) });
}
