import InputBox from '../form/InputBox';
import MessageCard from './MessageCard';

function MessageSection() {
  return (
    <div className=" bg-gray-900 p-2">
      <h2 className="text-center capitalize text-emerald-500">Messages</h2>
      <div className="mt-4 grid grid-cols-1 gap-2">
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
      <div className="mt-6 bg-gray-800 p-4">
        <form>
          <InputBox type="text" name="message" placeholder="Your Message" />
          <button type="submit" className="bg-emerald-500 px-6 py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageSection;
