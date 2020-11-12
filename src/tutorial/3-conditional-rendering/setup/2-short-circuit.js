import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
  <>
    <h2>{firstValue}</h2>
  <h2>value: {secondValue}</h2>
  </>
  );
};

export default ShortCircuit;
