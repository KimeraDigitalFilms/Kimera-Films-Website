import React, { useEffect, useRef } from "react";
import { easeOut, motion, useScroll, useTransform,useMotionValueEvent } from "framer-motion";
function Reveal({ content, refP }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: refP,
    offset: [`start end`, `end start`],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3,0.5,0.7, 1],
    [0.3,0.8,1,0.8, 0.3]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [-100, 80, 100, 80, -100]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  })
  return (
    <>
      <motion.div
        style={{ opacity, scale, x }}
        transition={{ ease: "linear" }}
        ref={ref}
        className="w-[300px] text-left font-Dancing text-[40px] font-bold "
      >
        {content}
      </motion.div>
    </>
  );
}

export default Reveal;
