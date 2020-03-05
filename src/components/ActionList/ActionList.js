import React from "react";
import PropTypes from "prop-types";
import "./ActionList.scss"

const ActionList = ({
    startDeal,
    addCard,
    clickStay,
    nextRound,
    isNextRoundBtnEnabled,
    isDealBtnEnabled,
    isDrawCardBtnEnabled,
    isStayBtnEnabled
}) => (
  <div className="action-list">
    <ul>
        <li className={isDealBtnEnabled ? 'active': 'disabled'}>
            <button className="button secondary-button" onClick={startDeal}>DEAL</button>
        </li>
        <li className={isDrawCardBtnEnabled ? 'active': 'disabled'}>
            <button className="button secondary-button" onClick={addCard}>ADD CARD</button>
        </li>
        <li className={isStayBtnEnabled ? 'active': 'disabled'}>
            <button className="button secondary-button" onClick={clickStay}>STAY</button>
        </li>
        <li className={isNextRoundBtnEnabled ? 'active': 'disabled'}>
            <button className="button secondary-button" onClick={nextRound}>CONTINUE GAME</button>
        </li>
    </ul>
  </div>
);

ActionList.propTypes = {
  startDeal: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  clickStay: PropTypes.func.isRequired,
  nextRound: PropTypes.func.isRequired,
  isDealBtnEnabled: PropTypes.bool,
  isDrawCardBtnEnabled: PropTypes.bool,
  isStayBtnEnabled: PropTypes.bool,
  isNextRoundBtnEnabled: PropTypes.bool
};

ActionList.defaultProps = {
    isDealBtnEnabled: false,
    isDrawCardBtnEnabled: false,
    isStayBtnEnabled: false,
    isNextRoundBtnEnabled: false
};

export default ActionList;
