import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './BetField.scss';

const BetField = ({ amount, placeBet, bet, showField }) => {
	const betIp = useRef(null);
	const onButtonClick = () => {
		placeBet(Number(betIp.current.value));
	};

	return (
		<div className="betting-input">
            {!showField && 
			<input type="number" min={bet} ref={betIp} />
            }
            {!showField && 
			<button className="button secondary-button" onClick={onButtonClick}>
				Place Bet
			</button>
            }
			<div className="badge">
				Wallet : <strong>${amount}</strong>
			</div>
			{bet > 0 && (
				<div className="badge">
					Bet : <strong>${bet}</strong>
				</div>
			)}
		</div>
	);
};

BetField.propTypes = {
	amount: PropTypes.number.isRequired,
	bet: PropTypes.number.isRequired,
	placeBet: PropTypes.func.isRequired,
	showField: PropTypes.bool
};

export default BetField;
