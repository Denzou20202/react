import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu-component/Menu.tsx";


export const MainLayout = () => {
  return (
    <div>
      <Menu/>
      <Outlet/>
    </div>
  );
};