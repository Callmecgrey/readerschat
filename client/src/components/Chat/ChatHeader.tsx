import React, { useState, useRef, useEffect } from 'react';
import { FiVideo, FiPhone } from 'react-icons/fi';

interface ChatHeaderProps {
  user: { username: string };
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex flex-col">
        <div className="font-bold">{user.username}</div>
        <div className="flex items-center text-sm mt-1">
          <span className="relative flex items-center mr-2">
            <span className="relative w-2 h-2 bg-green-500 rounded-full">
              <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-50 animate-ping"></span>
            </span>
          </span>
          <span>Online</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white">
          <FiVideo size={20} />
        </button>
        <button className="text-white">
          <FiPhone size={20} />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            &#x22EE;
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul className="py-1 text-gray-900">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Block</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mute</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Auto Clear Chat</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
