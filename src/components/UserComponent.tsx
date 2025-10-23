import {type FC, memo} from "react";
// оборачиваем компонент в функцию memo,
// чтобы он не перерисовывался (не рендерился) лишний раз,
// если его пропсы не изменились, для оптимизации производительности

export const UserComponent:FC<{fun: () => void, arr:number[]}> = memo(({arr}) => {
  console.log('User')
  console.log(arr)
  return (
    <div>
      User
    </div>
  );
})