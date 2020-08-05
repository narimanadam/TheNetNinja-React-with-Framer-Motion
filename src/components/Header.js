import React from "react";
import { motion } from "framer-motion";
import { svgVariants, pathVariants } from "../helpers/variants";

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7} // the higher the number the easier to drag
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{
          y: -1,
        }}
        transition={{ delay: 0.2, type: "tween" }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;