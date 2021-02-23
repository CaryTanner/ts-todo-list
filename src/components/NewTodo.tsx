import React, { useRef } from "react";

type newTodoProps = {
  addTodo: (todoText: string) => void;
};

const NewTodo: React.FC<newTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Enter todo</label>
        <input ref={inputRef} type="text" name="todo-text" id="todo-text" />
      </div>

      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
