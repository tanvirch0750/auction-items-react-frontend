import formatTime from '../../utils/formatTime';

/* eslint-disable react/prop-types */
function AuctionCard({ auction, isLast }) {
  return (
    <div
      className={`card w-full bg-gray-900 shadow-xl ${
        isLast ? 'border border-emerald-500 bg-gray-700' : ''
      }`}
    >
      <div className="p-2">
        <h2 className="card-title text-sm">
          Current Total Bid -{' '}
          <span className="text-blue-600">
            {auction?.product?.currentBiddingPrice}
          </span>
        </h2>
        <h2 className="card-title text-sm">
          Bidding Price -{' '}
          <span className="text-orange-600">{auction?.amount}</span>
        </h2>

        <p className="text-sm">
          Bidder Name:{' '}
          <span className=" text-emerald-500">{auction?.bidder?.fullName}</span>
        </p>
        <p className="text-sm">
          Bidding Time:{' '}
          <span className=" text-gray-400">
            {formatTime(auction?.createdAt)}
          </span>
        </p>
        {isLast && (
          <p className="text-sm mt-4">
            <span className=" text-green-500 uppercase font-bold">
              Current Winner
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default AuctionCard;
