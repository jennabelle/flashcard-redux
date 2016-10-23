import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { setScore, shuffleDeck } from '../actions/index';

class StudyMode extends Component {

	constructor(props) {
		super(props);

		// shuffle current deck's cards
		this.props.shuffleDeck( this.props.deck );
		this.state = { cardIndex: 0, currentDeck: this.props.deck, showAnswer: false };
	}
	getNextCard() {

		if ( this.state.cardIndex === this.state.currentDeck['cards'].length - 1 ) {

			// after all cards are shown, reset score, navigate to final score page
			browserHistory.push('/decks/quiz/finalScore');
		}
		else {

			// increment card index, show next card
			let temp = this.state.cardIndex + 1;
			this.setState({ cardIndex: temp });
		}

		this.hideAnswer();
	}
	showAnswer() {

		this.setState({ showAnswer: true });
	}
	hideAnswer() {

		this.setState({ showAnswer: false });
	}
	addScore() {

		var newScore = this.props.currentScore + 1;

		this.props.setScore( newScore );
		this.getNextCard();
	}
	render() {

		return (
			<div>
				<div className='row'>
					<h4>Score: </h4>{ this.props.currentScore }
				</div>
				<br />
				{ 
					this.state.showAnswer 

					? 

					<div>
						{ this.state.currentDeck.cards[ this.state.cardIndex ]['answer'] }<br />
						<button type='submit' className='btn btn-primary' onClick={ event => this.addScore() }>
							Correct
						</button>
						<button type='submit' className='btn btn-primary' onClick={ event => this.getNextCard() }>
							Incorrect
						</button>
					</div> 

					:

					<div>
						{ this.state.currentDeck.cards[ this.state.cardIndex ]['question'] }<br />
						<button type='submit' className='btn btn-primary' onClick={ event => this.showAnswer() }>
							Show Answer
						</button>
					</div> 
				}
			</div>
		);
	}	
}

function mapStateToProps(state) {
 	return {
 		deck: state.activeDeck,
 		currentScore: state.currentScore
 	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setScore: setScore, shuffleDeck: shuffleDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyMode);

