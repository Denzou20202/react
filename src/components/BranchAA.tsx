import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import './BranchAA.css'

export const BranchAA = () => {

  const {theme} =  useContext(MyContext)
  return (
    <div className={theme}>
      Your's page will look like this, when you change Theme
    </div>
  );
};