import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('narutooooo');
  const handleClick = () => {
    if(text === 'narutooooo'){
      setText('sasukeeeee');
    }
    else{
      setText('narutooooo');
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
