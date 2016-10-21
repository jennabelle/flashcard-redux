import { combineReducers } from 'redux';
import Decks from './reducer_decks';
import ActiveDeck from './reducer_activeDeck';

const rootReducer = combineReducers({

  decks: Decks,
  activeDeck: ActiveDeck
});

export default rootReducer;
