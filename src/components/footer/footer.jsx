import Instagram from "../../assets/icon/instagram";
import Reddit from "../../assets/icon/reddit";
import Telegram from "../../assets/icon/telegram";
import ToknerLogo from "../../assets/icon/toknerlogo";
import X from "../../assets/icon/x";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="nav-links">
        <ul>
          <li>
            <Link onClick={() => window.scroll(0, 0)} to="/team">
              OUR TEAM
            </Link>
          </li>

          {/* <li>
            <Link to="/token">TOKENS</Link>
          </li> */}

          {/* <li>
            <Link to="#">CONNECT WALLET</Link>
          </li>
          
          <li>
            <Link to="#">LIGHTPAPER</Link>
          </li> */}
        </ul>
      </div>
      <div className="footer-header">
        <strong>
          <Link
            onClick={() => window.scroll(0, 0)}
            to="/"
            className="footer-logo"
          >
            <ToknerLogo />
            Tokners
          </Link>
        </strong>
        <ul>
          {[<X />, <Telegram />, <Instagram />, <Reddit />].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <b>&copy;2025 Tokners. All rights reserved</b>
      </div>
    </footer>
  );
};

export default Footer;
