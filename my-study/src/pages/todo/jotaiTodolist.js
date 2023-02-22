import { atom, useAtom } from "jotai";

const todoAtom = atom("");
const todosAtom = atom([]);

export default function Todolist() {
  const [todo, setTodo] = useAtom(todoAtom);
  const [todos, setTodos] = useAtom(todosAtom);

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // 현재 todos 배열에 새로 입력한 todo를 추가
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  };
  return (
    <>
      <h1>To-do List</h1>
      <form onSubmit={submitTodoHandler}>
        <input
          type="text"
          onChange={todoHandler}
          value={todo}
          placeholder="Please write down your to do."
        />
        <button>입력</button>
      </form>
      <div>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </>
  );
}
