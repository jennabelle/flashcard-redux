import React, { Component } from 'react';
import FlipCard from 'react-flipcard';

export default class Flashcard extends Component {

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
 
   render() { console.log('inside Flashcard component! this.props.currentCard: ', this.props.currentCard);

      return (
         <div>
            {/*
               The `flipped` attribute indicates whether to show the front, or the back, with `true` meaning show the back.
            */}
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
      );
   }
}