import { Product } from '../interfaces/interfaces';

const product = {
  id: 1,
  img: './coffee-mug.png',
  title: 'Coffe mock',
};

const product2 = {
  id: 2,
  img: './coffee-mug2.png',
  title: 'Coffe mock two',
};

export const products: Product[] = [product, product2];
