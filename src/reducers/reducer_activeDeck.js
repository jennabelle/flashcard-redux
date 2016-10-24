import { DECK_SELECTED, SHUFFLE_DECK } from '../actions/index';

export default function(state = null, action) {

	switch (action.type) {

		case DECK_SELECTED: 
			return action.payload; // don't mutate state!!

		case SHUFFLE_DECK:
			return action.payload;
	}
	return state;
}