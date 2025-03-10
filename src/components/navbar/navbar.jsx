import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import ToknerLogo from "../../assets/icon/toknerlogo";
import MenuBar from "../../assets/icon/menubar";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="logo_ul">
        <strong>
          <Link to="/">
            {" "}
            <ToknerLogo />
            Tokners
          </Link>{" "}
        </strong>
        <ul className={menuOpen ? "ul open" : "ul"}>
          <li>
            <Link to="/team">Our Team</Link>{" "}
          </li>
          {/* <li>
            <Link to="/token">Tokens</Link>
          </li> */}
          {/* <li>
            <a href="#">Connect Wallet</a>
          </li>
          <li>
            <a href="#">Lightpaper</a>
          </li> */}
        </ul>
      </div>
      <div className="log-btn">
        <a
          className="sign-in-a"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/auth");
          }}
        >
          Sign In
        </a>

        <Button text="Sign Up" onClick={() => navigate("/auth")} />
      </div>
      <a className="menubar" href="#" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <span className="close-icon">✖</span> : <MenuBar />}
      </a>
    </nav>
  );
};

export default NavBar;
