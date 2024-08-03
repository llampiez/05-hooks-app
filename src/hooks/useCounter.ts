import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  const decrementCounter = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  return {
    counter,
    incrementCounter,
    resetCounter,
    decrementCounter,
  };
};
