import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersJsonPlaceholder from "./components/users/UsersJsonPlaceholder.tsx";
import UsersDummyJson from "./components/users/UsersDummyJson.tsx";
import PostsJsonPlaceholder from "./components/posts/PostsJsonPlaceholder.tsx";
import PostsDummyJson from "./components/posts/PostsDummyJson.tsx";
import CommentsJsonPlaceholder
  from "./components/comments/CommentsJsonPlaceholder.tsx";
import {UsersPage} from "./components/pages/UsersPage.tsx";
import {PostsPage} from "./components/pages/PostsPage.tsx";
import {CommentsPage} from "./components/pages/CommentsPage.tsx";

createRoot(document.getElementById('root')!)
  .render(<BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App/>}>
        <Route path="/users" element={<UsersPage/>}>
          <Route path="/users/jsonplaceholder" element={<UsersJsonPlaceholder />} />
          <Route path="/users/dummyjson" element={<UsersDummyJson />} />
        </Route>
        <Route path="/posts" element={<PostsPage/>}>
          <Route path="/posts/jsonplaceholder" element={<PostsJsonPlaceholder />} />
          <Route path="/posts/dummyjson" element={<PostsDummyJson />} />
        </Route>
        <Route path="/comments" element={<CommentsPage/>}>
          <Route path="/comments/jsonplaceholder" element={<CommentsJsonPlaceholder />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>)