import {Link} from "react-router-dom";

export const Menu = () => {
  return (
      <div >
        <ul className="flex items-center justify-around text-3xl">
          <li><Link to={'/'}>Home Page</Link></li>
          <li><Link to={'/users'}>Users Page</Link></li>
          <li><Link to={'/posts'}>Posts Page</Link></li>
          <li><Link to={'/comments'}>Comments Page</Link></li>
          <li><Link to={'/complex'}>Complex Page</Link></li>
        </ul>
        <hr/>
      </div>
  );
};