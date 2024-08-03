import React from 'react';
import ChatWindow from '../components/Chat/ChatWindow';
import DashboardLayout from '../components/Layout/DashboardLayout';

const ChatPage: React.FC = () => {
  return (
    <DashboardLayout>
      <ChatWindow />
    </DashboardLayout>
  );
};

export default ChatPage;
