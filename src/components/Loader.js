import React from "react";
import { motion, useCycle } from "framer-motion";
import { loaderVariants } from "../helpers/variants";

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>

      <button onClick={() => cycleAnimation()}>Switch Loader Animation</button>
    </>
  );
};

export default Loader;
