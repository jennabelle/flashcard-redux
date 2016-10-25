/* =============================
	test for src/actions/index.js
	============================= */

import { expect } from '../test_helper';
import { DECK_SELECTED, ADD_DECK, ADD_CARD, ADD_SCORE, SHUFFLE_DECK } from '../../src/actions/types';
import { addDeck, addCard, setActiveDeck, setScore, shuffleDeck } from '../../src/actions';

describe('actions', () => {

	describe('addDeck', () => {

		it('has the correct type', () => {
			const deck = { title: 'Test', cards: [] };
			const action = addDeck(deck);
			expect(action.type).to.equal(ADD_DECK);
		});

		// TODO: This isnt working
		// it('has the correct payload', () => { 
			// const action = addDeck({ id: 5, title: 'test title', cards: [] });
			// expect(action.payload).to.equal({ id: 5, title: 'test title', cards: [] });
		// });
	});
})