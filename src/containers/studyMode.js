import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { setScore, shuffleDeck } from '../actions/index';

class StudyMode extends Component {

	constructor(props) {
		super(props);

		this.props.shuffleDeck(this.props.deck);
		this.state = { index: 0, current: this.props.deck.cards[0] };
		// this.getOneCard();
	}
	getOneCard() {
		this.setState({ current: this.props.deck.cards[ this.state.index ] });
		this.setState({ index: this.state.index++ });
	}
	render() {

		return (
			<div>
				{ this.state.current.question } <br />
				<button type='submit' className='btn btn-primary'>Answer</button>
			</div>
		);
	}	
}

function mapStateToProps(state) {
 	return {
 		deck: state.activeDeck
 	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setScore: setScore, shuffleDeck: shuffleDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyMode);