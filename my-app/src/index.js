import React from "react";
import ReactDom from "react-dom";

///////////////CSS

import "./index.css";

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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
function Book() {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
}

function Image() {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/71Zp9MEo6MS._AC_UL200_SR200,200_.jpg"
      alt=""
      srcset=""
    />
  );
}

function Title() {
  return <h1>1984</h1>;
}
function Author() {
  return <h4>George Orwell</h4>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
