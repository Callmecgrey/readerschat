import React from 'react';
import Message from './Message';
import ChatHeader from './ChatHeader';

interface ChatWindowProps {
  messages: { sender: string, content: string }[];
  user: { username: string };
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, user }) => {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={user} />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-200">
        {messages.map((message, index) => (
          <Message key={index} message={message} isMine={message.sender === 'me'} />
        ))}
      </div>
      <div className="p-4 bg-white flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Type a message..."
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
