import React, { useState } from 'react';

// Defining the Counter functional component
function Counter() {
    
  // Using the useState hook to manage the count state
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Button to increment the count, onClick calls the increment function */}
      <button onClick={increment}>Increment</button>
      {/* Button to decrement the count, onClick calls the decrement function */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
