import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveDeck, addDeck } from '../actions/index';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

class AddDeck extends Component {

	constructor(props) {
		super(props);
	}
	handleSubmit(e) {
		e.preventDefault();

		var node = ReactDOM.findDOMNode(this.refs.deckTitle);
		console.log('node: ', node.value);

		var newDeck = { title: node.value, cards: [] };
		console.log('newDeck: ', newDeck);

		this.props.addDeck(newDeck);
	}
	renderDecks() {
		return this.props.decks.map( deck => {
			return (
				<li 
					key={ deck.title }
					onClick={ () => this.props.selectDeck(deck) }
					className='list-group-item'>{ deck.title } ({ deck.cards.length })
				</li>
			)
		});
	}
	render() {
		return (
			<div className='row'>
				<div className='col-md-4'>
					<h2>Flashcards</h2>
					<ul className='list-group'>
						{ this.renderDecks() }
						<Link to='/decks/new'><h2>+</h2></Link>
					</ul>
				</div>
				<div className='col-md-8'>
					<form onSubmit={ event => this.handleSubmit(event) }>
						<h4>Create A New Deck</h4>
						<div className='form-group'>
							<label>Title</label>
							<input type='text' className='form-control' ref='deckTitle' />
						</div>
						
						<button type='submit' className='btn btn-primary'>Submit</button>
				</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('inside add-deck.js! state: ', state);
 	return {
 		decks: state.decks
 	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectDeck: setActiveDeck, addDeck: addDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);

// export default reduxForm({
// 	form: 'DeckNewForm',
// 	fields: [ 'title', 'cards' ]
// })(AddDeck);

// // user types something in...record it on application state
// state === {
// 	form: {
// 		DeckNewForm: {
// 			title: '...',
// 			cards: []
// 		}
// 	}
// }