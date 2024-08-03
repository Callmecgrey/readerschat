import React from 'react';

const Feeds: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl">Upload Status</h1>
      <form className="flex flex-col mt-4">
        <textarea placeholder="What's on your mind?" className="p-2 border border-gray-400"></textarea>
        <button type="submit" className="p-2 mt-4 bg-blue-500 text-white">Post</button>
      </form>
    </div>
  );
};

export default Feeds;
