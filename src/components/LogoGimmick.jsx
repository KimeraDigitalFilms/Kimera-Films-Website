import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo/Logo";
import { useScroll, motion, useTransform, easeOut, useMotionValueEvent } from "framer-motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";
function LogoGimmick() {
  const ref = useRef(null);
  
  //   const [YOffset, setYOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  //   let x = useTransform(scrollY, [YOffset, YOffset + 1000], ["0px", "50%"],);
  //   let y = useTransform(scrollY, [YOffset, YOffset + 2000], ["0px", "2000px"],);
  //   let scale = useTransform(scrollY, [YOffset, YOffset + 1000], [1, 2.1],);
  //   let rotate = useTransform(
  //     scrollY,
  //     [YOffset, YOffset + 1000],
  //     ["0deg", "180deg"],
  //   );

  //   let textX = useTransform(
  //     scrollY,
  //     [YOffset + 1400, YOffset + 1700],
  //     ["100%", "0%"]
  //   );
  //   let textY = useTransform(
  //     scrollY,
  //     [YOffset, YOffset + 2000],
  //     ["0px", "2000px"]
  //   );
  //   useEffect(() => {
  //     setYOffset(
  //       document.getElementById("logoGimmick").getBoundingClientRect().y
  //     );
  //   }, []);
  let translateX = useTransform(scrollYProgress, [0, 0.5], ["0px", "-60%"]);
  // let translateY = useTransform(scrollYProgress, [0, 0.4], ["0px", "60vh"]);
  let scale = useTransform(scrollYProgress, [0, 0.5], [1, 2.42]);
  let rotate = useTransform(scrollYProgress, [0, 0.5], ["0deg", "-5deg"]);

  let textX = useTransform(scrollYProgress, [0.6, 0.8], ["-100%", "30%"], {
    ease: easeOut,
  });
  // let textY = useTransform(scrollYProgress, [0, 0.4], ["0px", "60vh"]);

// let divY = useTransform(scrollYProgress, [0.4,1],['0px','40vh'],{delay:0})

  return (
    <div
      id="logoGimmick"
      ref={ref}
      className="h-[200vh] mb-[200px] relative "
    >
      <motion.div 
      transition={{ease:'linear',delay:0}}
      //  style={{y:divY}}
       className="transition-all ease-linear delay-0  sticky top-[10%]">

      <motion.h1 
        transition={{ ease: "linear",delay:0 }}
        style={{  translateX: textX }}
        className="text-6xl font-bold transition-transform ease-linear delay-0 text-secondary1 absolute top-[50%] "
        >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </motion.h1>
      <motion.div 
        transition={{ ease: "linear",delay:0 }}
        style={{  scale, rotate, translateX }}
        className="h-fit transition-transform ease-linear delay-0"
        >
        <Logo src={'/logo.svg'} style={"h-[700px] bg-primary"} />
      </motion.div>
        </motion.div>
    </div>
  );
}

export default LogoGimmick;
