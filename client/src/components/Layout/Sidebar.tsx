import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 p-4 bg-gray-200">
      <ul>
        <li><a href="/chat" className="text-blue-500">Chat</a></li>
        <li><a href="/find-readers" className="text-blue-500">Find Readers</a></li>
        <li><a href="/upload-status" className="text-blue-500">Upload Status</a></li>
        <li><a href="/rate-novel" className="text-blue-500">Rate Novel</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
