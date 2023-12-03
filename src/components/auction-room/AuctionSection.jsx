/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import Swal from 'sweetalert2';
import {
  useAddAuctionHistoryMutation,
  useGetAuctionHistoriesQuery,
} from '../../redux/features/auction-history/auctionHistoryApi';
import AuctionCard from './AuctionCard';

const ENDPOINT = 'http://localhost:5001';
let socket = io(ENDPOINT);

function AuctionSection({
  auctionStatus,
  productId,
  bidderId,
  productOwnerId,
}) {
  const {
    data: auctionHistories,
    isLoading,
    isError,
    refetch,
  } = useGetAuctionHistoriesQuery({
    page: 1,
    limit: 1000,
  });

  const newHistories = auctionHistories?.data?.filter(
    (auc) => auc?.product?.id === productId
  );

  const [
    addAuctionHistory,
    { data, isLoading: addLoading, isError: addError, isSuccess: addSuccess },
  ] = useAddAuctionHistoryMutation();

  useEffect(() => {
    socket.on('receive_message', (data) => {
      if (data === productId) {
        console.log(data === productId);
        refetch();
      }
    });
  }, []);

  useEffect(() => {
    if (addSuccess) {
      Swal.fire({
        title: 'Confirmed',
        text: 'Your Bid is recorded.',
        icon: 'success',
      });

      socket.emit('auctionRoom', productId);
    }

    if (addError) {
      Swal.fire({
        title: 'Failed',
        text: 'Your Bid failed. Try Again',
        icon: 'error',
      });
    }
  }, [addSuccess, addError, productId]);

  function handleBid() {
    Swal.fire({
      title: 'Are you sure you want to bid for this item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm the bid',
    }).then((result) => {
      if (result.isConfirmed) {
        addAuctionHistory({ bidderId, productId });
      }
    });
  }

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No bid found
      </p>
    );
  }

  if (!isLoading && !isError && newHistories?.length === 0) {
    content = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No Bid yet
      </p>
    );
  }

  if (!isLoading && !isError && newHistories?.length > 0) {
    content = newHistories?.map((ah, index) => (
      <AuctionCard key={ah?.id} auction={ah} isLast={index === 0} />
    ));
  }

  return (
    <div className=" bg-gray-800 p-2 ">
      <h2 className="text-center capitalize text-emerald-500">Auction Place</h2>
      {auctionStatus === 'ongoing' &&
        bidderId !== productOwnerId &&
        data?.data?.abh?.product?.auctionStatus !== 'end' &&
        data?.data?.abh?.product?.auctionStatus !== 'notStarted' && (
          <div className="mt-4 flex justify-end">
            <button
              className="bg-emerald-500 px-6 py-2"
              onClick={handleBid}
              disabled={addLoading}
            >
              Bid
            </button>
          </div>
        )}
      <div className="mt-4 grid grid-cols-1 gap-2 max-h-[500px] overflow-y-scroll">
        {content}
      </div>
    </div>
  );
}

export default AuctionSection;
