import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState({
    title: "",
    desc: "",
  });

  const onChangeNewTodo = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const [todos, setTodos] = useState([
    {
      title: "1",
      desc: "안녕하세요",
      completed: false,
    },
    {
      title: "2",
      desc: "안녕하세요2",
      completed: false,
    },
  ]);

  const addTodo = () => {
    setTodos([...todos, { ...newTodo, completed: false }]);
    setNewTodo({
      title: "",
      desc: "",
    });
  };
  const toggleTodo = (title) => {
    const index = todos.findIndex((todo) => todo.title === title);
    const todo = todos.find((todo) => todo.title === title);

    setTodos([
      ...todos.slice(0, index),
      { ...todo, completed: !todo.completed },
      ...todos.slice(index + 1),
    ]);
  };

  const deleteTodo = (title) => {
    // 평상시에는 id 사용
    const index = todos.findIndex((todo) => todo.title === title);

    // 삭제 방법 1
    // const deletedTodos = todos.splice(index, 1);
    // setTodos(deletedTodos);

    // 삭제 방법 2
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <>
      <Head>
        <title>투두 앱 만들기</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>투두에요</h1>
        {todos.map((todo) => (
          <div key={todo.title}>
            <span>{todo.title}</span> | <span>{todo.desc}</span> |
            <span onClick={() => toggleTodo(todo.title)}>
              ({todo.completed ? "🅾️" : "❎"})
            </span>
            <span onClick={() => deleteTodo(todo.title)}>[삭제❌]</span>
            {/* <span onClick={() => updateTodo(todo.title)}>[수정하기]</span> */}
          </div>
        ))}
        <br />
        <h1>새 투두</h1>
        제목
        <input name="title" onChange={onChangeNewTodo} value={newTodo.title} />
        <br />
        <br />
        설명
        <input name="desc" onChange={onChangeNewTodo} value={newTodo.desc} />
        <br />
        <br />
        <button onClick={addTodo}>만들기</button>
      </div>
    </>
  );
}

// title 제목, desc 내용, complete 완료 여부
