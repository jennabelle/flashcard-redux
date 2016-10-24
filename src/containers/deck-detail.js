import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
			<div className='col-md-9 appInstructions'>
				<h4 className='deckTitle'>Select a deck to get started!</h4>
			</div>
		)
	}

	render() {

		if (!this.props.deck) {
			return this.renderInstructions();
		}

		return (
			<MuiThemeProvider>
				<div className='col-md-9 deckDetailPadding'>
					<h3 className='deckTitle'>{ this.props.deck.title }</h3>
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
		deck: state.activeDeck
	};
}

export default connect(mapStateToProps)(DeckDetail);