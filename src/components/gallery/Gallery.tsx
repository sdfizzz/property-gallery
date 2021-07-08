import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { State } from '../../store/types';
import Card from './Card';
import LoadMoreButton from './LoadMoreButton';

const Gallery = () => {
  const filteredCards = useSelector((state: State) => state.filteredCards, shallowEqual);

  return (
    <div className="app__gallery">
      <div className="app__gallery__board">
        {filteredCards.map((i) => (
          <Card info={i} key={i.id} />
        ))}
      </div>
      <LoadMoreButton />
    </div>
  );
};

export default Gallery;
