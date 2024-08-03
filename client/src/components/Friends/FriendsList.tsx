import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons

interface Friend {
  username: string;
  online: boolean;
}

interface FriendsListProps {
  friends: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
  return (
    <div className="space-y-4">
      {friends.length > 0 ? (
        friends.map((friend, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 mr-3">
                <FaUser className="text-gray-600 text-xl" /> {/* User icon */}
              </div>
              <span className="font-semibold text-lg">{friend.username}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No friends added.</p>
      )}
    </div>
  );
};

export default FriendsList;
