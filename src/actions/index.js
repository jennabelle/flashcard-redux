export function selectDeck(deck) {

	// selectDeck is an ActionCreator, it needs to return an action, an object w a type property.
	return {
		type: 'DECK_SELECTED', // needs to be const
		payload: deck
	};
}