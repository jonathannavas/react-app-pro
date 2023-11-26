import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, handleQuantity, isMaxCountReached, count }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Resetear</button>
            <button onClick={() => handleQuantity(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => handleQuantity(+2)}>+2</button>
            )}
            <br />
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
