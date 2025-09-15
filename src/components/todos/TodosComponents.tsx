import {useEffect, useState} from "react";
import type ITodoModel from "../../models/ITodoModel.tsx";
import {TodoComponent} from "../todo/TodoComponent.tsx";
import {loadTodos} from "../../services/api.service.ts";

export const TodosComponents = () => {
  const [todos, setTodos] = useState<ITodoModel[]>([])
  useEffect(() => {
    async function fetchTodos () {
      const allTodos = await loadTodos()
      setTodos(allTodos)
    }
    fetchTodos()
  }, [])
  return (
    <div>
      {
        todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)
      }
    </div>
  );
};