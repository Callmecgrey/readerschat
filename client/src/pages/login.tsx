import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to ReadersChat</h2>
        <AuthForm isLogin={true} />
        <p className="mt-6 text-center">
          Don't have an account?{' '}
          <Link href="/signup" legacyBehavior>
            <a className="text-blue-500 hover:underline">Signup</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
