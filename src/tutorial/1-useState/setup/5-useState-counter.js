import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return <>
    <section style={{margin:'4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value+1)}>increase</button>
      <button className='btn' onClick={() => setValue(0)}>reset</button>
      <button className='btn' onClick={() => setValue(value-1)}>decrease</button>
    </section>
  </>;
};

export default UseStateCounter;
