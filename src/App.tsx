import './App.css'
import Menu from "./components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <Menu/>
      Main page
      <Outlet/>

    </>
  )
}

export default App