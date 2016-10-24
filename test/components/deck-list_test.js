import { renderComponent , expect } from '../test_helper';
import DeckList from '../../src/containers/deck-list';
import demoData from '../../src/data/demo_data';

describe('Deck List', () => {

	let component;

	// TODO: Change demo data to object instead of array!
	beforeEach( () => { 
		// component = renderComponent(DeckList, null, demoData);
		component = renderComponent(DeckList);
	});

	it('renders DeckList component', () => {
		expect(component).to.exist;
	});

	// TODO: check demoData
	// it('shows an LI for each deck', () => {
		// expect(component.find('li').length).to.equal(4);
	// });

	// TODO: check demoData
	// it('shows each deck that is provided', () => {
		// expect(component).to.contain('New Deck');
		// expect(component).to.contain('Other New Deck');
	// });
	it('shows add new deck link', () => {
		expect(component.find('#addNewDeck')).to.exist;
	});
	it('shows badge icon with number of cards', () => {
		expect(component.find('.badge')).to.exist;
	});

});
