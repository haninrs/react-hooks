/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useData } from "../context/user";

export const ComponenState = () => {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("hani 💣🤯");
  const user = useData();
  console.log("ini useData", user);

  // const decrement = () => {
  //   if (count === 0) {
  //     setCount(0);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  // const myFunct = () => {
  //   console.log("ini optional retrun useEffect");
  // };

  // useEffect(() => {
  //   document.title = `you click ${count} times`;
  //   myFunct();
  // }, [n

  return (
    <div>
      <h1>{name}</h1>
      </div>

      {/* <h2>{count}</h2>
      <p>you click {count} times</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrement}>decrement</button> */}
    </div>
  );
};
