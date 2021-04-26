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

function BookList(){
  return(
    <section className="booklist">
      {books.map((book,index)=>{
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

const Book = (props) => {
  const {img,title,author} = props
  return(
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById("root"));
