import React from 'react';
import { connect } from 'react-redux';
import { GAME_STATS, gameResult } from '../../actions';
import './StatsLayout.scss';

const Stats = ({ readyToDeal, winner, isPlaying }) => {
	return (
		<div className="alert-section">
			{!readyToDeal && winner === GAME_STATS.NOT_FINISHED && <h1>Place Bet to begin play </h1>}
			{readyToDeal && !isPlaying && <h1>Great, now click on Deal button to draw cards</h1>}
			{isPlaying && winner === GAME_STATS.NOT_FINISHED && <h1>Yell, Game is on</h1>}
			{winner === GAME_STATS.DEALER && <h1>Game Over! Dealer Won</h1>}
			{winner === GAME_STATS.PLAYER && <h1>Congratulations! You Won</h1>}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isPlaying: state.game.isPlaying,
	readyToDeal: state.game.player.bet >= 5,
	winner: gameResult(state.game)
});

export default connect(mapStateToProps)(Stats);
