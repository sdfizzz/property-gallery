import { ADD_CARDS_Type, FILTER_CARDS_Type } from './actionTypes';

export type CardType = 'IndependentLiving' | 'SupportAvailable';

export type CardPropType = {
  id: string;
  title: string;
  address: string;
  type: CardType;
  price: number;
};

export type State = {
  cards: CardPropType[];
  filteredCards: CardPropType[];
  isLoading: boolean;
};

export type Action = {
  type: string;
};

export type AddCardAction = Action & {
  type: ADD_CARDS_Type;
  cards: CardPropType[];
};

export type FilterAction = Action & {
  type: FILTER_CARDS_Type;
  filter: string;
};

export type DispatchType = (args: Action) => void;
