import * as ACTION_TYPES from './types';
import axios from 'axios';

const requestCards = data => {
	return {
		type: ACTION_TYPES.REQUEST_CARDS,
		data
	};
};

const shuffle = data => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  return data;
};

export const fetchCards = options => {
	return async (dispatch) => {
		const deskCards = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=52').then((response) => {
      		const shuffledCards = shuffle(response.data.cards)
			dispatch(requestCards(shuffledCards));
		});
		return deskCards
	};
};

export const placeBet = betValue => {
	return {
		type: ACTION_TYPES.PLACE_BET,
		betValue
	};
};