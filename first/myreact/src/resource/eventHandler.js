import React from "react";
import ReactDom from "react-dom";

import './index.css';

const books = [
{
  id : 1,
  img : "https://images-na.ssl-images-amazon.com/images/I/519RD7UsnZL._AC_SX184_.jpg",
  title : "Diary of a Minecraft Zombie Book 2",
  author : "Zack Zombie"
},
{
  id : 2,
  img : "https://images-na.ssl-images-amazon.com/images/I/51jPEqMYq7L._AC_SX184_.jpg",
  title : "Super Mario Official Sticker Book (Nintendo)",
  author : "Paperback"
}
]

const Navbar = () =>{
  return(
    <div className="nav">
      <h2 className="nav-text">
        Book Shelf
      </h2>
    </div>
  )
}

function BookList(){
  return(
    <>
      <Navbar/>
      <section className="booklist">
        {books.map((book,index)=>{
          return <Book key={book.id} {...book} />
        })}
      </section>
    </>
  )
}

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
      console.log(totle);
    }}>
      <img src={img} alt=""/>
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={() => complexHandler(author)}>More complex</button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById("root"));
