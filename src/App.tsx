import './App.css'
import './components/coursesTitle.css'
import coursesTitleArray from "./components/coursesTitle.tsx";

function App() {
  return (
    <>
      <ul>

      {
        coursesTitleArray.map((value, index) => <li key={index}>{value}</li>)
      }

      </ul>
    </>
  )
}

export default App
