import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShowError = () =>{
  return <h2>There is a error in this page</h2>
}

const ShortCircuit = () => {
  const [text,setText] = useState('');
  const [isError ,setIsError] = useState<boolean>(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && ' hello world';
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  console.log('hi')
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || 'Atip'}</h1>
      <button className="btn" onClick={()=>setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError? <ShowError/> : <h2>No error</h2> }
    </>
  )
};

export default ShortCircuit;
