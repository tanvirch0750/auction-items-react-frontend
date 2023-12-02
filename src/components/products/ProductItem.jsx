/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

/* eslint-disable react/no-unescaped-entities */
function ProductItem({ product }) {
  let available;
  if (product?.auctionStatus === 'ongoing') {
    available = 'Ongoing';
  } else if (product?.auctionStatus === 'notStarted') {
    available = 'Not Started';
  } else {
    available = 'Bid End';
  }

  return (
    <div className="card w-full bg-gray-900 shadow-xl">
      <figure>
        <img
          src={product?.imageUrl}
          alt="Product Item"
          className="w-full h-[300px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-emerald-600">
          {product?.productName}
          {/* <div className="badge badge-secondary bg-emerald-100 px-4 py-4 text-emerald-900 font-semibold">
            NEW
          </div> */}
        </h2>
        <p className="mt-6">
          <span>Auction Date:</span>
          <span className=" inline-block pl-2 text-gray-400">
            {product?.auctionDate}
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
          <div className="px-4 py-2 text-white bg-orange-700">{available}</div>
          <Link
            to={`/products/${product?.id}`}
            className="px-4 py-2 bg-text-emerald-600 bg-emerald-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
