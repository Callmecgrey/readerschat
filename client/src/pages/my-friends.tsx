import React, { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import FriendRequestsList from '../components/Friends/FriendRequestsList';
import FriendsList from '../components/Friends/FriendsList';

const MyFriendsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'friends'>('requests');

  // Dummy data
  const friendRequests = [
    { username: 'Alice Doe' },
    { username: 'Bob Smith' },
  ];

  const friends = [
    { username: 'John Doe', online: true },
    { username: 'Jane Smith', online: false },
    { username: 'Michael Johnson', online: true },
  ];

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Friends</h1>
        
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'requests' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
              }`}
            >
              Friend Requests
            </button>
            <button
              onClick={() => setActiveTab('friends')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'friends' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
              }`}
            >
              My Friends
            </button>
          </div>

          {activeTab === 'requests' && (
            <FriendRequestsList requests={friendRequests} />
          )}
          {activeTab === 'friends' && (
            <FriendsList friends={friends} />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyFriendsPage;
