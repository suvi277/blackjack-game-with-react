export const GAME_STATS = {
  PLAYER: "PLAYER",
  DEALER: "DEALER",
  NOT_FINISHED: "NOT_FINISHED"
};
const hasCardsDrawn = state => {
  return state.player.cards.length > 0;
};
const isGameOver = state => {
  return gameResult(state) !== GAME_STATS.NOT_FINISHED;
};

export const calcCardTotal = (cards) => {
  let count = Object.keys(cards).reduce(function(total, card) {
      let cardValue = cards[card].value
      if (cardValue === 'JACK' || cardValue === 'QUEEN' || cardValue === 'KING') {
          return total + 10;
      }
      else if (cardValue === 'ACE') {
          return (total + 11 <= 21) ? total + 11 : total + 1;
      } else {
          return total +  Number(cardValue);
      }
 }, 0);
 return count;
};

export const gameResult = state => {
  const playerScore = calcCardTotal(state.player.cards);

  if (playerScore > 21) {
    return GAME_STATS.DEALER;
  }

  if (!state.playerFinished) {
    return GAME_STATS.NOT_FINISHED;
  }

  const dealerScore = calcCardTotal(state.dealer.cards);

  if (playerScore > dealerScore || dealerScore > 21) {
    return GAME_STATS.PLAYER;
  }

  if (dealerScore > playerScore) {
    return GAME_STATS.DEALER;
  }

  return GAME_STATS.DEALER;
};

export const checkWinner = (playerScore, dealerScore, player) => {
  if (dealerScore > 21 || (dealerScore < playerScore)) {
    return {
      ...player,
      wallet: player.wallet + 2 * player.bet
    };
  }

  if (playerScore > 21 || (playerScore < dealerScore)) {
    return {
      ...player,
      wallet: player.wallet
    };
  }

  if (playerScore === dealerScore) {
    return {
      ...player,
      wallet: player.wallet + player.bet
    };
  }
};

export const isDealBtnEnabled = state => {
  return !hasCardsDrawn(state) && state.player.bet >= 5;
};

export const isDrawCardBtnEnabled = state => {
  return (
      hasCardsDrawn(state) && !isGameOver(state) && state.dealer.cards.length === 2
  );
};
export const isStayBtnEnabled = state => {
  return hasCardsDrawn(state) && !isGameOver(state);
};
export const isNextRoundBtnEnabled = state => {
  return isGameOver(state);
};