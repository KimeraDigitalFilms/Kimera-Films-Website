import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo/Logo";
import { useScroll, motion, useTransform, easeOut,  } from "framer-motion";
function LogoGimmick() {
  const ref = useRef(null);
//   const [YOffset, setYOffset] = useState(0);

  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset:['start start','end end']
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
let translateX = useTransform(scrollYProgress, [0,0.5], ["0px", "50%"],);
let translateY = useTransform(scrollYProgress, [0,0.85], ["0px", "160vh"],);
let scale = useTransform(scrollYProgress, [0,0.5], [1, 2.1],);
let rotate = useTransform(
  scrollYProgress,
  [0,0.5],
  ["0deg", "90deg"],
);

let textX = useTransform(
  scrollYProgress,
  [0.5,0.8],
  ["100%", "-25%"]
);
let textY = useTransform(
  scrollYProgress,
  [0,0.85],
  ["0px", "160vh"]
);
//   useEffect(() => {
//     setYOffset(
//       document.getElementById("logoGimmick").getBoundingClientRect().y
//     );
//   }, []);
  return (
    <div
      id="logoGimmick"
      ref={ref}
      className="h-[280vh]  overflow-hidden relative"
    >
      <motion.h1 
      transition={{ease:'linear'}}
        style={{ translateY: textY, translateX: textX }}
        className="text-6xl font-bold text-secondary1 absolute top-[250px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </motion.h1>
      <motion.div    
          transition={{ease:'linear'}}
       style={{ translateY, scale, rotate, translateX }} className="h-fit ">
        <Logo style={"h-[700px] bg-primary"} />
      </motion.div>
    </div>
  );
}

export default LogoGimmick;
