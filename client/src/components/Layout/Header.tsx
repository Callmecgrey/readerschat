import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold">ReadersChat</h1>
      <nav>
        {user ? (
          <div className="flex items-center space-x-4">
            <span>{user.username}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link href="/login" legacyBehavior>
              <a className="px-4 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition duration-300 mr-2">Login</a>
            </Link>
            <Link href="/signup" legacyBehavior>
              <a className="px-4 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition duration-300">Signup</a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
