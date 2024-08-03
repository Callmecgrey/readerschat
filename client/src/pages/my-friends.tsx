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
      <div className="p-4 flex">
        <div className="flex-1">
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
        
        {/* Expanded Sidebar for counts */}
        <div className="w-80 pl-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-6">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Friend Requests:</span>
                <span className="font-bold text-blue-600">{friendRequests.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">My Friends:</span>
                <span className="font-bold text-green-600">{friends.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyFriendsPage;
