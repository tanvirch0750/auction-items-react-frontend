import formatTime from '../../utils/formatTime';

/* eslint-disable react/prop-types */
function MessageCard({ msg }) {
  console.log(msg);
  return (
    <div className="card w-full bg-gray-800 shadow-xl">
      <div className="p-2">
        <p className="text-sm">
          Name:{' '}
          <span className=" text-emerald-500">{msg?.sender?.fullName}</span>
        </p>
        <p className="text-sm">
          Message: <span className=" text-gray-400">{msg?.content}</span>
        </p>
        <p className="text-xs">
          Time:{' '}
          <span className=" text-gray-400">{formatTime(msg?.createdAt)}</span>
        </p>
      </div>
    </div>
  );
}

export default MessageCard;
