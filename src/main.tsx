import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersJsonPlaceholder from "./components/pages/UsersJsonPlaceholder.tsx";
import UsersDummyJson from "./components/pages/UsersDummyJson.tsx";
import PostsJsonPlaceholder from "./components/pages/PostsJsonPlaceholder.tsx";
import PostsDummyJson from "./components/pages/PostsDummyJson.tsx";
import CommentsJsonPlaceholder
  from "./components/pages/CommentsJsonPlaceholder.tsx";
import CommentsDummyJson from "./components/pages/CommentsDummyJson.tsx";

createRoot(document.getElementById('root')!)
  .render(<BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App/>}>
        <Route path="/users/jsonplaceholder" element={<UsersJsonPlaceholder />} />
        <Route path="/users/dummyjson" element={<UsersDummyJson />} />
        <Route path="/posts/jsonplaceholder" element={<PostsJsonPlaceholder />} />
        <Route path="/posts/dummyjson" element={<PostsDummyJson />} />
        <Route path="/comments/jsonplaceholder" element={<CommentsJsonPlaceholder />} />
        <Route path="/comments/dummyjson" element={<CommentsDummyJson />} />
      </Route>
    </Routes>
</BrowserRouter>)