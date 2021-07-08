import React from 'react';
import { Link } from 'react-router-dom';
import { CardPropType, CardType } from './types';

const Mark = ({ type }: { type: CardType }) => {
  if (type === 'IndependentLiving') {
    return <div className={`app__gallery__board-card-mark independent`}>Independent living</div>;
  }

  if (type === 'SupportAvailable') {
    return <div className={`app__gallery__board-card-mark support`}>Restaurant & Support available</div>;
  }

  return <></>;
};

const Image = ({ src, alt, type }: { src: string; alt?: string; type: CardType }) => {
  return (
    <div className="app__gallery__board-card-img">
      <img src={src} alt={alt} />
      <Mark type={type} />
    </div>
  );
};

const Description = ({ info: { title, address, price } }: { info: CardPropType }) => (
  <div className="app__gallery__board-card-desc">
    <header>
      <h2>{title}</h2>
      <p>{address}</p>
    </header>
    <p>
      New Properties for Sale from{' '}
      <strong>
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'GBP',
          maximumFractionDigits: 0,
        })}
      </strong>
    </p>
    <p className="sm">Shared Ownership Available</p>
  </div>
);

const Card = ({ info }: { info: CardPropType }) => {
  const { id, title, type } = info;
  return (
    <Link to={`/details/${id}`}>
      <div className="app__gallery__board-card">
        <Image src={`https://via.placeholder.com/320x200/ACD1AF/FFFFFF?text=${title}`} type={type} />
        <Description info={info} />
      </div>
    </Link>
  );
};

export default Card;
