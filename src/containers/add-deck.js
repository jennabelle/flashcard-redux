import ReactDOM from 'react-dom';
import DeckList from './deck-list';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class AddDeck extends Component {

	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();

		var node = ReactDOM.findDOMNode(this.refs.deckTitle);
		var newDeck = { title: node.value, cards: [] };

		this.props.addDeck(newDeck);
		browserHistory.push('/');
	}

	render() {
		return (
			<div className='row'>
				<DeckList />
				<div className='col-md-8'>
					<form onSubmit={ event => this.handleSubmit(event) }>
						<h4 className='addNewDeckTitle'>Create A New Deck</h4>
						<div className='form-group'>
							<label>Title</label>
							<input type='text' className='form-control' ref='deckTitle' />
						</div>
						
						<button type='submit' action='submit' className='btn btn-primary'>Submit</button>
					</form>
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
	return bindActionCreators({ addDeck: addDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
