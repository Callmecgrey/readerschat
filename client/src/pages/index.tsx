import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 p-4 text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to ReadersChat</h1>
        <p className="text-2xl mb-10">Connect with other readers, chat, and rate novels.</p>
        <div className="flex space-x-4">
          <Link href="/login" legacyBehavior>
            <a className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-200 transition duration-300">Login</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="px-8 py-3 bg-white text-green-500 font-semibold rounded-full hover:bg-gray-200 transition duration-300">Signup</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
