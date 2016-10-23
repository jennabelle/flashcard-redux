import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { setScore, shuffleDeck } from '../actions/index';

class StudyMode extends Component {

	constructor(props) {
		super(props);

		this.props.shuffleDeck(this.props.deck);
		this.state = { index: 0, current: this.props.deck.cards[0], showAnswer: false };
	}
	getNextCard() {

		console.log('this.state.index: ', this.state.index);
		
		if ( this.state.index === this.props.deck.cards.length ) {
			browserHistory.push('/');
		}
		else {
			this.setState({ current: this.props.deck.cards[ this.state.index ] });
			this.setState({ index: this.state.index + 1 });
		}
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
		this.hideAnswer();
	}
	render() {

		return (
			<div>
				<div>
					{ this.props.currentScore }
				</div>
				<br />
				{ 
					this.state.showAnswer ? 
					<div>
						{ this.state.current.answer }<br />
						<button type='submit' className='btn btn-primary' onClick={ event => this.addScore() }>Correct</button>
						<button type='submit' className='btn btn-primary' onClick={ event => this.getNextCard() }>Incorrect</button>
					</div> 
					: 
					<div>{ this.state.current.question }<br /><button type='submit' className='btn btn-primary' onClick={ event => this.showAnswer() }>Show Answer</button></div> 
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