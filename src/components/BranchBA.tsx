import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const BranchBA = () => {
  const {changeTheme} = useContext(MyContext)

  const handlerDark = () => {
    changeTheme('dark')
  }
  const handlerLight = () => {
    changeTheme('light')
  }
  return (
    <div>
      <button onClick={handlerDark}>Dark theme</button>
      <button onClick={handlerLight}>Light theme</button>
    </div>
  );
};