import React from 'react';

const readers = [
  { id: 1, name: 'Reader1' },
  { id: 2, name: 'Reader2' },
  { id: 3, name: 'Reader3' }
];

const FindReaders: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Find Readers</h1>
      <ul>
        {readers.map((reader) => (
          <li key={reader.id} className="p-2 border-b border-gray-300">{reader.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FindReaders;
