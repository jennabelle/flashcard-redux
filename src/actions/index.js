// deck id starts at 4
let nextDeckId = 4;

export const DECK_SELECTED = 'DECK_SELECTED';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export const addDeck = (deck) => {

	// append new deck to deck list

	return {
		type: ADD_DECK,
		id: nextDeckId++,
		payload: deck
	}
}

export const addCard = (card, deck) => {
	return {
		type: ADD_CARD,
		payload: card, deck
	}
}

export const setActiveDeck = (deck) => {
	return {
		type: DECK_SELECTED,
		payload: deck
	}
}