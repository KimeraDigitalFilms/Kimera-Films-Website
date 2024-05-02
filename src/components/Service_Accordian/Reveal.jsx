import React, { useEffect, useRef } from "react";
import { easeOut, motion, useScroll, useTransform,useMotionValueEvent } from "framer-motion";
function Reveal({ content, refP }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    container: refP,
    offset: [`start end`, `end start`],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0,0.5, 1],
    [0.3,1, 0.3]
  );
  const x = useTransform(
    scrollYProgress,
    [0,0.4,0.5,0.6,1],
    [-60,80,105,80,-60]
  );

 
  return (
    <>
      <motion.div
        style={{ opacity, scale, x }}
        transition={{ ease: "linear" }}
        ref={ref}
        className="w-[300px] text-left font-Dancing text-xl font-bold "
      >
        {content}
      </motion.div>
    </>
  );
}

export default Reveal;
