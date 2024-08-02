import React, { createContext, useState } from 'react';

interface ChatContextType {
  messages: string[];
  sendMessage: (message: string) => void;
}

export const ChatContext = createContext<ChatContextType>({
  messages: [],
  sendMessage: () => {},
});

export const ChatProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
