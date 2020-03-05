import React from 'react';
import { connect } from 'react-redux';
import Contender from '../../components/Contender/Contender';

const PlayArea = (props) => {
	return (
		<div>
            {
            props.isPlaying && 
            <div>
                <Contender cardDisplay="Dealer Hand:"
                    cardTotal={props.dealer.count}
                    cards={props.dealer.cards} />
                <Contender cardDisplay="Your Hand:"
                    cardTotal={props.player.count}
                    cards={props.player.cards} />
            </div>
            }
		</div>
	);
};

const mapStateToProps = (state) => ({
        isPlaying: state.game.isPlaying,
        dealer: state.game.dealer,
        player: state.game.player
});

export default connect(mapStateToProps)(PlayArea);
