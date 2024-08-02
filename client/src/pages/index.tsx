import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Sidebar from '../components/Layout/Sidebar';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <h1 className="text-2xl">Welcome to ReadersChat</h1>
          <p>Connect with other readers, chat, and rate novels.</p>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
