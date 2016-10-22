import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import DecksNew from './containers/add-deck';
import CardsNew from './containers/add-card';

export default (
	<Router history={ browserHistory }>
		<Route path='/' component={ App } />
		<Route path='/decks/new' component={ DecksNew } />
		<Route path='/decks/cards/new' component={ CardsNew } />
	</Router>
);