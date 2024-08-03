import React, { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import UserSidebar from '../components/Chat/UserSidebar';
import ChatWindow from '../components/Chat/ChatWindow';

const ChatPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<{ username: string } | null>(null);
  const users = [
    { username: 'John Doe' },
    { username: 'Jane Smith' },
    { username: 'Michael Johnson' }
  ]; // Dummy user data
  const messages = [
    { sender: 'John Doe', content: 'Hello!' },
    { sender: 'me', content: 'Hi there!' },
    { sender: 'John Doe', content: 'How are you?' },
    { sender: 'me', content: 'I am good, thanks!' }
  ]; // Dummy message data

  return (
    <DashboardLayout>
      <div className="flex h-full">
        <UserSidebar users={users} onSelectUser={setSelectedUser} />
        <div className="flex-1">
          {selectedUser ? (
            <ChatWindow messages={messages} user={selectedUser} />
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>Select a user to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatPage;
