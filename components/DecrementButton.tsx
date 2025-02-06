interface DecrementButtonProps {
    onDecrement: () => void;
  }
  
  const DecrementButton: React.FC<DecrementButtonProps> = ({ onDecrement }) => {
    return (
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        onClick={onDecrement}
      >
        Decrement
      </button>
    );
  };
  
  export default DecrementButton;
  