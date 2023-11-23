import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProducCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
  id: number;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  handleQuantityBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProducCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}
