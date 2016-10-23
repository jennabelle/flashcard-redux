import { ADD_DECK, ADD_CARD } from '../actions/index';

const demoData = [
		{
			id: 1,
			title: 'React Fundamentals',
			cards: [
				{ question: 'What is your name?', answer: 'jenna' },
				{ question: 'What is a smart component in Redux?', answer: 'A smart component is a component with direct access to the state.' },
				{ question: 'What is a container in Redux?', answer: 'A container is a component with direct access to state.' }
			]
		},
		{
			id: 2,
			title: 'Getting Started With Redux',
			cards: [
				{ question: 'What is your name?', answer: 'jenna' },
				{ question: 'What is a smart component in Redux?', answer: 'A smart component is a component with direct access to the state.' },
				{ question: 'What is a container in Redux?', answer: 'A container is a component with direct access to state.' }
			]
		},
		{
			id: 3,
			title: 'CS 101 - Data Structures',
			cards: [
				{ question: 'What is your name?', answer: 'jenna' },
				{ question: 'What is a smart component in Redux?', answer: 'A smart component is a component with direct access to the state.' },
				{ question: 'What is a container in Redux?', answer: 'A container is a component with direct access to state.' }
			]
		},
		{
			id: 4,
			title: 'CS 201 - Algorithms',
			cards: [
				{ question: 'What is your name?', answer: 'jenna' },
				{ question: 'What is a smart component in Redux?', answer: 'A smart component is a component with direct access to the state.' },
				{ question: 'What is a container in Redux?', answer: 'A container is a component with direct access to state.' }
			]
		}
];

export default function(state = demoData, action) {

	switch (action.type) {

		case ADD_DECK:
			return [ action.payload, ...state ]; // ok to concat, do not push!

		case ADD_CARD:

			var newState = state.map( obj => {
				if ( obj.id === action.payload.activeDeck.id ) {
					obj.cards.push(action.payload.card);
				}
				return obj;
			});

			return newState;
	}

	return state;
}
