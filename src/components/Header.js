import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <div className="header">
        Catalog Viewer
     
      <Link className="no-underline" to={"/login"}>
        <span>Login</span>
      </Link>
      <Link className='no-underline' to={"/"}>
        <span>Sign Up</span>
      </Link>
    </div>
  );
};

export default Header;
