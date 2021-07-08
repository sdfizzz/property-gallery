import React from 'react';
import { CardPropType } from './types';
import Card from './Card';

const items: CardPropType[] = [
  {
    id: '1',
    title: 'Brunlees Court',
    address: '19-23 Cambridge Road, Southport',
    type: 'IndependentLiving',
    price: 483000,
  },
  {
    id: '2',
    title: 'Charlotte Court',
    address: '514 Muller Mount',
    type: 'IndependentLiving',
    price: 260000,
  },
  {
    id: '3',
    title: 'Protocol Virginia',
    address: '19-10 Adam Street, London',
    type: 'IndependentLiving',
    price: 468000,
  },
  {
    id: '4',
    title: 'infomediaries Row',
    address: '451 Swaniawski Ford',
    type: 'SupportAvailable',
    price: 234000,
  },
  {
    id: '5',
    title: 'SMS',
    address: '67160 Huel Well',
    type: 'SupportAvailable',
    price: 931000,
  },
];

const Gallery = () => {
  const handleSeeMoreClick = () => {
    console.log('handleSeeMoreClick');
  };

  return (
    <div className="app__gallery">
      <div className="app__gallery__board">
        {items.map((i) => (
          <Card info={i} key={i.id} />
        ))}
      </div>
      <button className="app__gallery-button" onClick={handleSeeMoreClick}>
        See more
        <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default Gallery;
