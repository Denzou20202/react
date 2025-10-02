import {Link, Outlet} from "react-router-dom";

export const UsersPage = () => {
  return (
    <div>
      <h3>Users</h3>
      <ul>
        <li><Link to="/users/jsonplaceholder">JsonPlaceholder</Link></li>
        <li><Link to="/users/dummyjson">DummyJson</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
};