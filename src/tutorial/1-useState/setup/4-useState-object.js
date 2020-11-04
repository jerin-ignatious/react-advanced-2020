import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'naruto', age:17, message:'ore wa hokage ni naru'});
  const changeMessage = () => {
    if(person.message === 'ore wa hokage ni naru'){
     setPerson({...person, message:'kore wa ore no nindou da'});
    }
    else{
      setPerson({...person, message:'ore wa hokage ni naru'});
    }
  }
  return <>
  <h2>{person.name}</h2>
  <h2>{person.age}</h2>
  <h3>{person.message}</h3>
  <button className='btn' onClick={changeMessage}>
    change message
  </button>
  </>
};

export default UseStateObject;
