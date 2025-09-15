import type ITodoModel from "./ITodoModel.tsx";

export interface ITodosModel {
  todos: ITodoModel[]
  total: number
  skip: number
  limit: number
}