/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function DetailSection({ product }) {
  return (
    <div className=" bg-gray-900 p-2">
      <h2 className="text-center capitalize text-emerald-500">
        Product Details
      </h2>
      <div className="card w-full bg-gray-900 shadow-xl mt-4">
        <figure>
          <img src={product?.imageUrl} alt="Product image url" />
        </figure>
        <div className="mt-4 px-2">
          <h2 className="card-title text-emerald-600">
            {product?.productName}
          </h2>
          {/* <p className="mt-6">
            <span>Category:</span>
            <span className=" inline-block pl-2 text-gray-400">Shoe</span>
          </p> */}
          <p className="mt-6">
            <span>Auction Date:</span>
            <span className=" inline-block pl-2 text-gray-400">
              {product?.auctionDate}
            </span>
          </p>
          <p>
            <span>Auction Status:</span>
            <span className=" inline-block pl-2 font-bold text-emerald-500">
              {product?.auctionStatus}
            </span>
          </p>
          <p>
            <span>Auction Time:</span>
            <span className=" inline-block pl-2 text-gray-400">
              {product?.auctionTime}
            </span>
          </p>
          <p>
            <span>Initial Bidding Price:</span>
            <span className=" inline-block pl-2 font-bold text-orange-600">
              {product?.initialBiddingPrice}
            </span>
          </p>
          <p>
            <span>Bid Increment Price:</span>
            <span className=" inline-block pl-2 font-bold text-orange-600">
              {product?.incrementAmount}
            </span>
          </p>
          <div className="card-actions flex justify-between mt-6">
            <p>
              Description:{' '}
              <span className=" text-gray-400">{product?.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSection;
