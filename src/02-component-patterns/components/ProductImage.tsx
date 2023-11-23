import { CSSProperties, useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
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
    <img
      src={imageToShow}
      alt="product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
