import "./boxcard.css";
import StarSvg from "../../assets/icon/starsvg.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BoxCard2 = () => {
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

  const starVariants = {
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
      className="boxcard2"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="starsvg2"
        variants={starVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        <StarSvg />
      </motion.div>
      <motion.h3
        variants={headingVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        For{" "}
        <motion.a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          Holders
        </motion.a>
      </motion.h3>
      <motion.p
        variants={paragraphVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        Holding social tokens allows the individual to gain access to benefits
        including unreleased content, private communities, direct access to
        celebrity, early- access to tickets and more as well as the ability to
        trade.
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

export default BoxCard2;
