import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

class AddDeck extends Component {

	save() {

	}
	render() {
		return (
			<form>
				<h3>Create A New Deck</h3>
				<div className='form-group'>
					<label>Title</label>
					<input type='text' className='form-control' />
				</div>
				
				<button type='submit' className='btn btn-primary'></button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'DeckNewForm',
	fields: [ 'title', 'cards' ]
})(AddDeck);

// // user types something in...record it on application state
// state === {
// 	form: {
// 		DeckNewForm: {
// 			title: '...',
// 			cards: []
// 		}
// 	}
// }