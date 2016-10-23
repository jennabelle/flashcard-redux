import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveDeck } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class DeckList extends Component {

	renderDecks() {

		return this.props.decks.map( deck => {
			return (
				<a href='#' 
					key={ deck.title }
					onClick={ () => this.props.selectDeck(deck) }
					className='list-group-item list-group-item-warning'>
						<b>{ deck.title }</b>
						<span className='badge'>{ deck.cards.length }</span>
				</a>
			)
		});
	}
	render() {

		return (
			<div className='col-md-3'>
				<h2 className='text-center'>Flashcards</h2>
				<div className='list-group'>
					{ this.renderDecks() }
					<li className='list-group-item list-group-item-warning'>
					<Link to='/decks/new' id='addNewDeck'><b>+</b>   Add New Deck</Link></li>
				</div>
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