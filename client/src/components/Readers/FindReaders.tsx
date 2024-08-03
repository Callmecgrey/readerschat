import React, { useState } from 'react';
import { FaUser, FaSearch, FaEnvelope } from 'react-icons/fa';

const readers = [
  { id: 1, name: 'Reader1' },
  { id: 2, name: 'Reader2' },
  { id: 3, name: 'Reader3' }
];

const FindReaders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReaders = readers.filter(reader =>
    reader.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex p-4">
      {/* Readers List */}
      <div className="flex-1 mr-4">
        <h1 className="text-2xl font-bold mb-4">Find Readers</h1>
        <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search readers..."
            className="p-2 w-full border-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="space-y-2">
          {filteredReaders.length > 0 ? (
            filteredReaders.map((reader) => (
              <li key={reader.id} className="flex items-center p-3 border border-gray-300 rounded-lg bg-white shadow-sm">
                <FaUser className="text-gray-400 mr-4" />
                <div className="flex-1">
                  <p className="font-semibold">{reader.name}</p>
                </div>
                <button className="ml-2 p-1 bg-blue-500 text-white rounded-md text-sm">
                  <FaEnvelope className="inline-block mr-1" />
                  Message
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No readers found.</p>
          )}
        </ul>
      </div>

      {/* Summary Sidebar */}
      <div className="w-80 bg-white border border-gray-300 rounded-lg shadow-sm p-4">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Readers</h3>
            <p className="text-lg font-bold">{readers.length}</p>
          </div>
          {/* Add more summary sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default FindReaders;
