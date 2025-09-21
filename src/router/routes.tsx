import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

export const routes = createBrowserRouter([
  {
    path: "/", element: <App/>, children: [
      {path: "users", element: <div>Users</div>},
      {path: "posts", element: <div>Posts</div>},
      {path: "comments", element: <div>Comments</div>},
      {path: "products", element: <div>Products</div>}
    ]
  }
])