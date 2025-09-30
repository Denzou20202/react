import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import type {IUsersResponse} from "../../models/IUsersResponse.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {userService} from "../../services/api.services.ts";

export const UsersComponent = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    userService.getAllUsers()
      .then(({users}:IUsersResponse) => {
        setUsers(users)
      } )
  }, [])

  return (
    <div  className='flex flex-wrap gap-1.5 justify-center'>
      {
        users.map((user:IUser)=> <UserComponent key={user.id} user={user}/>)
      }

    </div>
  );
};