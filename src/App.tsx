import './App.css'
import './components/coursesTitle.css'
import coursesTitleArray from "./components/coursesTitle.tsx";

function App() {
  return (
    <>
      {
        coursesTitleArray.map(value => <li>{value}</li>)
      }
    </>
  )
}

export default App
