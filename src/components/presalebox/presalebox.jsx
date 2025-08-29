import "./presalebox.css";
import { motion } from "framer-motion";

const PresaleBox = ({
  quarter,
  backgroundColor,
  boxShadow,
  phase,
  date,
  exchange,
  softCap,
  hardCap,
}) => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  };

  const quarterVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  const phaseDateVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.4 } },
  };

  const bnbVariants = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.6 } },
  };

  return (
    <motion.div
      className="phasecard"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.p
        className="quarter"
        style={{
          backgroundColor: backgroundColor,
          boxShadow: boxShadow,
        }}
        variants={quarterVariants}
      >
        {quarter}
      </motion.p>
      <motion.div className="phase-date" variants={phaseDateVariants}>
        <p className="phase">{phase}</p>
        <p className="date">{date}</p>
      </motion.div>
      <motion.div className="bnb" variants={bnbVariants}>
        <p className="bnbexchange">{exchange}</p>
        <p className="softcap">
          <span>Soft cap: </span>
          {softCap}
        </p>
        <p className="hardcap">
          <span>Hard cap: </span>
          {hardCap}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PresaleBox;
