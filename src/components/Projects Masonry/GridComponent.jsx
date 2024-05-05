import { useState, useRef } from "react";
import React from "react";
import List from "./List";
import Modal from "./Modal";
import Logo from "../Logo/Logo";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

function GridComponent() {
  const [selected, setSelected] = useState(null);

  const ref = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start,end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  });
  return (
    <>
      <div className="w-full my-5 ">
        <motion.div
          ref={ref}
          className={`transition-opacity duration-300 -z-10 ${
            opacity ? "opacity-100" : "opacity-0"
          }`}
        >
          <Logo
            style={` bg-primary/60 w-[500px] fixed top-[50%] left-[50%] -ml-[250px] -mt-[250px] -z-10 `}
          />
        </motion.div>

        <List setSelected={setSelected} />
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </>
  );
}

export default GridComponent;
