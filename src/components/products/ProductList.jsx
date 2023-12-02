/* eslint-disable react/prop-types */
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-12 px-2 md:grid-cols-3 md:gap-6">
      {products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductList;
