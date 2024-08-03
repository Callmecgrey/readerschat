import React, { useState } from 'react';

interface UserSidebarProps {
  users: { username: string }[];
  onSelectUser: (user: { username: string }) => void;
}

const UserSidebar: React.FC<UserSidebarProps> = ({ users, onSelectUser }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="w-64 h-full bg-gray-100 p-4">
      <input
        type="text"
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {users
          .filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
          .map((user, index) => (
            <li
              key={index}
              className="p-2 bg-white rounded-md hover:bg-gray-200 cursor-pointer"
              onClick={() => onSelectUser(user)}
            >
              {user.username}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserSidebar;
