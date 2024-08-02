import React from 'react';

const Button: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="p-2 bg-blue-500 text-white">
      {label}
    </button>
  );
};

export default Button;
