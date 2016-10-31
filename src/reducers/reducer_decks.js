import { ADD_DECK, ADD_CARD } from '../actions/types';
import demoData from '../data/demo_data';
import _ from 'underscore';

export default function(state = demoData, action) {

	switch (action.type) {

		case ADD_DECK:
			return { decks: { ...state.decks, [action.payload.id]: action.payload } };
		
		case ADD_CARD: 

			state.decks[action.payload.activeDeckId].cards.push(action.payload.card);

			return { decks: state.decks };
	}
	return state;
}
