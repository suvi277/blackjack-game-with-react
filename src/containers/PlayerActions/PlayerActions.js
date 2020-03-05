import { connect } from 'react-redux';
import ActionList from '../../components/ActionList/ActionList';
import {
	isDealBtnEnabled,
	isDrawCardBtnEnabled,
	isStayBtnEnabled,
	isNextRoundBtnEnabled,
	addCard,
	startDeal,
	clickStay,
	nextRound
} from '../../actions';

const mapStateToProps = (state) => ({
	isDealBtnEnabled: isDealBtnEnabled(state.game),
	isDrawCardBtnEnabled: isDrawCardBtnEnabled(state.game),
	isStayBtnEnabled: isStayBtnEnabled(state.game),
	isNextRoundBtnEnabled: isNextRoundBtnEnabled(state.game)
});

const mapDispatchToProps = (dispatch) => ({
	addCard: () => dispatch(addCard()),
	startDeal: () => dispatch(startDeal()),
	clickStay: () => dispatch(clickStay()),
	nextRound: () => dispatch(nextRound())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionList);
