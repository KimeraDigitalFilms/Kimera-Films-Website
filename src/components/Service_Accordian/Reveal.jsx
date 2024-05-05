import React, { useEffect, useRef, useState } from "react";
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
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const [opacity,setOpacity]=useState(0.3)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [-80, 85, 117, 85, -80]
  );

  useMotionValueEvent(scrollYProgress,'change', (latest)=>{
    if (latest<0.6 && latest>0.4){
setOpacity(1)
    }else{
setOpacity(0.5)
    }
  })
  return (
    <>
      <motion.div
        style={{ opacity, scale, x }}
        transition={{ ease: "linear" }}
        ref={ref}
        className="w-[400px] text-left font-Dancing text-3xl transition-opacity duration-200 py-[1px] font-bold "
      >
        {content}
      </motion.div>
    </>
  );
}

export default Reveal;
