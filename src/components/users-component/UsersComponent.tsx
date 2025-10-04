import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import type {IUsersResponse} from "../../models/IUsersResponse.ts";
import {userService} from "../../services/api.service.ts";
import {UserComponent} from "../user-componnet/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";


export const UsersComponent = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [searchParams] = useSearchParams({page: '1'})

  useEffect(() => {
    const currentPage = searchParams.get('page') || '1'
    userService.getAllUsers(currentPage)
      .then(({users}:IUsersResponse) => {
        setUsers(users)
      } )
  }, [searchParams])

  return (
    <div  className='flex flex-wrap gap-1.5 justify-center'>
      {
        users.map((user:IUser)=> <UserComponent key={user.id} user={user}/>)
      }

    </div>
  );
};