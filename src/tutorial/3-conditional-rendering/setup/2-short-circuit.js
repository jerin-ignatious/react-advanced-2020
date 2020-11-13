import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('jerin ignatious');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
  <>
    <h2>{text || 'john doe'}</h2>
  <h2>{text && 'hello world'}</h2>
  </>
  );
};

export default ShortCircuit;
