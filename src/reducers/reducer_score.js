import { ADD_SCORE } from '../actions/index';

export default function(state = 0, action) {

	switch (action.type) {
		
		case ADD_SCORE:
			return action.payload;
	}

	return state;
}