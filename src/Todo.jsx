import { useState } from "react";
import Navigator from "./Navigator.jsx";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    let input = document.getElementById("input").value;
    // console.log(input);
    if (input) {
      const newTodo = { id: todos.length, text: input };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      document.getElementById("input").value = "";
    }
  };
  const deleteTodo = (e) => {
    setTodos(todos.filter((todo) => todo.id !== e.id));
  };
  const todoList = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.text} <button onClick={() => deleteTodo(todo)}>Delete</button>
      </li>
    );
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h1>To Do</h1>
      <h3>Add To Do here:</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1em",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          name="todoInput"
          id="input"
          //   value={input}
          //   onChange={(e) => setInput(e.target.value)}
          style={{
            border: "none",
            borderBottom: "solid black",
            outline: "none",
            width: "20em",
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>{todoList}</ul>
      <Navigator back="/stopwatch" next="/progressbar" />
    </div>
  );
}
export default Todo;
