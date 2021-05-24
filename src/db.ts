import { v4 as uuidv4 } from 'uuid';

const cakes = [
  { name: 'Paris Brest', imgUrl: '/paris-brest.jpeg' },
  { name: 'Eclair', imgUrl: '/eclair.jpeg' },
  { name: 'Banana bread', imgUrl: '/banana-bread.jpeg' },
  { name: 'Almond cake', imgUrl: '/almondcake.jpeg' },
  { name: 'Baba au Rhum', imgUrl: '/babaaurhum.jpeg' },
  { name: 'Birthday cake', imgUrl: '/birthdaycake.jpeg' },
  { name: 'Chocolate cake', imgUrl: '/chocolatecake.jpeg' },
  { name: 'Clafoutis', imgUrl: '/clafoutis.jpeg' },
  { name: 'Coffee Walnut cake', imgUrl: '/coffeewalnutcake.jpeg' },
  { name: 'Foret noire', imgUrl: '/foretnoire.jpeg' },
  { name: 'Kouignamann', imgUrl: '/kouignamann.jpeg' },
  { name: 'Lemon cake', imgUrl: '/lemoncake.jpeg' },
  { name: 'Orange cake', imgUrl: '/orangecake.jpeg' },
  { name: 'Panforte', imgUrl: '/panforte.jpeg' },
  { name: 'Piece montee', imgUrl: '/piecemontee.jpeg' },
  { name: 'Religieuse', imgUrl: '/religieuse.jpeg' },
  { name: 'Sponge cake', imgUrl: '/spongecake.jpeg' },
  { name: 'Strawberry tart', imgUrl: '/strawberrytart.jpeg' },
  { name: 'Yogurt cake', imgUrl: '/yogurtcake.jpeg' },
];

const randomYumFactor = () => Math.floor(Math.random() * 4) + 3;

const cakesWithIDsAndYumFactors: Cake[] = cakes.map((cake) => ({
  ...cake,
  id: uuidv4(),
  yumFactor: randomYumFactor(),
  comment:
    'This is a generic comment, since this cake was generated automatically when bootstraping the app.',
}));

export default cakesWithIDsAndYumFactors;
