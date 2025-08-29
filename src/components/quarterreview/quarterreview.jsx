import "./quarterreview.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QuarterReview = ({
  quarter,
  year,
  backgroundColor,
  boxShadow,
  tasks,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true }); // Animate only once

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const quarterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.2 } },
  };

  const dotYearVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.4 } },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.6 },
    },
  };

  const listItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="quarterbox"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="quarter-year">
        <motion.p
          className="quarter"
          style={{
            backgroundColor: backgroundColor,
            boxShadow: boxShadow,
          }}
          variants={quarterVariants}
          animate={isInView ? "visible" : "hidden"}
        >
          {quarter}
        </motion.p>
        <motion.p
          className="dot-year"
          variants={dotYearVariants}
          animate={isInView ? "visible" : "hidden"}
        >
          <i style={{ backgroundColor: backgroundColor }}></i>
          <b>{year}</b>
        </motion.p>
      </motion.div>

      <motion.small
        className="numberlist"
        variants={listVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        {tasks && tasks.length > 0 && (
          <ol>
            {tasks.map((task, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                animate={isInView ? "visible" : "hidden"}
              >
                <strong style={{ color: backgroundColor }}>
                  {String(index + 1).padStart(2, "0")}
                </strong>{" "}
                {task}
              </motion.li>
            ))}
          </ol>
        )}
      </motion.small>
    </motion.div>
  );
};

export default QuarterReview;
