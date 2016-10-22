// Q: why isn't state and action passed in here?
import { ADD_DECK } from '../actions/index';

const demoData = [
		{
			id: 1,
			title: 'Test Your React.js Knowledge!',
			cards: [
				{ question: 'What is your name?', answer: 'jenna' },
				{ question: 'What is a smart component in Redux?', answer: 'A smart component is a component with direct access to the state.' },
				{ question: 'What is a container in Redux?', answer: 'A container is a component with direct access to state.' }
			]
		},
		{
			id: 2,
			title: 'How much Redux do you know?',
			cards: [
				{ question: 'What is your name?', answer: 'jenna' },
				{ question: 'What is a smart component in Redux?', answer: 'A smart component is a component with direct access to the state.' },
				{ question: 'What is a container in Redux?', answer: 'A container is a component with direct access to state.' }
			]
		},
		{
			id: 3,
			title: 'Computer Science 101',
			cards: [
				{ question: 'What is your name?', answer: 'jenna' },
				{ question: 'What is a smart component in Redux?', answer: 'A smart component is a component with direct access to the state.' },
				{ question: 'What is a container in Redux?', answer: 'A container is a component with direct access to state.' }
			]
		},
		{
			id: 4,
			title: 'Computer Science 201',
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
	}
	
	return state;
}
