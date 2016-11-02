import React, { Component } from 'react';
import { setScore } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipCard from 'react-flipcard';

class Flashcard extends Component {

   constructor(props) {
      super(props);

      this.state = { isFlipped: false };
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

      // reset to show question of next card
      this.setState({ isFlipped: false }); 

      // invoke method from flashcard-list.js
      this.props.getNextCard(); 
   }
 
   render() {

      return (
         <div className='col-md-12'>
            {/*
               The `flipped` attribute indicates whether to show the front, or the back, with `true` meaning show the back.
            */}
            <div className='col-md-12 col-md-offset-4'>
            <FlipCard 
               disabled={ true }
               flipped={ this.state.isFlipped }
               onFlip={ event => this.handleOnFlip() }
               onKeyDown={ event => this.handleKeyDown() }>
               <div>
                  <button type="button" className='flipcard img-rounded' onClick={ event => this.showBack() }>
                     <h3 className='QApadding'>
                        { this.props.currentCard['question'] }
                     </h3>
                     <div><small>Back</small></div>
                  </button>
               </div>
               <div>
                  <button type="button" className='flipcard img-rounded' ref="backButton" onClick={ event => this.showFront() }>
                     <h3 className='QApadding'>
                        { this.props.currentCard['answer'] }
                     </h3>
                     <div><small>Front</small></div>
                  </button>
               </div>
            </FlipCard>
            </div>

               {
                  this.state.isFlipped 

                  ? 
                     <div className='correctIncorrectBtnPadding'>
                        <button className='btn btn-default incorrectBtn' onClick={ event => this.props.getNextCard() }>I Was Wrong!</button>
                        <button className='btn btn-default correctBtn' onClick={ event => this.addScore() }>Correct!</button>
                     </div>

                  : null
               }

         </div>
      );
   }
};

function mapStateToProps(state) {
   return {
      currentScore: state.currentScore
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ setScore: setScore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);

