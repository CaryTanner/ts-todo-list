import React from "react";

interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { todos, deleteTodo } = props;

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
