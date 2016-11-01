import { combineReducers } from 'redux';
import Decks from './reducer_decks';
import ActiveDeckId from './reducer_activeDeck';
import MyScore from './reducer_score';

const rootReducer = combineReducers({
  decks: Decks,
  activeDeckId: ActiveDeckId,
  currentScore: MyScore
});

export default rootReducer;
