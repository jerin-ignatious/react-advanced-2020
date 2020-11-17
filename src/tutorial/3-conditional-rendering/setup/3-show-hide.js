import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('show');

  const change = () => {
    setShow(!show);
    if(title === 'show'){
      setTitle('hide');
    }
    else{
      setTitle('show');
    }
  }
  return <>
    <button className='btn' onClick={() => change()}>
      {title}
    </button>
    {show && <Item/>}
  </>;
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  return <>
    <h2>window</h2>
    <h3>{size} px</h3>
  </>
}
export default ShowHide;
