import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {

	let component;

	beforeEach( () => {
		component = renderComponent(App);
	});

	it('renders App component', () => {
		expect(component).to.exist;
	});
	it('shows a deck list', () => {
		expect(component.find('#addNewDeck')).to.exist;
		expect(component.find('.col-md-3')).to.exist;
		expect(component.find('.badge')).to.exist;
	});
	it('shows a deck detail', () => {
		expect(component.find('.deckTitle')).to.exist;
		expect(component.find('.col-md-9')).to.exist;
	});

});
