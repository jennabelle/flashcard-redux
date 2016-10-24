import { ADD_DECK, ADD_CARD } from '../actions/types';
import demoData from '../data/demo_data';

export default function(state = demoData, action) {

	switch (action.type) {

		case ADD_DECK:
			return [ action.payload, ...state ];
		
		case ADD_CARD:

			var newState = state.map( obj => {

				if ( obj.id === action.payload.activeDeck.id ) {
					obj.cards.push(action.payload.card);
				}
				return obj;
			});

			return newState;
	}
	return state;
}
