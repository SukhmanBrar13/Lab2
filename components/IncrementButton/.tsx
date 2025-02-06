import React from "react";

interface IncrementButtonProps {
    onIncrement: () => void;
  }
  
  const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
    return (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={onIncrement}
      >
        Increment
      </button>
    );
  };
  
  export default IncrementButton;
  