import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDeck } from '../actions/index';
import { bindActionCreators } from 'redux';

class DeckList extends Component {

	renderDecks() {
		return this.props.decks.map( deck => {
			return (
				<li 
					key={ deck.title }
					onClick={ () => this.props.selectDeck(deck) }
					className='list-group-item'>{ deck.title } 
				</li>
			)
		});
	}
	render() {
		return (
			<ul className='list-group col-sm-2'>
				{ this.renderDecks() }
			</ul>
		)
	}
}
function mapStateToProps(state) {
 	return {
 		decks: state.decks
 	};
}
function mapDispatchToProps(dispatch) {
	// whenever 'selectDeck' is called, you're calling the action creator, and the result should be 
	// passed to all of our reducers
	return bindActionCreators({ selectDeck: selectDeck }, dispatch);
}

// produces a container
// Promote Decklist from a component to a container- it needs to know about this new dispatch method,
// selectDeck. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(DeckList);