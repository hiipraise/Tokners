import "./buying.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Buying = ({ text, count }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
  };

  const countVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
  };

  return (
    <motion.div
      className="buying"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.small
        variants={countVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        {count}
      </motion.small>
      <motion.p
        variants={textVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Buying;
