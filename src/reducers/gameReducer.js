import * as ACTION_TYPES from '../actions/types';

const initialState = {
  player: {
    cards: [],
    count: 0,
    wallet: 100,
    bet: 0
  },
  originalDeck: [],
  dealer: {
    cards: [],
    count: 0
  },
  deck: [],
  playerFinished: false,
  isDeckLoaded: false,
  isPlaying: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
      case ACTION_TYPES.REQUEST_CARDS:
      return {
          ...state,
          originalDeck: action.data,
          deck: action.data,
          isDeckLoaded: true
      };
      case ACTION_TYPES.PLACE_BET:
      return {
          ...state,
          player: {
            ...state.player,
            wallet: state.player.wallet - action.betValue,
            bet: action.betValue
          }
      };
      case ACTION_TYPES.CARDS_DRAWN:
      return {
          ...state,
          player: {
            ...state.player,
            cards: action.player.cards,
            count: action.player.count
          },
          dealer: {
            ...state.dealer,
            cards: action.dealer.cards,
            count: action.dealer.count

          },
          deck: action.deck,
          isPlaying: true,
          playerFinished: false
      };
      case ACTION_TYPES.ADD_CARD:
      return {
          ...state,
          player: {
            ...state.player,
            cards: action.player.cards,
            count: action.player.count
          },
          deck: action.deck,
          playerFinished: false
      };
      case ACTION_TYPES.NEXT_ROUND:
      return {
          ...state,
          player: {
            cards: [],
            count: 0,
            wallet: state.player.wallet,
            bet: 0
          },
          dealer: {
            cards: [],
            count: 0
          },
          deck: state.originalDeck,
          playerFinished: false,
          isPlaying: false
      };
    default:
      return state;
  }
}