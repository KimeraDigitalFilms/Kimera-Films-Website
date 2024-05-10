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
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0.3, 1, 0.3]);
  // const [opacity,setOpacity]=useState(0.3)
  const fontSize = useTransform(scrollYProgress, [0.3, 0.5, 0.8], ['100%', '250%', '100%']);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 60, 80, 60, 0]
  );

  //   useMotionValueEvent(scrollYProgress,'change', (latest)=>{
  //     if (latest<0.6 && latest>0.4){
  // setOpacity(1)
  //     }else{
  // setOpacity(0.5)
  //     }
  //   })
  return (
    <>
      <motion.div
        style={{ opacity, x,fontSize:fontSize }}
        transition={{ delay: 0 }}
        ref={ref}
        className="w-full text-left font-Dancing text-3xl py-[10px] font-bold "
      >
        {content}
      </motion.div>
    </>
  );
}

export default Reveal;
