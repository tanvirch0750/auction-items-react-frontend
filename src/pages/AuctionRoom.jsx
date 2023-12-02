/* eslint-disable react/no-unescaped-entities */

import AuctionSection from '../components/auction-room/AuctionSection';
import DetailSection from '../components/auction-room/DetailSection';
import MessageSection from '../components/auction-room/MessageSection';

function AuctionRoom() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-12 px-2 md:grid-cols-3 md:gap-6 py-24">
      <DetailSection />
      <AuctionSection />
      <MessageSection />
    </div>
  );
}

export default AuctionRoom;
