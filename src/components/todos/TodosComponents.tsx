import {useEffect, useState} from "react";
import type {ITodoModel} from "../../models/ITodoModel.ts";
import {loadTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todo/TodoComponent.tsx";

export const TodosComponents = () => {
  const [todos, setTodos] =  useState<ITodoModel[]>([])
  useEffect(() => {
    loadTodos().then(value => setTodos(value))
  }, [])
  return (
    <div>
      {
        todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
      }
    </div>
  );
};