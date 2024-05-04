import React, { useEffect, useRef } from "react";
import {
  easeOut,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
function Reveal({ content, refP }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    container: refP,
    offset: [`start end`, `end start`],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [-80, 85, 117, 85, -80]
  );

  return (
    <>
      <motion.div
        style={{ opacity, scale, x }}
        transition={{ ease: "linear" }}
        ref={ref}
        className="w-[400px] text-left font-Dancing text-3xl leading-9 font-bold "
      >
        {content}
      </motion.div>
    </>
  );
}

export default Reveal;
