import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
  console.log('Users')

  const [users, setUsers] = useState([])

// Создаём переменную arr, в которой будет храниться мемоизированное значение.
// useMemo — Hook, который вычисляет результат функции
// один раз (или только тогда, когда изменяются зависимости), т.е. кэшируем функцию
  const arr:number[] = useMemo(() => {
    return [11, 22, 33]
  }, [])

// Создаём переменную fun, в которой сохраняется мемоизированная функция.
// useCallback — это Hook, который возвращает ту же самую функцию между рендерами,
// если её зависимости не изменились, т.е. кэшируем функцию
  const fun = useCallback(() => {
    console.log('test fun')
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
      .then(value =>
      setUsers(value))
  }, [])
  return (
    <div>
      Users List
      <UserComponent fun={fun} arr={arr}/>
    </div>
  )
}