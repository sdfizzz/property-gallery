export type CardType = 'IndependentLiving' | 'SupportAvailable';

export type CardPropType = {
  id: string;
  title: string;
  address: string;
  type: CardType;
  price: number;
};
