import React, { Component } from 'react';
import { connect } from 'react-redux';
import BetField from '../../components/BetField/BetField';
import PlayerActions from '../PlayerActions/PlayerActions';
import { fetchCards, placeBet, startDeal, addCard } from '../../actions';

class GameLayout extends Component {
	componentDidMount() {
		this.props.shuffleCards();
	}
	render() {
		return (
			<div className="box-section">
				<BetField
					amount={this.props.player.wallet}
					bet={this.props.player.bet}
					placeBet={this.props.placeBet}
					showField={this.props.isPlaying}
				/>
				<PlayerActions />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	player: state.game.player,
	dealer: state.game.dealer,
	isDeckLoaded: state.game.isDeckLoaded,
	isPlaying: state.game.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
	shuffleCards: () => dispatch(fetchCards()),
	placeBet: (betValue) => dispatch(placeBet(betValue)),
	startDeal: () => dispatch(startDeal()),
	addCard: () => dispatch(addCard())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameLayout);
