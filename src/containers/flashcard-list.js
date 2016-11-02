import React, { Component } from 'react';
import { setScore, shuffleDeck } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Flashcard from './flashcard';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class FlashcardList extends Component {

	constructor(props) {
		super(props);

		this.state = { cardIndex: 0, currentDeck: this.props.activeDeck };

		this.getNextCard = this.getNextCard.bind(this);
	}

	shuffleDeck() {
		this.props.shuffleDeck( this.props.activeDeck );
	}

   	getNextCard() {

		if ( this.state.cardIndex === this.state.currentDeck['cards'].length - 1 ) {

			// after all cards are shown, navigate to final score page
			browserHistory.push('/decks/quiz/finalScore');
		}
		else {

			// increment card index, show next card
			let nextIndex = this.state.cardIndex + 1;
			this.setState({ cardIndex: nextIndex, isFlipped: false });
		}
   }

   addScore() {

      var newScore = this.props.currentScore + 1;

      this.props.setScore( newScore );
      this.getNextCard();
   }

   render() {

      return (
         <MuiThemeProvider>
            <div id='flashcardWrapper'>
               <div className='row studyModeScore'>
                  <div className='col-md-6 col-md-offset-3'>
                     <h4 className='scoreHeader'>Score: { this.props.currentScore }</h4>
                     <Flashcard currentCard={ this.props.activeDeck.cards[this.state.cardIndex] } />
                  </div>
               </div>
               {
                  this.state.isFlipped 

                  ? 
                     <div className='row correctIncorrectBtnPadding'>
                        <div className='col-md-12 text-center'>
                           <FlatButton backgroundColor='#FFFFFF' className='incorrectBtn' label='I Was Wrong!' secondary={ true } onClick={ event => this.getNextCard() } />
                           <FlatButton backgroundColor='#FFFFFF' className='correctBtn' label='Correct!' secondary={ true } onClick={ event => this.addScore() } />
                        </div>
                     </div>

                  : null
               }
            </div>
         </MuiThemeProvider>
      );
   }

};

function mapStateToProps(state) {
   return {
      activeDeck: state.decks.decks[state.activeDeckId],
      currentScore: state.currentScore
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ setScore: setScore, shuffleDeck: shuffleDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardList);
