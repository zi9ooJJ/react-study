import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </>
  );
}
