// all reducers get 2 params: state, action
// state param is not application state, only the state this reducer is responsible for
import { DECK_SELECTED, ADD_DECK } from '../actions/index';

export default function(state = null, action) {

	console.log('before switch! state: ', state);
	switch (action.type) {

		case DECK_SELECTED: 
			return action.payload; // don't mutate state!!
	}

	// q: important not to mutate our state?
	return state;
}