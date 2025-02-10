import "./boxcard.css";
import StarSvg from "../../assets/icon/starsvg.jsx";

const BoxCard2 = () => {
  return (
    <div className="boxcard2">
      <div className="starsvg2">
        <StarSvg />
      </div>
      <h3>
        For <a href="#">Holders</a>
      </h3>
      <p>
        Holding social tokens allows the individual to gain access to benefits
        including unreleased content, private communities, direct access to
        celebrity, early- access to tickets and more as well as the ability to
        trade.
      </p>
      <a className="a-learn-more" href="#">Learn More</a>
    </div>
  );
};

export default BoxCard2;
