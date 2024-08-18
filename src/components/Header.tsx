import { navigationMenu } from "../utils/navigationMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {navigationMenu.map((item, index) => (
          <li key={index}>
            <Link to={item?.path}>{item?.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
