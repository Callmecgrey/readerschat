import React, { useState } from 'react';
import { FiSend, FiMic, FiUpload } from 'react-icons/fi';
import Message from './Message';
import ChatHeader from './ChatHeader';
import EmojiPicker from 'emoji-picker-react';

interface ChatWindowProps {
  messages: { sender: string, content: string }[];
  user: { username: string };
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, user }) => {
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiObject: any) => {
    setInput(input + emojiObject.emoji);
  };

  const handleUploadClick = () => {
    // Handle file upload logic here
  };

  const handleMicClick = () => {
    // Handle voice note recording logic here
  };

  return (
    <div className="flex flex-col h-full">
      <ChatHeader user={user} />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-200">
        {messages.map((message, index) => (
          <Message key={index} message={message} isMine={message.sender === 'me'} />
        ))}
      </div>
      <div className="p-4 bg-white flex items-center">
        <div className="relative">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😀
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-full mb-2">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full p-2 border rounded-md pr-12 pl-12"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={handleUploadClick}>
            <FiUpload />
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={handleMicClick}>
            <FiMic />
          </button>
        </div>
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
