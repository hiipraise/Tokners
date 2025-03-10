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
            <Link to="/team">OUR TEAM</Link>
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
          <ToknerLogo /> Tokners
        </strong>
        <ul>
          <li>
              <X />
          </li>
          <li>
              <Telegram />
          </li>
          <li>
              <Instagram />
          </li>
          <li>
              <Reddit />
          </li>
        </ul>
        <b>&copy;2021 Tokners. All rights reserved</b>
      </div>
    </footer>
  );
};

export default Footer;
