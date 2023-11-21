import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

interface Props {
  product: Product;
}

interface Product {
  id: number;
  title: string;
  img?: string;
}

export const ProductCard = ({ product: { title, img } }: Props) => {
  const { counter, handleQuantityBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        src={img ?? noImage}
        alt="no resource loaded"
        className={styles.productImg}
      />

      <span className={styles.productDescription}>{title}</span>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => handleQuantityBy(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button
          className={styles.buttonAdd}
          onClick={() => handleQuantityBy(+1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
