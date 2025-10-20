import {Link} from "react-router-dom";

export const Menu = () => {
  return (
    <div >
      <ul className="flex items-center justify-around text-3xl">
        <li><Link to={'/'}>Home Page</Link></li>
        <li><Link to={'/login'}>Login Page</Link></li>
        <li><Link to={'/auth/resources'}>Resource Page</Link></li>
      </ul>
      <hr/>
    </div>
  );
};