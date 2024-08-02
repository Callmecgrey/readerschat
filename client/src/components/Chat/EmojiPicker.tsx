import React from 'react';

const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'];

const EmojiPicker: React.FC = () => {
  return (
    <div className="p-2 border-t border-gray-300 flex">
      {emojis.map((emoji, index) => (
        <button key={index} className="text-xl p-1">{emoji}</button>
      ))}
    </div>
  );
};

export default EmojiPicker;
