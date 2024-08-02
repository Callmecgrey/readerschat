import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl">Signup</h1>
      <form className="flex flex-col mt-4">
        <input type="text" placeholder="Username" className="p-2 border border-gray-400" />
        <input type="password" placeholder="Password" className="p-2 border border-gray-400 mt-2" />
        <button type="submit" className="p-2 mt-4 bg-blue-500 text-white">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
