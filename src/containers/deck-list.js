import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveDeck } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class DeckList extends Component {

	renderDecks() {

		return this.props.decks.map( deck => {
			return (
				<li 
					key={ deck.title }
					onClick={ () => this.props.selectDeck(deck) }
					className='list-group-item'>
						{ deck.title }
						<span className='badge'>{ deck.cards.length }</span>
				</li>
			)
		});
	}
	render() {

		return (
			<div className='col-md-3'>
				<h2>Flashcards</h2>
				<ul className='list-group'>
					{ this.renderDecks() }
					<Link to='/decks/new' id='addNewDeck'><h2>+</h2></Link>
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
 	return {
 		decks: state.decks
 	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectDeck: setActiveDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);