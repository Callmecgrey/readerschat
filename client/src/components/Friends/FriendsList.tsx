import React from 'react';

interface Friend {
  username: string;
  online: boolean;
}

interface FriendsListProps {
  friends: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
  return (
    <ul className="space-y-2">
      {friends.map((friend, index) => (
        <li
          key={index}
          className={`flex items-center p-2 rounded-md ${friend.online ? 'bg-green-100' : 'bg-gray-100'}`}
        >
          <div className={`w-3 h-3 rounded-full ${friend.online ? 'bg-green-500' : 'bg-gray-500'} mr-2`} />
          <span>{friend.username}</span>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
