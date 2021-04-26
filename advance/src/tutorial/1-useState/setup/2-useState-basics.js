import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title');
  
  const handleClick = () =>{
      if (text === "random title"){
        setText('hello world')
      }
      else{
        setText('random title')
      }
  }
  return(
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>Change title</button>
    </>
  )
};

export default UseStateBasics;
