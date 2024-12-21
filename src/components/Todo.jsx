import { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from localStorage or initialize an empty array
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTask = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "not-completed") return !todo.completed;
    return true; // "all"
  });

  return (
    <div className="todo">
      <div className="head">
        <h3>Todos</h3>
        <i
          className="bx bx-plus"
          onClick={addTodo}
          style={{ cursor: "pointer" }}
        ></i>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not Completed</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Add new todo"
        className="input-todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : "not-completed"}
          >
            <p>{todo.text}</p>
            <i
              className={todo.completed ? "bx bx-check" : "bx bx-x"}
              onClick={() => toggleCompletion(todo.id)}
              style={{ cursor: "pointer" }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;


