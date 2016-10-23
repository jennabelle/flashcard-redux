import _ from 'underscore';

// demo data's last deck.id is 4
let nextDeckId = 4;

export const DECK_SELECTED = 'DECK_SELECTED';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const ADD_SCORE = 'ADD_SCORE';
export const SHUFFLE_DECK = 'SHUFFLE_DECK';

export const addDeck = (deck) => {

	var id = nextDeckId++;

	return {
		type: ADD_DECK,
		id: id,
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