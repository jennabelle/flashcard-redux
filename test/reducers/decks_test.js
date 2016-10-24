import { expect } from '../test_helper';
import decksReducer from '../../src/reducers/reducer_decks';
import { ADD_DECK, ADD_CARD } from '../../src/actions/types';
import demoData from '../../src/data/demo_data';

describe('Decks Reducer', () => {

	// TODO: check demoData
	// it('handles action with unknown type', () => {
		// expect(decksReducer()).to.be.instanceof(Array);
		// expect(decksReducer()).to.be.eql(demoData);
	// });

	// TODO: check demoData
	// it('handles action of type ADD_DECK', () => {
	// 	const data = { type: ADD_DECK, payload: { id: 5, title: 'test', cards: [] }};
	// 	expect(decksReducer()).to.eql();
	// });
});