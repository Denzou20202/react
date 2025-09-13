import type {FC} from "react";
import type {ITodoModel} from "../../models/ITodoModel.ts";

type PropsTodo = {
  todo: ITodoModel
}
export const TodoComponent:FC<PropsTodo> = ({todo: {id, title, completed}}) => {
  return (
    <div className='text-2xl border-2'>
      {id} - {title} <br/>
      {completed.toString()}
    </div>
  );
};