import "./boxcard.css";
import KingSvg from "../../assets/icon/kingsvg.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BoxCard = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  };

  const kingSvgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.8 } },
    hover: { scale: 1.05, color: "#yourAccentColor" }, // Add your desired hover color
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="boxcard"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="kingsvg2"
        variants={kingSvgVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        <KingSvg />
      </motion.div>
      <motion.h3
        variants={headingVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        For{" "}
        <motion.a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          Creators
        </motion.a>
      </motion.h3>
      <motion.p
        variants={paragraphVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        Creators can gain independence through a decentralised digital currency
        system that is dependent on growing and engaging with the community and
        also their star power. They own 10-15% of the total value of the tokens
        minted.
      </motion.p>
      <motion.a
        className="a-learn-more"
        href="#"
        variants={linkVariants}
        animate={isInView ? "visible" : "hidden"}
        whileHover="hover"
        whileTap="tap"
      >
        Learn More
      </motion.a>
    </motion.div>
  );
};

export default BoxCard;
