/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
  useAddMessageMutation,
  useGetMessagesQuery,
} from '../../redux/features/message/messageApi';
import InputBox from '../form/InputBox';
import MessageCard from './MessageCard';

const ENDPOINT = 'http://localhost:5001';
let socket = io(ENDPOINT);

function MessageSection({ productId, senderId }) {
  const [content, setContent] = useState('');

  const {
    data: messages,
    isLoading,
    isError,
    refetch,
  } = useGetMessagesQuery({
    page: 1,
    limit: 1000,
  });

  const newMessges = messages?.data?.filter(
    (msg) => msg?.productId === productId
  );

  const [
    addMessage,
    { data, isLoading: addLoading, isError: addError, isSuccess: addSuccess },
  ] = useAddMessageMutation();

  useEffect(() => {
    socket.on('receive_message2', (data) => {
      if (data === productId) {
        console.log(data === productId);
        refetch();
      }
    });
  }, []);

  useEffect(() => {
    if (addSuccess) {
      socket.emit('messageRoom', productId);
      alert('Message added successfully');
    }

    if (addError) {
      alert('Message sending failed');
    }
  }, [addSuccess, addError]);

  function handleMessage(e) {
    e.preventDefault();
    addMessage({ content, senderId, productId });
    setContent('');
  }

  let uiContent = null;

  if (isLoading) {
    uiContent = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    uiContent = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No message found
      </p>
    );
  }

  if (!isLoading && !isError && newMessges.length === 0) {
    uiContent = (
      <p className="mt-4 rounded-md bg-green-100 p-2 text-lg text-green-700">
        No Messages
      </p>
    );
  }

  if (!isLoading && !isError && newMessges?.length > 0) {
    uiContent = newMessges
      ?.slice(0)
      ?.reverse()
      ?.map((msg) => <MessageCard key={msg?.id} msg={msg} />);
  }

  return (
    <div className=" bg-gray-900 p-2">
      <h2 className="text-center capitalize text-emerald-500">Messages</h2>
      <div className="mt-4 grid grid-cols-1 gap-2">{uiContent}</div>
      <div className="mt-6 bg-gray-800 p-4">
        <form onSubmit={handleMessage}>
          <InputBox
            type="text"
            name="message"
            placeholder="Your Message"
            value={content}
            handleChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className="bg-emerald-500 px-6 py-2"
            disabled={addLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageSection;
