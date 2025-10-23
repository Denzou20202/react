import {useFetch} from "../hooks/useFetch.tsx";
import type {IUser} from "../models/IUser.tsx";

export const UsersComponent = () => {
  const users =
    useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', [])

  return (
    <>
      {
        users.map((user) => (
          <div key={user.id}>
            {user.id} : {user.username}
          </div>
        ))
      }
    </>
  );
};