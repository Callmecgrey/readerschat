import React from 'react';

interface FriendRequest {
  username: string;
}

interface FriendRequestsListProps {
  requests: FriendRequest[];
}

const FriendRequestsList: React.FC<FriendRequestsListProps> = ({ requests }) => {
  return (
    <ul className="space-y-2">
      {requests.length > 0 ? (
        requests.map((request, index) => (
          <li key={index} className="flex items-center p-2 bg-gray-100 rounded-md">
            <div className="w-3 h-3 bg-gray-500 rounded-full mr-2" />
            <span className="flex-1">{request.username}</span>
            <button className="bg-green-500 text-white px-2 py-1 rounded-md text-sm mr-2">Accept</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">Reject</button>
          </li>
        ))
      ) : (
        <p>No friend requests.</p>
      )}
    </ul>
  );
};

export default FriendRequestsList;
