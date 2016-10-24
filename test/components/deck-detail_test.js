import { renderComponent , expect } from '../test_helper';
import DeckDetail from '../../src/containers/deck-detail';

describe('Deck Detail', () => {

	let component;

	beforeEach( () => {
		component = renderComponent(DeckDetail);
	});

	it('renders DeckDetail component', () => {
		expect(component).to.exist;
	});
	it('shows a deck title', () => {
		expect(component.find('.deckTitle')).to.exist;
	});

});
