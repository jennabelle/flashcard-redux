import { ADD_DECK, ADD_CARD } from '../actions/types';
import demoData from '../data/demo_data';
import _ from 'underscore';

export default function(state = demoData, action) {

	switch (action.type) {

		case ADD_DECK:
			return { ...state.decks, [ action.id ]: action.payload };
		
		case ADD_CARD:

			var newState = _.map( state.decks, (val, key) => {

				if ( action.payload.activeDeck.id === val.id ) {

					val.cards.push(action.payload.card); // QUESTION: Is push ok instead of spread operator?
					// [ ...val.cards, action.payload.card ];
				}
				return val;
			});
			
			return newState;
	}
	return state;
}
