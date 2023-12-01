import InputBox from '../components/form/InputBox';

function CreateProduct() {
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
              <form>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="text"
                      name="productName"
                      placeholder="Product Name"
                    />
                    <InputBox
                      type="text"
                      name="imageUrl"
                      placeholder="Product Image Url"
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
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="number"
                      name="initialBiddingPrice"
                      placeholder="Initial Bidding Price"
                    />
                    <InputBox
                      type="number"
                      name="incrementAmount"
                      placeholder="Increment Amount"
                    />
                  </div>
                  <div>
                    <InputBox
                      type="test"
                      name="description"
                      placeholder="Product Description"
                    />
                  </div>
                </div>
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Add Product"
                    className="w-full cursor-pointer  border border-primary bg-emerald-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
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
