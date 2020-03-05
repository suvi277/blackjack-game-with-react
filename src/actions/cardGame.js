import * as ACTION_TYPES from './types';
import { calcCardTotal, checkWinner } from './gameStats';

export const nextRound = () => ({
  type: ACTION_TYPES.NEXT_ROUND
});

export const requestAddCard = ({player, deck}) => ({
  type: ACTION_TYPES.ADD_CARD,
  player,
  deck
});

export const requestStay = () => ({
  type: ACTION_TYPES.CLICK_STAY
});

const requestDrawCards  = ({player, dealer, deck}) => {
  return {
      type: ACTION_TYPES.CARDS_DRAWN,
      player,
      dealer,
      deck
  }
}

const drawCards = (deck, contenderObj, numberOfCards) => {
  let contender = {...contenderObj};

  for (let i = 1; i <= numberOfCards; i++) {
      let card = deck.pop();
      contender.cards.push(card);
  }
  
  contender.count = calcCardTotal(contender.cards);
  return contender;
};

export const startDeal  = () => {
  return (dispatch, getState) => {
      const { deck } = getState().game;
      let player, dealer;

      player = drawCards(deck, getState().game.player, 2);
      dealer = drawCards(deck, getState().game.dealer, 2);
       
      dispatch(requestDrawCards({player, dealer, deck}));
  }
}

export const clickStay  = () => {
  return (dispatch, getState) => {
      let { deck, player, dealer } = getState().game;
      dispatch(requestStay(processStay(player, dealer, deck)));
  }
}

export const addCard  = () => {
  return (dispatch, getState) => {
      const { deck } = getState().game;
      let player;

      player = drawCards(deck, getState().game.player, 1);
       
      dispatch(requestAddCard({player, deck}));
  }
}

const processStay = (player, dealer, deck) => {
  const playerScore = calcCardTotal(player.cards);
  const dealerScore = calcCardTotal(dealer.cards);

  if (dealerScore < 17 && dealerScore < playerScore) {
    const newDealer = {
      ...dealer, 
      cards: [...dealer.cards, deck[0]]
    }
    const newDeck = deck.slice(1);
    return processStay(player, newDealer, newDeck);
  } else {
    const newPlayer = checkWinner(playerScore, dealerScore, player);

    return {
      newPlayer,
      dealer,
      deck,
      playerFinished: true
    };
  }
};