import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from './gameReducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    game
});

export default createRootReducer