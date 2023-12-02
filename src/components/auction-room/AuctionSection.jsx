import AuctionCard from './AuctionCard';

function AuctionSection() {
  return (
    <div className=" bg-gray-800 p-2">
      <h2 className="text-center capitalize text-emerald-500">Auction Place</h2>
      <div className="mt-4 grid grid-cols-1 gap-2">
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-emerald-500 px-6 py-2">Bid</button>
      </div>
    </div>
  );
}

export default AuctionSection;
