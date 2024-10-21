import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  return (
    <div>
      <h3>Number is {a}</h3>
      <button
        onClick={function () {
          setA(a + 10);
        }}
      >
        Increment
      </button>
      <button
        onClick={function () {
          setA(a - 10);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
