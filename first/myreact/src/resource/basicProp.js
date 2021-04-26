import React from "react";
import ReactDom from "react-dom";

import './index.css';

const img = "https://images-na.ssl-images-amazon.com/images/I/519RD7UsnZL._AC_SX184_.jpg";
const title = "Diary of a Minecraft Zombie Book 2";
const author = "Zack Zombie";

function BookList(){
  return(
    <section className="booklist">
      <Book title='random title'/>
      <Book/>
    </section>
  )
}

const Book = (props) => {
  return(
    <article className="book">
      <img src={img} alt=""/>
      <h1>{props.title}</h1>
      <h4>{author}</h4>
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById("root"));
