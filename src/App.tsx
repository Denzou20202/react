import './App.css'
import {BranchA} from "./components/BranchA.tsx";
import {BranchB} from "./components/BranchB.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {

  const [themeColor, setThemeColor] = useState<string>('light')

  return (
    <div>

      <MyContext.Provider value={{
        theme: themeColor,
        changeTheme: (themeValue: string) => {
          setThemeColor(themeValue)
        }
      }}>

      <BranchA/>
      <BranchB/>
      </MyContext.Provider>

    </div>
  )
}

export default App