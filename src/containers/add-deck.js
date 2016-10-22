import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import { bindActionCreators } from 'redux';

class AddDeck extends Component {

	save() {

	}
	render() {
		return (
			<div>
				Create Deck
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
	return bindActionCreators({ addDeck: addDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);