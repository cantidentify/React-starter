import React from "react";
import ReactDom from "react-dom";

import './index.css';

import { books } from './books.js'
import Book from './Book.js'

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



ReactDom.render(<BookList />, document.getElementById("root"));
