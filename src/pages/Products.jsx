import { useSelector } from 'react-redux';
import Filter from '../components/filters/Filter';
import Search from '../components/filters/Search';
import ProductList from '../components/products/ProductList';
import { useGetProductsQuery } from '../redux/features/products/productApi';

function Products() {
  const { searchTerm } = useSelector((state) => state.product);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({
    page: 1,
    limit: 100,
    searchTerm,
  });

  let content = null;

  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError)
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No product found with your query
      </p>
    );
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No product found
      </p>
    );
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    content = <ProductList products={products?.data} />;
  }

  return (
    <main className="px-2 py-12">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-4">
        <Search />
        <Filter />
      </div>

      {content}
    </main>
  );
}

export default Products;
