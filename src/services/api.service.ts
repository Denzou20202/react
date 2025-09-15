import type ITodoModel from "../models/ITodoModel.tsx";
import type {ITodosModel} from "../models/ITodosModel.tsx";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'

const loadTodos = async (): Promise<ITodoModel[]> => {
  const response:ITodosModel = await fetch(endpointTodos)
    .then(value => value.json())

  return response.todos
}

export {loadTodos}