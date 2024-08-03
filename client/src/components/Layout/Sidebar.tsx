import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    { name: 'Chat', path: '/chat' },
    { name: 'Find Readers', path: '/find-readers' },
    { name: 'Upload Status', path: '/upload-status' },
    { name: 'Rate Novel', path: '/rate-novel' },
  ];

  return (
    <aside className="w-64 h-full bg-blue-500 text-white p-4">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index} className={router.pathname === item.path ? 'bg-blue-700 rounded-md' : ''}>
            <Link href={item.path} legacyBehavior>
              <a className="block p-4 hover:bg-blue-600 rounded-md transition duration-300">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
