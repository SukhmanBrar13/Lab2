import React from "react";

interface IncrementButtonProps {
  onIncrement: () => void;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
  return (
    <button
      onClick={onIncrement}
      style={{
        padding: 10,
        backgroundColor: "blue",
        color: "white",
        borderRadius: 5,
      }}
    >
      Increment
    </button>
  );
};

export default IncrementButton;
