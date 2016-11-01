import React, { Component } from 'react';
import { setScore } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class FinalScore extends Component {

	renderScoreboardImg() {

		return <img className='img-thumbnail scoreboard-image' alt='scoreboard-image' src='http://www.dazzleappz.com/wp-content/uploads/2014/04/iOS-Simulator-Screen-shot-Apr-13-2014-10.01.20-AM.png' />;
	}
	renderHomeButton() {

		return <Link to='/'><button type='Submit' className='btn btn-primary' onClick={ event => this.resetScore() }>Home</button></Link>;
	}
	resetScore() {

		this.props.setScore( 0 );
	}
	render() {

		return (
			<div>
				<div className='row'>
					<div className='col-md-6 col-md-offset-3 finalScorePadding text-center'>
						<h1>Your Final Score:<br /><br />
						{ this.props.currentScore }
						</h1><br />
						{ this.renderScoreboardImg() }
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 col-md-offset-3 text-center'>
						{ this.renderHomeButton() }
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
 	return {
 		currentScore: state.currentScore
 	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setScore: setScore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore);