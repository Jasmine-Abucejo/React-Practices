import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Todo() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const back = () => {
    navigate("/stopwatch");
  };
  const next = () => {
    navigate("/progressbar");
  };
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
  const todoList = todos.map((todo, index) => {
    return (
      <li key={todo.id}>
        {todo.text} <button onClick={() => deleteTodo(todo)}>Delete</button>
      </li>
    );
  });
  return (
    <div>
      <h1>To Do</h1>
      <h3>Add To Do here:</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1em",
          gap: "90em",
        }}
      >
        <button style={{ padding: "1em" }} onClick={back}>
          Previous
        </button>
        <button style={{ padding: "1em" }} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Todo;
