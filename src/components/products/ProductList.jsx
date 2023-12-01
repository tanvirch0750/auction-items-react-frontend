import ProductItem from './ProductItem';

function ProductList() {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-12 px-2 md:grid-cols-3 md:gap-6">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ul>
  );
}

export default ProductList;
