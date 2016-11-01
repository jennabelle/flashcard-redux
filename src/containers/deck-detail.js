import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'underscore';

class DeckDetail extends Component {

	renderDeckDetail() {

		return _.map( this.props.activeDeck.cards, card => {
			return (
				<li key={ card.question }>{ card.question }</li>
			)
		});
	}

	renderInstructions() {

		return (
			<div className='col-md-9 appInstructions'>
				<h2 className='deckTitle'>Select a deck to get started!</h2>
			</div>
		)
	}

	render() { 

		if (!this.props.activeDeck) {
			return this.renderInstructions();
		}

		return (
			<MuiThemeProvider>
				<div className='col-md-9 deckDetailPadding'>
					<h3 className='deckTitle'>{ this.props.activeDeck.title }</h3>
					<Link to='/decks/cards/new' className='addNewCard'>
						<FlatButton backgroundColor='#FFFFFF' label='Add New Card' secondary={ true } />
					</Link>
					<Link to='/decks/quiz' className='studyMode'>
						<FlatButton backgroundColor='#FFFFFF' label='Quiz Yourself!' secondary={ true } />
					</Link>
					<br /><br />
					<div>
						<h4 className='questionsHeader'>Questions:</h4><br />
						<ul>
							{ this.renderDeckDetail() }
						</ul>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps(state) {
	return {
		decks: state.decks.decks,
		activeDeck: state.decks.decks[state.activeDeckId]
	};
}

export default connect(mapStateToProps)(DeckDetail);