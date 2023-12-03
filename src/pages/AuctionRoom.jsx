/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuctionSection from '../components/auction-room/AuctionSection';
import DetailSection from '../components/auction-room/DetailSection';
import MessageSection from '../components/auction-room/MessageSection';
import useUserInfo from '../hooks/useUserInfo';
import { useAddAuctionWinnerMutation } from '../redux/features/auction-winner/auctionWinnerApi';
import {
  useEditProductMutation,
  useGetProductQuery,
} from '../redux/features/products/productApi';

function AuctionRoom() {
  const { id } = useParams();
  const userInfo = useUserInfo();

  const { data: product, isLoading, isError } = useGetProductQuery(id);
  const [
    editProduct,
    {
      data: editedProduct,
      isLoading: editLoading,
      isError: editError,
      isSuccess: editSuccess,
    },
  ] = useEditProductMutation();

  const [
    addAuctionWinner,
    {
      isLoading: winnerLoading,
      isError: winnerError,
      isSuccess: winnerSuccess,
    },
  ] = useAddAuctionWinnerMutation();

  useEffect(() => {
    if (editSuccess) alert('Bidding Status updated');
    if (editError) alert('Bidiing status update failed, try again');
  }, [editError, editSuccess]);

  if (!isLoading && isError) {
    return <p className="mt-8">Failed to load product</p>;
  }

  function startBidding() {
    editProduct({ id: product?.data?.id, data: { auctionStatus: 'ongoing' } });
  }

  function endBidding() {
    editProduct({ id: product?.data?.id, data: { auctionStatus: 'end' } });
    const res = editedProduct?.data?.auctionBiddingHistory;
    const winner = res[res?.length - 1];

    addAuctionWinner({
      auctionWinnerId: winner?.bidderId,
      productId: winner?.productId,
    });
  }

  return (
    <div className="mt-6">
      {userInfo?.userId === product?.data?.productOwnerId && (
        <div>
          {(product?.data?.auctionStatus === 'notStarted' ||
            product?.data?.auctionStatus === 'end') &&
            product?.data?.auctionStatus !== 'ongoing' && (
              <button
                className="px-6 py-2 bg-emerald-600 cursor-pointer"
                disabled={editLoading}
                onClick={startBidding}
              >
                {editLoading ? 'Loading...' : 'Start Bidding'}
              </button>
            )}
          {product?.data?.auctionStatus === 'ongoing' &&
            product?.data?.auctionStatus !== 'end' &&
            product?.data?.auctionStatus !== 'notStarted' && (
              <button
                className="px-6 py-2 bg-emerald-600 cursor-pointer"
                disabled={editLoading}
                onClick={endBidding}
              >
                {editLoading ? 'Loading...' : 'End Bidding'}
              </button>
            )}
        </div>
      )}
      <div className="grid grid-cols-1 gap-12 px-2 md:grid-cols-3 md:gap-6 py-24">
        <DetailSection product={product?.data} />
        <AuctionSection
          auctionStatus={product?.data?.auctionStatus}
          productId={product?.data?.id}
          bidderId={userInfo?.userId}
          productOwnerId={product?.data?.productOwnerId}
        />
        <MessageSection
          productId={product?.data?.id}
          senderId={userInfo?.userId}
        />
      </div>
    </div>
  );
}

export default AuctionRoom;
