export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const marqueeVariants = {
  container: {
    x: [0, -1300],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "anticipate",
      },
    },
  },
  text: {
    "-webkit-text-stroke-color": ["#fff", "#FFA9", "#4166C6"],
    "-webkit-text-fill-color": [
      "rgb(17,16,23, 0.96)",
      "rgb(17,16,23, 0.74)",
      "#fff",
    ],
    transition: {
      "-webkit-text-stroke-color": { duration: 10, repeat: Infinity },
      "-webkit-text-fill-color": { duration: 6, repeat: Infinity },
    },
  },
}

export const easeVariants = {
  slideUp: {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 0,
      transition: {
        duration: 1,
      },
      opacity: [0, 0.2, 0.4, 0.8, 1],
    },
  },
}
