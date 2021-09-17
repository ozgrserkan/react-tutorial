import React from "react";

function Book(props) {
  const { img, title, author } = props.book;
  //attribute,eventHandler
  //onClick, onMouseOver
  function clickHandler() {
    alert("Hello World");
  }
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click
      </button>
    </article>
  );
}

export default Book;
