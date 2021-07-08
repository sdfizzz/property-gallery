import { Action, DispatchType } from './types';
import { ADD_CARDS, END_LOADING, START_LOADING } from './actionTypes';

export function loadCards() {
  return (dispatch: DispatchType) => {
    dispatch({ type: START_LOADING });

    fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
      .then((response) => response.json())
      .then((cards) =>
        dispatch({
          type: ADD_CARDS,
          cards,
        } as Action),
      )
      .then(() => dispatch({ type: END_LOADING }));
  };
}
