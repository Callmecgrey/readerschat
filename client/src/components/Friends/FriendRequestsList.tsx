import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons

interface FriendRequest {
  username: string;
}

interface FriendRequestsListProps {
  requests: FriendRequest[];
}

const FriendRequestsList: React.FC<FriendRequestsListProps> = ({ requests }) => {
  return (
    <div className="space-y-4">
      {requests.length > 0 ? (
        requests.map((request, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 mr-3">
                <FaUser className="text-gray-600 text-xl" /> {/* User icon */}
              </div>
              <span className="font-semibold text-lg">{request.username}</span>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium mr-2 hover:bg-blue-600"
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No friend requests.</p>
      )}
    </div>
  );
};

export default FriendRequestsList;
