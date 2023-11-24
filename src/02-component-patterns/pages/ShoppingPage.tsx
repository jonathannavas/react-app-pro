import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { Product } from '../interfaces/interfaces';

import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product: Product) => {
          const { id, title, img } = product;
          return (
            <ProductCard
              product={product}
              className="bg-dark text-white"
              key={id}
              value={shoppingCart[product.id]?.count || 0}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" img={img} />
              <ProductTitle className="text-bold" title={title} />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            key={product.id}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
