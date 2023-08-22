import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setcounter] = useState(0);

  function increment() {
    setcounter((prev) => prev + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>

      <button className={classes.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};
