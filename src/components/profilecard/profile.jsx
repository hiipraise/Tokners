import "./profile.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Profile = ({ name, position, img }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="profiledetails"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        variants={textVariants}
        animate={isInView ? "visible" : "hidden"}
      >
        <b>{name}</b>
        <small>{position}</small>
      </motion.div>
      <motion.img
        variants={imageVariants}
        animate={isInView ? "visible" : "hidden"}
        src={img}
        alt={name}
      />
    </motion.div>
  );
};

export default Profile;
