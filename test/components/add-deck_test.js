import { renderComponent , expect } from '../test_helper';
import AddDeck from '../../src/containers/add-deck';
import DeckList from '../../src/containers/deck-list';

describe('Add Deck', () => {

	let component;

	beforeEach( () => {
		component = renderComponent(AddDeck);
	});

	it('renders AddDeck component', () => {
		expect(component).to.exist;
	});
	it('has the correct class', () => {		
		expect(component.find('.col-md-8')).to.exist;
	});
	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('creating a new deck', () => {

		beforeEach( () => {
			component.simulate('submit');
		});

		it('shows a deck list', () => {
			expect(DeckList).to.exist;
		});

		// TODO: check reducer to make sure new deck was added!

	});

	describe('entering some text', () => {

		beforeEach( () => {
			component.find('input').simulate('change', 'new comment');
		});

		it('has an input field', () => {
			expect(component.find('input')).to.exist;
		});
		it('shows that text is in the input field', () => {
			expect(component.find('input')).to.have.value('new comment');
		});
	});
});
