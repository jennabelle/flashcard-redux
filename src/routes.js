import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import DecksNew from './containers/add-deck';

export default (
	<Route path='/' component={ App }>
		<Route path='decks/new' component={ DecksNew } />
	</Route>
);