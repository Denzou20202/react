import {Link} from "react-router-dom";

export const Menu = () => {
  return (
    <ul>
      <li>
        <Link to={'/'}> Home Page</Link> <br/>
        <Link to={'/users'}>Users</Link>
      </li>
    </ul>
  );
};