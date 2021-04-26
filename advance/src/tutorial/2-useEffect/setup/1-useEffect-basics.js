import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value ,setValue] = useState(0)
  const [test ,setTest] = useState(0);

  useEffect(()=>{
    if(test > 1){
      document.title=`New Message(${test})`
    }
  },[value])

  return (
    <>
      <h2>{value}</h2>
      <h2>{test}</h2>
      <button className="btn" onClick={()=>setValue(value + 1)}>Increase</button>
      <button className="btn" onClick={()=>setTest(test + 1)}>Increase2</button>
    </>
  )
};

export default UseEffectBasics;
