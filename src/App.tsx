import React from 'react';
import './style.css';

export default function App() {
  const findMaxValue = (numbers) => {
    if (numbers.length === 0) {
      // Return an appropriate value when the array is empty
      return null;
    }

    let max = numbers[0]; // Assume the first number is the maximum

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        // If the current number is greater than the current maximum,
        // update the maximum value
        max = numbers[i];
      }
    }

    return max;
  };

  const numbers = [15, 32, 47, 24, 91];
  const maxValue = findMaxValue(numbers);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Maximum value: {maxValue}</p>
    </div>
  );
}
