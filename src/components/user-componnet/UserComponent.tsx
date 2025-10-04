import {useNavigate} from "react-router-dom";
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

interface PropsUser {
  user: IUser
}

export const UserComponent:FC<PropsUser> = ({user}) => {
  const navigation = useNavigate()

  const onButtonClickNavigate = () => {
    navigation('/users/' + user.id + '/carts')
  }

  return (
    <div className='border-1 w-80 flex items-center'>
      <div key={user.id} className='w-40'>
        <p>userID: {user.id}</p>
        <img

          src={user.image}
          alt={user.firstName}
          width='64'
          height='64'

        />
        {user.username} <br/>
        {user.email} <br/>
        <button className='border-2 cursor-pointer' type="button" onClick={onButtonClickNavigate}>User cart </button>
      </div>
    </div>
  );
};