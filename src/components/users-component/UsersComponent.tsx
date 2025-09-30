import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/general.api.service.ts";
import {UserComponent} from "./UserComponent.tsx";
import type {IBaseModelType} from "../../models/IBaseModelType.ts";


export const UsersComponent = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    getAll<IBaseModelType & {users: IUser[]}>('/users')
      .then(({users}) => setUsers(users))
  }, [])

  return (
    <div>
      {
        users.map((user: IUser) => <UserComponent
          key={user.id}
          user={user}
        />)
      }
    </div>
  );
};