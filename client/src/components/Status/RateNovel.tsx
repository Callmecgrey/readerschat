import React from 'react';

const RateNovel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl">Rate a Novel</h1>
      <form className="flex flex-col mt-4">
        <input type="text" placeholder="Novel Title" className="p-2 border border-gray-400" />
        <select className="p-2 border border-gray-400 mt-2">
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
        <button type="submit" className="p-2 mt-4 bg-blue-500 text-white">Rate</button>
      </form>
    </div>
  );
};

export default RateNovel;
