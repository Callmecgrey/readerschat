import React, { useState } from 'react';
import UserList from './UserList';
import ChatScreen from './ChatScreen';

const ChatLayout: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <UserList onSelectUser={setSelectedUser} />
      </aside>
      <main className="flex-1 p-4">
        {selectedUser ? (
          <ChatScreen user={selectedUser} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Select a user to start chatting</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ChatLayout;
