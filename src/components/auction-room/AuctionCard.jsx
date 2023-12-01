function AuctionCard() {
  return (
    <div className="card w-full bg-gray-900 shadow-xl">
      <div className="p-2">
        <h2 className="card-title text-sm">
          Current Bid - <span className="text-orange-600">10000</span>
        </h2>
        <p className="text-sm">
          Bidder Name:{' '}
          <span className=" text-emerald-500">Tanvir Chowdhury</span>
        </p>
        <p className="text-sm">
          Bidding Time: <span className=" text-gray-400">10:00 AM</span>
        </p>
      </div>
    </div>
  );
}

export default AuctionCard;
