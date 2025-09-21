import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById('root')!)
  .render(<BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App/>}>
        <Route path={"users"} element={<div>Users</div>}/>
        <Route path={"posts"} element={<div>Posts</div>}/>
        <Route path={"comments"} element={<div>Comments</div>}/>
        <Route path={"products"} element={<div>Products</div>}/>
      </Route>
      
    </Routes>
    
  </BrowserRouter>)