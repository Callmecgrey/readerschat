import React from 'react';

interface UserListProps {
  onSelectUser: (user: string) => void;
}

const users = ['Alice', 'Bob', 'Charlie', 'Dave'];

const UserList: React.FC<UserListProps> = ({ onSelectUser }) => {
  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li
          key={user}
          className="p-2 cursor-pointer hover:bg-gray-200 rounded-md"
          onClick={() => onSelectUser(user)}
        >
          {user}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
