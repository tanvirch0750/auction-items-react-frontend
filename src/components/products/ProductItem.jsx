import { Link } from 'react-router-dom';

/* eslint-disable react/no-unescaped-entities */
function ProductItem() {
  return (
    <div className="card w-full bg-gray-900 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-emerald-600">
          Neymar's Signed Jersey
          <div className="badge badge-secondary bg-emerald-100 px-4 py-4 text-emerald-900 font-semibold">
            NEW
          </div>
        </h2>
        <p className="mt-6">
          <span>Auction Date:</span>
          <span className=" inline-block pl-2 text-gray-400">
            19 December, 2020
          </span>
        </p>
        <p>
          <span>Auction Time:</span>
          <span className=" inline-block pl-2 text-gray-400">19.00</span>
        </p>
        <p>
          <span>Initial Bidding Price:</span>
          <span className=" inline-block pl-2 font-bold text-orange-600">
            10000
          </span>
        </p>
        <div className="card-actions flex justify-between mt-6">
          <div className="px-4 py-2 text-white bg-orange-700">Available</div>
          <Link className="px-4 py-2 bg-text-emerald-600 bg-emerald-600">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
