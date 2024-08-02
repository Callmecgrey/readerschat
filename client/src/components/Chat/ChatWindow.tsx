import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
