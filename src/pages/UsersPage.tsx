import {UsersComponent} from "../comopnents/users-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";
import {
  CartsComponents
} from "../comopnents/carts-component/CartsComponents.tsx";

export const UsersPage = () => {
  return (
    <>
    <UsersComponent/>
      <hr/>
      <CartsComponents/>
    
    </>
  );
};
