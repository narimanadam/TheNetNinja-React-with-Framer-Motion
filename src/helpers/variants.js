export const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.4, // duration of keyframe
      yoyo: Infinity, // number of keyframes and it can have the value Infinity
    },
  },
};

export const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

/**
 * Modal */

export const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export const svgVariants = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

export const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};
