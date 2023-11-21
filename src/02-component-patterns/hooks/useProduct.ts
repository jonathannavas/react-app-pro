import { useState } from 'react';

const INITIAL_VALUE = 1;
// Esto es un hook personalizado, es decir no es mas que un método que retorna algo
export const useProduct = () => {
  const [counter, setCounter] = useState(INITIAL_VALUE);
  const handleQuantityBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, INITIAL_VALUE));
  };

  return {
    counter,
    handleQuantityBy,
  };
};
