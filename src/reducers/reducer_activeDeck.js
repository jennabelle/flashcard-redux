// all reducers get 2 params: state, action
// state param is not application state, only the state this reducer is responsible for
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