// all reducers get 2 params: state, action
// state param is not application state, only the state this reducer is responsible for
import { DECK_SELECTED, ADD_DECK } from '../actions/index';

export default function(state = null, action) {

	switch (action.type) {

		case DECK_SELECTED: 
			return action.payload; // don't mutate state!!
		case ADD_DECK:
			return [ action.payload, ...state ]; // ok to concat, do not push!

	}

	// q: important not to mutate our state?
	return state;
}