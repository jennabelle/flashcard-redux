import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Flashcard from './flashcard';
import _ from 'underscore';

class FlashcardList extends Component {

	constructor(props) {
		super(props);

		this.state = { cardIndex: 0, shuffledCards: [] };

		// bind method to component itself - important bc child component, Flashcard, invokes this method
		this.getNextCard = this.getNextCard.bind(this);
	}

	componentWillMount() {

		var newShuffledCards = _.shuffle( this.props.activeDeck.cards );
		this.setState({ shuffledCards: newShuffledCards }); 

	}
   	getNextCard() {

		if ( this.state.cardIndex === this.state.shuffledCards.length - 1 ) {

			// after all cards are shown, navigate to final score page
			browserHistory.push('/decks/quiz/finalScore');
		}
		else {

			// increment card index, show next card
			let nextIndex = this.state.cardIndex + 1;
			this.setState({ cardIndex: nextIndex });
		}
    }
    render() {

      return (
			<div id='flashcardWrapper'>
               <div className='row studyModeScore'>
                  <div className='col-md-6 col-md-offset-3'>
                     <h4 className='scoreHeader'>Score: { this.props.currentScore }</h4>
                     <Flashcard currentCard={ this.state.shuffledCards[this.state.cardIndex] } getNextCard={ this.getNextCard } />
                  </div>
               </div>
         	</div>
      );
   }

};

function mapStateToProps(state) {
   return {
      activeDeck: state.decks.decks[state.activeDeckId],
      currentScore: state.currentScore
   };
}

export default connect(mapStateToProps)(FlashcardList);
