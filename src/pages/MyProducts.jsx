import ProductList from '../components/products/ProductList';
import useUserInfo from '../hooks/useUserInfo';
import { useGetProductsQuery } from '../redux/features/products/productApi';

function MyProducts() {
  const userInfo = useUserInfo();
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery({
    page: 1,
    limit: 100,
  });

  console.log(products?.data);

  const myProducts = products?.data?.filter(
    (prod) => prod?.productOwnerId === userInfo?.userId
  );

  console.log(myProducts);

  let content = null;

  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError)
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No product found with your query
      </p>
    );
  if (!isLoading && !isError && myProducts?.length === 0) {
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No product found
      </p>
    );
  }
  if (!isLoading && !isError && myProducts?.length > 0) {
    content = <ProductList products={myProducts} />;
  }

  return (
    <main className="px-2 py-12">
      {' '}
      <h2 className="text-center text-4xl text-emerald-500 mb-16">
        My Added Products
      </h2>
      {content}
    </main>
  );
}

export default MyProducts;
