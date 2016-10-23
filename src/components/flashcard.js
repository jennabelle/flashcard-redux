import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { setScore, shuffleDeck } from '../actions/index';
import FlipCard from 'react-flipcard';

class Flashcard extends Component {

   constructor(props) {

      super(props);

      // shuffle current deck's cards
      this.props.shuffleDeck( this.props.deck );
      this.state = { isFlipped: false, cardIndex: 0, currentDeck: this.props.deck };
   }

   showBack() {

      this.setState({ isFlipped: true });
   }

   showFront() {

      this.setState({ isFlipped: false });
   }

   handleOnFlip(flipped) {

      if (flipped) {
         this.refs.backButton.getDOMNode().focus();
      }
   }
 
   handleKeyDown(e) {

      if (this.state.isFlipped && e.keyCode === 27) {
         this.showFront();
      }
   }

   addScore() {

      var newScore = this.props.currentScore + 1;

      this.props.setScore( newScore );
      this.getNextCard();
   }

   getNextCard() {

      if ( this.state.cardIndex === this.state.currentDeck['cards'].length - 1 ) {

         // after all cards are shown, navigate to final score page
         browserHistory.push('/decks/quiz/finalScore');
      }
      else {

         // increment card index, show next card
         let temp = this.state.cardIndex + 1;
         this.setState({ cardIndex: temp });
      }
   }
 
   render() {

      return (
         <div className='row studyModeScore'>    
            <div className='col-md-6 col-md-offset-3'>

              {/*
                The `flipped` attribute indicates whether to show the front,
                or the back, with `true` meaning show the back.
              */}
               <FlipCard
                  disabled={ true }
                  flipped={ this.state.isFlipped }
                  onFlip={ event => this.handleOnFlip() }
                  onKeyDown={ event => this.handleKeyDown() }
                  >
                     <div>
                        <button type="button" className='flipcard' onClick={ event => this.showBack() }>
                           <h3 className='QApadding'>What is a container in Redux?</h3>
                           <div><small>Back</small></div>
                        </button>
                     </div>
                     <div>
                        <button type="button" className='flipcard' ref="backButton" onClick={ event => this.showFront() }>
                           <div><small>Front</small></div>
                        </button>
                     </div>
               </FlipCard>
               {
                  this.state.isFlipped 

                  ? 
                     <div>
                        <button type='submit' className='btn btn-primary incorrectBtn' onClick={ event => this.getNextCard() }>
                           I Was Wrong!
                        </button>
                        <button type='submit' className='btn btn-primary correctBtn' onClick={ event => this.addScore() }>
                           Correct!
                        </button>
                     </div>

                  :

                  <div></div>
               }
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);

