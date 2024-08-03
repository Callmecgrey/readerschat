import React, { useState } from 'react';

interface ChatHeaderProps {
  user: { username: string };
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div>{user.username}</div>
      <div className="relative">
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          &#x22EE;
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Block</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mute</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Auto Clear Chat</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
