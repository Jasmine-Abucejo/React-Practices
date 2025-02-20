import { useState } from "react";
import Navigator from "./Navigator.jsx";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlineNoteAdd } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";

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
  const toggleList = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      console.log(e.target.nextElementSibling);
      e.target.nextElementSibling.classList.add(
        "line-through",
        "text-opacity-10"
      );
    } else {
      e.target.nextElementSibling.classList.remove(
        "line-through",
        "text-opacity-10"
      );
    }
  };
  const todoList = todos.map((todo) => {
    return (
      <li key={todo.id} className="  mt-4 ">
        <input
          type="checkbox"
          name="done"
          id="isDone"
          onChange={(e) => toggleList(e)}
        />
        <span>{todo.text} </span>
        <RiDeleteBin2Fill
          className="border-none  text-red-600 inline "
          onClick={() => deleteTodo(todo)}
        />
      </li>
    );
  });
  return (
    <div className="text-center flex flex-col w-screen h-screen  flex-1 bg-gradient-to-t from-lime-800 to-green-300">
      <p className="text-2xl font-extrabold mt-8 ">
        To Do <LuClipboardList className="inline" />
      </p>
      <p className="text-xl font-bold mt-8 mb-8 ">Add To Do here:</p>
      <div className="flex flex-row text-center justify-center gap-4 ">
        <input
          type="text"
          name="todoInput"
          id="input"
          //   value={input}
          //   onChange={(e) => setInput(e.target.value)}
          className="border-b-4 border-b-black outline-none text-center "
        />
        <button onClick={addTodo} className="rounded-lg p-3 bg-green-600">
          Add
        </button>
      </div>
      <div className="w-3/6 flex flex-col justify-center mx-auto overflow-y-auto">
        {" "}
        <ul className="mt-8 list-outside list-none grid grid-cols-3 gap-1  ">
          {todoList}
        </ul>
      </div>

      <Navigator back="/stopwatch" next="/progressbar" />
    </div>
  );
}
export default Todo;
