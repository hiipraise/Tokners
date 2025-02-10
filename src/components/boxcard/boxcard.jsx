import "./boxcard.css";
import KingSvg from "../../assets/icon/kingsvg.jsx";

const BoxCard = () => {
  return (
    <div className="boxcard">
      <div className="kingsvg2">
        <KingSvg />
      </div>
      <h3>
        For <a href="#">Creators</a>
      </h3>
      <p>
        Creators can gain independence through a decentralised digital currency
        system that is dependent on growing and engaging with the community and
        also their star power. They own 10-15% of the total value of the tokens
        minted.
      </p>
      <a className="a-learn-more" href="#">
        Learn More
      </a>
    </div>
  );
};

export default BoxCard;
