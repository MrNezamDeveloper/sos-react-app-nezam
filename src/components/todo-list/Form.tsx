import React, { useState, useEffect, useRef } from "react";
import TodoCreator from "./FormInput";
import TodoList from "./List";


export interface ITodos {
  text?: string;
  isCompleted?: boolean;
  isEditing?: boolean;
}

const Form: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([
    {
      text: "Learn about React",
      isCompleted: false,
      isEditing: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      isEditing: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      isEditing: false,
    },
  ]);
  const inputRef = useRef<any>();
  const noteRef = useRef<any>({});
  const [isInputEmpty, setInputEmpty] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTodo(newTodo);
    clearInput();
    inputRef.current.focus();
  };

  const preventSubmit = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const addTodo = (text: string) => {
    if (text !== "") {
      const newTodos = [...todos, { text }];
      setNewTodo("");
      setTodos(newTodos);
    } else {
      console.log("text", text);
      setInputEmpty(true);
    }
  };

  const removeTodo = (inx: number) => {
    const newArr = [...todos];
    newArr.splice(inx, 1);
    setTodos(newArr);
  };

  const completeTodo = (inx: number) => {
    const newTodos = [...todos];
    newTodos[inx].isCompleted = !newTodos[inx].isCompleted;
    setTodos(newTodos);
  };

  const editTodo = (inx: number) => {
    const newTodos = [...todos];
    newTodos[inx].isEditing = !newTodos[inx].isEditing;
    setTodos(newTodos);
  };

  const saveTodo = (inx: number) => {
    const newTodos = [...todos];
    newTodos[inx].isEditing = !newTodos[inx].isEditing;
    newTodos[inx].text = noteRef.current[inx].value;
    setTodos(newTodos);
  };

  const clearInput = () => {
    setNewTodo("");
  };

  const setTodo = (todo: React.SetStateAction<string>) => {
    setInputEmpty(false);
    setNewTodo(todo);
  };

  useEffect(() => {}, [todos]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <TodoCreator
        todo={newTodo}
        setTodo={setTodo}
        clearInput={clearInput}
        inputRef={inputRef}
        isInputEmpty={isInputEmpty}
        preventSubmit={preventSubmit}
      />

      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        editTodo={editTodo}
        deleteTodo={removeTodo}
        saveTodo={saveTodo}
        noteRef={noteRef}
        preventSubmit={preventSubmit}
      />
    </form>
  );
};

export default Form;
