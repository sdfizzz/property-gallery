import { ADD_CARDS, FILTER_CARDS } from './actionTypes';

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
  type: typeof ADD_CARDS;
  cards: CardPropType[];
};

export type FilterAction = Action & {
  type: typeof FILTER_CARDS;
  filter: string;
};

export type DispatchType = (args: Action) => void;
