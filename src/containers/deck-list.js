import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveDeck } from '../actions/index';
import { bindActionCreators } from 'redux';

class DeckList extends Component {

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
			<div>
				<h2>Flashcard</h2>
				<ul className='list-group col-sm-3'>
					{ this.renderDecks() }
					<h2>+</h2>
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