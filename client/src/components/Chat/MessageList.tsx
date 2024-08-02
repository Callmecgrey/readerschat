import React from 'react';

const messages = [
  { id: 1, text: 'Hello!' },
  { id: 2, text: 'How are you?' },
  { id: 3, text: 'I am good, thanks!' }
];

const MessageList: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <div key={message.id} className="p-2 border-b border-gray-300">{message.text}</div>
      ))}
    </div>
  );
};

export default MessageList;
