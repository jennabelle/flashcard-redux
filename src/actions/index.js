import _ from 'underscore';
import { DECK_SELECTED, ADD_DECK, ADD_CARD, ADD_SCORE } from './types';

// demo data's last deck.id is 4
let nextDeckId = 4;

export const addDeck = (deck) => {

	// add new deck.id
	var id = nextDeckId++;
	deck['id'] = id;

	return {
		type: ADD_DECK,
		payload: deck
	}
}

export const addCard = (card, activeDeckId) => { 
	return {
		type: ADD_CARD,
		payload: { card, activeDeckId }
	}
}

export const setActiveDeck = deckId => {
	return { 
		type: DECK_SELECTED,
		payload: deckId
	}
}

export const setScore = newScore => {
	return {
		type: ADD_SCORE,
		payload: newScore
	}
}