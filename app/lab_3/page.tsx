"use client";

import { useState } from "react";
import IncrementButton from "@components/IncrementButton"; // Import the IncrementButton
import DecrementButton from "@components/DecrementButton"; // Import the DecrementButton

const Lab3 = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <div className="text-4xl font-semibold mb-4">{count}</div>
      <div className="flex gap-4">
        <IncrementButton onIncrement={increment} />
        <DecrementButton onDecrement={decrement} />
      </div>
    </div>
  );
};

export default Lab3;
