import * as actionTypes from './actionTypes';
import { Action, AddCardAction, FilterAction, State } from './types';

const initialState: State = {
  cards: [],
  filteredCards: [],
  isLoading: true,
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.END_LOADING:
      return {
        ...state,
        filteredCards: [...state.cards],
        isLoading: false,
      };
    case actionTypes.ADD_CARDS:
      const newCards = (action as AddCardAction).cards;
      return {
        ...state,
        cards: state.cards.concat(newCards),
      };
    case actionTypes.FILTER_CARDS:
      const filterStr = (action as FilterAction).filter;
      return {
        ...state,
        filteredCards: state.cards.filter((v) => v.title.includes(filterStr)),
      };
  }

  return state;
};

export default reducer;
