// all reducers get 2 params: state, action
// state param is not application state, only the state this reducer is responsible for
export default function(state = null, action) {

	switch (action.type) {
		case 'DECK_SELECTED': 
			return action.payload;
	}

	// q: important not to mutate our state?
	return state;
}