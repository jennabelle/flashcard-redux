import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckDetail extends Component {

	renderDeckDetail() {
		return this.props.deck.cards.map( card => {
			return (
				<li key={ card.question }>{ card.question }</li>
			)
		});
	}
	render() {

		if (!this.props.deck) {
			return <h4>Select a deck to get started.</h4>;
		}

		return (
			<div>
				<h3>{ this.props.deck.title }</h3>
				<b>Total Cards: </b>{ this.props.deck.cards.length } <span>Quiz Yourself!</span><br /><br />
				<h5>Add New Card</h5>
				<div>
					<ul>
						{ this.renderDeckDetail() }
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		deck: state.activeDeck
	};
}

export default connect(mapStateToProps)(DeckDetail);