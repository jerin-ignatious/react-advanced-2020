import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('jerin ignatious');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
  <>
    <h2>{text || 'john doe'}</h2>
    <button className='btn' onClick={() => setIsError(!isError)}>
      toggle error
    </button>
  <h2>{isError && 'error..'}</h2>
  </>
  );
};

export default ShortCircuit;
