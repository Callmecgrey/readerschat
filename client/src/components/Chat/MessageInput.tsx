import React from 'react';

const MessageInput: React.FC = () => {
  return (
    <div className="p-4 border-t border-gray-300">
      <input type="text" placeholder="Type a message..." className="w-full p-2 border border-gray-400" />
    </div>
  );
};

export default MessageInput;
