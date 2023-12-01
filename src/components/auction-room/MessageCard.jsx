function MessageCard() {
  return (
    <div className="card w-full bg-gray-800 shadow-xl">
      <div className="p-2">
        <p className="text-sm">
          Name: <span className=" text-emerald-500">Tanvir Chowdhury</span>
        </p>
        <p className="text-sm">
          Message:{' '}
          <span className=" text-gray-400">This product just gone wild</span>
        </p>
        <p className="text-xs">
          Time: <span className=" text-gray-400">10:00 AM</span>
        </p>
      </div>
    </div>
  );
}

export default MessageCard;
