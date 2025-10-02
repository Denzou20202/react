import {Link, Outlet} from "react-router-dom";

export const PostsPage = () => {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        <li><Link to="/posts/jsonplaceholder">JsonPlaceholder</Link></li>
        <li><Link to="/posts/dummyjson">DummyJson</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
};