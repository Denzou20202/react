import {UserComponent} from "../components/UserComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
  return (
    <>
    <UserComponent/>
      <Outlet/>
    </>
  );
};