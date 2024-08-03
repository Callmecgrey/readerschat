import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiUser, FiLogOut } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    { name: 'Chat', path: '/chat' },
    { name: 'Find Readers', path: '/find-readers' },
    { name: 'Feeds', path: '/feeds' },
    { name: 'Rate Novel', path: '/rate-novel' },
    { name: 'My Friends', path: '/my-friends' }
  ];

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout');
  };

  return (
    <aside className="w-64 h-full bg-blue-500 text-white p-4 flex flex-col justify-between">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">ReadersChat</h1>
      </div>
      <ul className="space-y-2 flex-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={router.pathname === item.path ? 'bg-blue-700 rounded-md' : ''}
          >
            <Link href={item.path} legacyBehavior>
              <a className="block p-4 hover:bg-blue-600 rounded-md transition duration-300">
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-2">
            <FiUser size={24} color="white" />
          </div>
          <div>
            <Link href="/profile" legacyBehavior>
              <a className="text-sm font-medium">View Profile</a>
            </Link>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-2 text-red-400 hover:bg-blue-600 rounded-md transition duration-300"
        >
          <FiLogOut size={20} className="mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
