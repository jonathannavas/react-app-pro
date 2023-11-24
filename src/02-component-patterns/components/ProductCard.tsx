import { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  OnChangeArgs,
  Product,
  ProductContextProps,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, handleQuantityBy } = useProduct({
    onChange,
    product,
    value,
  });
  return (
    <Provider
      value={{
        counter,
        handleQuantityBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
