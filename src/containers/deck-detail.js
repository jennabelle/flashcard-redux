import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckDetail extends Component {

	render() {
		
		if (!this.props.deck) {
			return <div>Select a deck to get started.</div>;
		}

		return (
			<div>
				<h3>{ this.props.deck.title }</h3>
				<h5>Add New Card</h5>
				<div>
					<ul>
					{ 
						this.props.deck.cards.map( card => {
							return (
								<li key={ card.question }>{ card.question }</li>
							)
						})
					}
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