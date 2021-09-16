import React from "react";
import ReactDom from "react-dom";

///////////////CSS

import "./index.css";

////////////// setup vars

const books = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    img: "https://images-na.ssl-images-amazon.com/images/I/71Zp9MEo6MS._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "Mutlu Olma Sanatı",
    author: "Arthur Schopenhauer",
    img: "https://images-na.ssl-images-amazon.com/images/I/41DHXGEEnpL._SX329_BO1,204,203,200_.jpg",
  },

  {
    id: 3,
    title: "Zacharius Usta",
    author: "Vules Verne ",
    img: "https://images-na.ssl-images-amazon.com/images/I/51ujS6+lJaL._SX292_BO1,204,203,200_.jpg",
  },
];

// function Greeting() {
//   return <h2>This is Serkan and this is my first components.</h2>;
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world");
// };

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello people</h1>
//       <ul>
//         <li>
//           <a href="https://www.google.com.tr/">Hello World</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function Greeting() {
//   return (
//     <section>
//       <article>
//         <h1>Hello people</h1>
//         <ul>
//           <li>
//             <a href="https://www.google.com.tr/">Hello World</a>
//           </li>
//         </ul>
//       </article>
//     </section>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello people</h1>
//       <ul>
//         <li>
//           <a href="https://www.google.com.tr/">Hello World</a>
//         </li>
//         <img src="" alt="" />
//       </ul>
//     </div>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <h1>Hello world</h1>
//       <p>This is my messsage</p>
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}
function Book(props) {
  const { img, title, author } = props.book;
  //attribute,eventHandler
  //onClick, onMouseOver
  function clickHandler() {
    alert("Hello World");
  }
  function complexExample(author) {}
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click
      </button>
    </article>
  );
}
ReactDom.render(<BookList />, document.getElementById("root"));
