import useCounter from "../hooks/counter";

export const ComponentCounter = () => {
  const [count, increment, decerement] = useCounter(0, 1);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <h1>count : {count}</h1>
      <button onClick={decerement}>decerement</button>
    </div>
  );
};
