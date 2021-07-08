import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { CardPropType, State } from '../../store/types';
import Card from './Card';
import { loadCards } from '../../store/actionCreators';

const Gallery = () => {
  const filteredCards: readonly CardPropType[] = useSelector((state: State) => state.filteredCards, shallowEqual);
  const dispatch = useDispatch();

  const loadMoreButtonClick = useCallback(() => {
    dispatch(loadCards());
  }, [dispatch]);

  return (
    <div className="app__gallery">
      <div className="app__gallery__board">
        {filteredCards.map((i) => (
          <Card info={i} key={i.id} />
        ))}
      </div>
      <button className="app__gallery-button" onClick={loadMoreButtonClick}>
        See more
        <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default Gallery;
