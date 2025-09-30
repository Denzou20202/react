import {Outlet} from "react-router-dom";
import {Menu} from "../comopnents/menu-component/Menu.tsx";

export const MainLayout = () => {
  return (
    <div>
      <Menu/>
      <Outlet/>
    </div>
  );
};