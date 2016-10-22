import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app';
import DecksNew from './containers/add-deck';

export default (
	<Router history={ hashHistory }>
		<Route path='/' component={ App } />
		<Route path='/decks/new' component={ DecksNew } />
	</Router>
);