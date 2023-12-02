import { useEffect, useState } from 'react';
import InputBox from '../components/form/InputBox';
import useUserInfo from '../hooks/useUserInfo';
import { useAddProductMutation } from '../redux/features/products/productApi';
import formatDate from '../utils/dateFormat';

function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [auctionDate, setAuctionDate] = useState('');
  const [auctionTime, setAuctionTime] = useState('');
  const [initialBiddingPrice, setInitialBiddingPrice] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(0);
  const user = useUserInfo();
  const [addProduct, { isLoading, isError, isSuccess }] =
    useAddProductMutation();

  // TODO: This is static now wil update later
  const auctionStatus = 'notStarted';
  const currentBiddingPrice = initialBiddingPrice;
  const categoryId = '91223380-a9ae-4500-b317-8cc55eadae2f';
  const productOwnerId = user?.userId;

  useEffect(() => {
    if (isSuccess) alert('Product added successfully');
    if (isError) alert('There was an error, product add failed');
  }, [isSuccess, isError]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      productName,
      description,
      imageUrl,
      auctionDate: formatDate(auctionDate),
      auctionTime,
      initialBiddingPrice: Number(initialBiddingPrice),
      incrementAmount: Number(incrementAmount),
      auctionStatus,
      currentBiddingPrice: Number(currentBiddingPrice),
      categoryId,
      productOwnerId,
    };

    addProduct(data);

    console.log(data);
    // resetForm();
  }

  return (
    <section className="py-20  flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[900px] overflow-hidden rounded-lg bg-gray-800 px-10 pt-8 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <span className="text-2xl text-emerald-600 font-bold uppercase">
                  Create Product
                </span>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="text"
                      name="productName"
                      placeholder="Product Name"
                      value={productName}
                      handleChange={(e) => setProductName(e.target.value)}
                    />
                    <InputBox
                      type="text"
                      name="imageUrl"
                      placeholder="Product Image Url"
                      value={imageUrl}
                      handleChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className=" inline-block mb-1">
                        Auction Date:
                      </label>
                      <InputBox
                        type="date"
                        name="auctionDate"
                        placeholder="Auction Date"
                        value={auctionDate}
                        handleChange={(e) => setAuctionDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className=" inline-block mb-1">
                        Auction Time:
                      </label>
                      <InputBox
                        type="time"
                        name="auctionTime"
                        placeholder="Auction Time"
                        value={auctionTime}
                        handleChange={(e) => setAuctionTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="number"
                      name="initialBiddingPrice"
                      placeholder="Initial Bidding Price"
                      value={initialBiddingPrice}
                      handleChange={(e) =>
                        setInitialBiddingPrice(e.target.value)
                      }
                    />
                    <InputBox
                      type="number"
                      name="incrementAmount"
                      placeholder="Increment Amount"
                      value={incrementAmount}
                      handleChange={(e) => setIncrementAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <InputBox
                      type="test"
                      name="description"
                      placeholder="Product Description"
                      value={description}
                      handleChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-10">
                  <input
                    type="submit"
                    value={isLoading ? 'Adding Product...' : 'Add Product'}
                    className="w-full cursor-pointer  border border-primary bg-emerald-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                    disabled={isLoading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateProduct;
