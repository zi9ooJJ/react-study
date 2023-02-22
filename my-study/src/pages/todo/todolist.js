import { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

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
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </div>
    </>
  );
}
