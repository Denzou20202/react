import {Link} from "react-router-dom";

export const Menu = () => {
  return (
    <div className="m-2">
    <ul>
      <li>
        <Link to="/cars">Cars</Link>
      </li>
      <li>
        <Link to="/cars/create">Add Car</Link>
      </li>
    </ul>
    </div>
  );
};