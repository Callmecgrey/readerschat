import React from 'react';

interface UserSelectionSidebarProps {
  users: { username: string }[];
  onSelectUser: (user: { username: string }) => void;
}

const UserSelectionSidebar: React.FC<UserSelectionSidebarProps> = ({ users, onSelectUser }) => {
  return (
    <div className="w-64 h-full bg-gray-100 p-4">
      <ul className="space-y-2">
        {users.map((user, index) => (
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

export default UserSelectionSidebar;
