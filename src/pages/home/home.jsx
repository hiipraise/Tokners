import "./home.css";
import Toknermockup from "../../assets/image/toknermockup";
import BoxCard from "../../components/boxcard/boxcard";
import BoxCard2 from "../../components/boxcard/boxcard(2)";
import QuarterReview from "../../components/quarterreview/quarterreview";
import { toknerData } from "../../data/toknerData";
import ToknerLogo from "../../assets/icon/toknerlogo";
import { Link } from "react-router-dom";
import { phaseData } from "../../data/toknerData";
import PresaleBox from "../../components/presalebox/presalebox";
import { toBuyData } from "../../data/toknerData";
import Buying from "../../components/buying/buying";
import NavBar from "../../components/navbar/navbar";
import { motion } from "framer-motion";
import Footer from "../../components/footer/footer";
import BlurBg from "../../assets/image/blurbg";

const Home = () => {
  return (
    <>
      <BlurBg />
      <NavBar />
      <div className="home_page">
        <motion.div
          className="heropage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <motion.small
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Al Tokners we are
            </motion.small>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Reimagining social media through the power of the blockchain.
            </motion.h2>
            <motion.p
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non fungible
              Tokens that can be owned and traded on the Tknrs network
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
          <motion.div
            className="che"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Toknermockup />
          </motion.div>
        </motion.div>

        <div className="boxmaincard">
          <BoxCard />
          <BoxCard2 />
        </div>

        <div className="colorcombin-box">
          <div className="maincolorcombine"></div>
          <div className="combine-detail">
            <h4>What makes us different?</h4>
            <p>
              There are several thousand celebrities and creators on twitter,
              tiktok, Instagram and YouTube with followings in the millions who
              we would be actively engaging before we go viral.
              <br />
              <br />
              We would get them on our platform and they would see the
              opportunity to create a fan driven digital economy where their
              digital content can be traded as NFTs.
            </p>
          </div>
        </div>

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
                    Cryptocurrency adoption is at less than 1% of the global
                    world population with some countries and entities actively
                    fighting against its mass adoption and the smartest
                    developers and nerds holding the fort.
                  </b>
                </p>
                <Link to="/article" onClick={() => window.scroll(0, 0)}>
                  <button className="readmore">Read More</button>
                </Link>
              </div>
              <div className="holdingphoneimg"></div>
            </div>
            <div className="muitlcolor-boxcard">
              <div className="Presale-card">
                <b>Presale Details</b>
                <div className="phasedatabox">
                  {phaseData.length &&
                    phaseData.map((product, index) => (
                      <PresaleBox
                        key={index}
                        quarter={product.quarter}
                        date={product.date}
                        phase={product.phase}
                        hardCap={product.hardCap}
                        softCap={product.softCap}
                        backgroundColor={product.backgroundColor}
                        boxShadow={product.boxShadow}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="buy">
          <b>How to buy</b>
          <div>
            {toBuyData.length &&
              toBuyData.map((product, index) => (
                <Buying key={index} text={product.text} count={product.count} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
