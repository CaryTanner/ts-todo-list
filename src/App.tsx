import React, { useState } from "react";
import { setConstantValue } from "typescript";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const deleteTodo = (id: string) => {
    const todoArr = todos.filter((todo) => todo.id !== id);
    setTodos(todoArr);
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
