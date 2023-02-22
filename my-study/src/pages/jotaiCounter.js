import { atom, useAtom } from "jotai";

const countAtom = atom(0);

export default function Counter() {
  const [count, setCount] = useAtom(countAtom);

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
