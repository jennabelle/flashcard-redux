import _ from 'underscore';
import { DECK_SELECTED, ADD_DECK, ADD_CARD, ADD_SCORE, SHUFFLE_DECK } from './types';

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

export const addCard = (card, activeDeck) => {
	return {
		type: ADD_CARD,
		payload: { card, activeDeck }
	}
}

export const setActiveDeck = deck => {
	return { 
		type: DECK_SELECTED,
		payload: deck
	}
}

export const setScore = newScore => {
	return {
		type: ADD_SCORE,
		payload: newScore
	}
}

export const shuffleDeck = deck => {

	var newDeckShuffled = _.shuffle(deck.cards);
	deck.cards = newDeckShuffled;

	return {
		type: SHUFFLE_DECK,
		payload: deck
	}
}