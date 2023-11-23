import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

import '../styles/custom-styles.css';

const product = {
  id: 1,
  img: './coffee-mug.png',
  title: 'Coffe mock',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Bimbo" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: 'yellow' }}>
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
