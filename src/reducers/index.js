import { combineReducers } from 'redux';
import Decks from './reducer_decks';
import ActiveDeck from './reducer_activeDeck';
import MyScore from './reducer_score';

const rootReducer = combineReducers({
	
  decks: Decks,
  activeDeck: ActiveDeck,
  currentScore: MyScore
});

export default rootReducer;
