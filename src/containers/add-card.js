import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';
import { bindActionCreators } from 'redux';

class AddCard extends Component {

	save() {

	}
	render() {
		return (

		)
	}
}

function mapStateToProps(state) {
 	return {
 		deck: state.activeDeck
 	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addCard: addCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);