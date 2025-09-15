import type {FC} from "react";
import type ITodoModel from "../../models/ITodoModel.tsx";
type PropsTodo = {
  todo: ITodoModel
}

export const TodoComponent:FC<PropsTodo> = ({todo:{id, todo, completed}}) => {
  return (
    <div className='text-2xl border-2'>
      {id} - {todo} <br/>
      {completed.toString()}
    </div>
  );
};