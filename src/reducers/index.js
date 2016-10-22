import { combineReducers } from 'redux';
import Decks from './reducer_decks';
import ActiveDeck from './reducer_activeDeck';
import MyScore from './reducer_score';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	
  decks: Decks,
  activeDeck: ActiveDeck,
  currentScore: MyScore
});

export default rootReducer;
