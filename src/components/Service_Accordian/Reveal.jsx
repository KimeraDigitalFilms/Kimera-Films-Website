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
const [font,setFont]=useState('cursive')
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    container: refP,
    offset: [`start end`, `end start`],
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0.3, 1, 0.3]);
  // const [opacity,setOpacity]=useState(0.3)
  const fontSize = useTransform(scrollYProgress, [0.3, 0.5, 0.8], ['100%', '230%', '100%']);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 60, 80, 60, 0]
  );

    useMotionValueEvent(scrollYProgress,'change', (latest)=>{
      if (latest<0.6 && latest>0.45){
        setFont('Dancing');
      }else{
        setFont('Avenir-Book')
      }
    })
  return (
    <>
      <motion.div
        style={{ opacity, x,fontSize:fontSize,fontFamily:font }}
        transition={{ delay: 0 }}
        ref={ref}
        className="w-full text-left text-3xl py-[10px] font-bold "
      >
        {content}
      </motion.div>
    </>
  );
}

export default Reveal;
