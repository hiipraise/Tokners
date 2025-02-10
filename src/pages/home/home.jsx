import "./home.css";
import Toknermockup from "../../assets/image/toknermockup";
import BoxCard from "../../components/boxcard/boxcard";
import BoxCard2 from "../../components/boxcard/boxcard(2)";
import muitlcolor from "../../assets/image/muitlcolor.png";
import QuarterReview from "../../components/quarterreview/quarterreview";
import { toknerData } from "../../data/toknerData";
import ToknerLogo from "../../assets/icon/toknerlogo";
import { Link } from "react-router-dom";
import { phaseData } from "../../data/toknerData";

const Home = () => {
  return (
    <div className="home_page">
      <div className="heropage">
        <div>
          <small>Al Tokners we are</small>
          <h2>Reimagining social media through the power of the blockchain.</h2>
          <p>
            We are creating social media 3.0 with influencers, celebrities and
            creators being able to launch their own digital currency by simply
            creating a profile with media content posted as Non fungible Tokens
            that can be owned and traded on the Tknrs network
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="che">
          <Toknermockup />
        </div>
      </div>
      {/*  */}
      <div className="boxmaincard">
        <BoxCard />
        <BoxCard2 />
      </div>
      {/*  */}
      <div className="colorcombin-box">
        <div className="maincolorcombine"></div>
        <div className="combine-detail">
          <h4>What makes us different?</h4>
          <p>
            There are several thousand celebrities and creators on twitter,
            tiktok, Instagram and YouTube with followings in the millions who we
            would be actively engaging before we go viral.
            <br />
            <br />
            We would get them on our platform and they would see the opportunity
            to create a fan driven digital economy where their digital content
            can be traded as NFTs.
          </p>
        </div>
      </div>
      {/* */}
      <div className="quarter-tokner-bg">
        <div className="quarter-tokner">
          <div className="quarter-review">
            {toknerData.length &&
              toknerData.map((quarterData, index) => (
                <QuarterReview
                  key={index}
                  quarter={quarterData.quarter}
                  year={quarterData.year}
                  tasks={quarterData.tasks}
                  backgroundColor={quarterData.backgroundColor}
                  boxShadow={quarterData.boxShadow}
                  dot={quarterData.backgroundColor}
                />
              ))}
          </div>
          <div className="toknercoming-phone">
            <div className="toknercoming">
              <h5>
                <ToknerLogo /> Tokner is coming
              </h5>
              <p>
                <b>
                  Cryptocurrency adoption is at less than 1% of the global world
                  population with some countries and entities actively fighting
                  against its mass adoption and the smartest developers and
                  nerds holding the fort.
                </b>
              </p>
              <Link to="/article">
                <button className="readmore">Read More</button>
              </Link>
            </div>
            <div className="holdingphoneimg"></div>
          </div>
          <div className="muitlcolor-boxcard">
            <img className="muitlcolor" src={muitlcolor} alt="" />
            <div className="Presale-card">
              <b>Presale Details</b>
              <div>{phaseData.lenth && phaseData.map()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
