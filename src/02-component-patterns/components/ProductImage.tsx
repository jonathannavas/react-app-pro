import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductImage = ({ img = '' }) => {
  let imageToShow: string;
  const { product } = useContext(ProductContext);

  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }

  return (
    <img src={imageToShow} alt="product image" className={styles.productImg} />
  );
};
