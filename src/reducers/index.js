import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import ActiveDeckReducer from './reducer_activeDeck';

const rootReducer = combineReducers({
  decks: DecksReducer,
  active_deck: ActiveDeckReducer
});

export default rootReducer;
