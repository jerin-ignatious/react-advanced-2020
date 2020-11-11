import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, s0etUser] = useState('default user');

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>Error...</h2>
  }
return <h2>{user}</h2>;
};

export default MultipleReturns;
