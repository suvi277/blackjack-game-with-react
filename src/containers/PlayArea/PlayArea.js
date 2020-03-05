import React from 'react';
import { connect } from 'react-redux';
import Contender from '../../components/Contender/Contender';

const PlayArea = (props) => {
	return (
		<div>
			{props.isPlaying && (
				<div>
					<div className="row">
						<div className="col-6">
							<Contender
								cardDisplay="Your Hand:"
								cardTotal={props.player.count}
								cards={props.player.cards}
							/>
						</div>
						<div className="col-6">
                            This is not working, currently in progress
							<Contender
								cardDisplay="Computer Hand:"
								cardTotal={props.player.count}
								cards={props.player.cards}
							/>
						</div>
					</div>
					<Contender cardDisplay="Dealer Hand:" cardTotal={props.dealer.count} cards={props.dealer.cards} />
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isPlaying: state.game.isPlaying,
	dealer: state.game.dealer,
	player: state.game.player
});

export default connect(mapStateToProps)(PlayArea);
