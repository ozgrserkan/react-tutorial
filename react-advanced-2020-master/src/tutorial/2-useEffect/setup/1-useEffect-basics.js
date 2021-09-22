import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEFFect");
    if (value > 1) {
      document.title = `Message (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  });

  console.log("render component");
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        +
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
