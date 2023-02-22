import {
  atom,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";

// atom() -> 전역으로 설정 가능. 따로 파일 만들어서 활용성을 높일 수 있다.
const counterState = atom({
  key: "counterState",
  default: 0,
});

export default function CounterState() {
  //   const [count, setCount] = useRecoilState(counterState);
  const count = useRecoilValue(counterState);
  const setCount = useSetRecoilState(counterState);

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
