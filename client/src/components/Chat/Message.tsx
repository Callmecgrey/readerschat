import React from 'react';

interface MessageProps {
  message: { sender: string, content: string };
  isMine: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isMine }) => {
  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`p-2 rounded-md ${isMine ? 'bg-blue-500 text-white' : 'bg-white text-black'} max-w-xs`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default Message;
