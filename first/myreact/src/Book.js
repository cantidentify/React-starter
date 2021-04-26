import React from 'react'

const Book = (props) => {
    // React EventHandler
    const {img,title,author} = props
  
    const clickHandler = (e) =>{
      // e = event
      console.log(e);
      console.log(e.target);
      alert('hello world');
    }
    const complexHandler = (author) => {
      // Can't send param normally becaus javascript will invoke function all time
      alert(author)
    }
   
    return(
      <article className="book" onMouseOver={()=>{
        console.log(title);
      }}>
        <img src={img} alt=""/>
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>reference example</button>
        <button type="button" onClick={() => complexHandler(author)}>More complex</button>
      </article>
    )
  }

export default Book
