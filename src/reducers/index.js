import { combineReducers } from 'redux';
import Decks from './reducer_decks';
import ActiveDeck from './reducer_activeDeck';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	
  decks: Decks,
  activeDeck: ActiveDeck,
  form: formReducer
});

export default rootReducer;
