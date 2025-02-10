import "./navbar.css";
import ToknerLogo from "../../assets/icon/toknerlogo";
import MenuBar from "../../assets/icon/menubar";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import Button from "../../components/button/button";

const NavBar = () => {
  return (
    <nav>
      <div className="logo_ul">
        <strong>
          <Link to="/">
            {" "}
            <ToknerLogo />
            Tokners
          </Link>{" "}
          {/* ✅ Use Link instead of <a href=""> */}
        </strong>
        <ul>
          <li>
            <Link to="/team">Our Team</Link>{" "}
            {/* ✅ Use Link instead of <a href=""> */}
          </li>
          <li>
            <Link to="/token">Tokens</Link>
          </li>
          <li>
            <a href="#">Connect Wallet</a>
          </li>
          <li>
            <a href="#">Lightpaper</a>
          </li>
        </ul>
      </div>
      <div className="log-btn">
        <a className="sign-in-a" href="#">
          Sign In
        </a>
        <Button text={"Sign Up"} />
      </div>
      <a className="menubar" href="#">
        <MenuBar />
      </a>
    </nav>
  );
};

export default NavBar;
