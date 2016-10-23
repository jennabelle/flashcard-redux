import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CardsNew from './add-card';

class DeckDetail extends Component {

	renderDeckDetail() {

		return this.props.deck.cards.map( card => {
			return (
				<li key={ card.question }>{ card.question }</li>
			)
		});
	}
	renderInstructions() {

		return (
			<div className='col-md-9'>
				<h4>Select a deck to get started.</h4>
			</div>
		)
	}
	render() {

		if (!this.props.deck) {
			return this.renderInstructions();
		}

		return (

			<div className='col-md-9'>
				<h3>{ this.props.deck.title }</h3>
				<Link to='/decks/cards/new' className='addNewCard'>Add New Card</Link><Link to='/decks/quiz' className='studyMode'>Quiz Yourself!</Link><br />
				<div>
					<ul>
						{ this.renderDeckDetail() }
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		deck: state.activeDeck
	};
}

export default connect(mapStateToProps)(DeckDetail);