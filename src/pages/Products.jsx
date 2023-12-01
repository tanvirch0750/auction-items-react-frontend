import Filter from '../components/filters/Filter';
import Search from '../components/filters/Search';
import ProductList from '../components/products/ProductList';

function Products() {
  return (
    <main className="px-2 py-12">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-4">
        <Search />
        <Filter />
      </div>

      <ProductList />
    </main>
  );
}

export default Products;
