/**
 * Created by jilion.chen on 2016/7/7.
 */
import React from 'react';
import { Router, Route } from 'react-router'
import { render } from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory();
render((<Router history={history}>
		{routes}
	</Router>),
	document.getElementById('app')
);
