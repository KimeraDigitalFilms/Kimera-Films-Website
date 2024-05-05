import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Logo from "./Logo/Logo";
import { motion, useAnimate } from "framer-motion";
import Button from "./Button";

function Preloader({ ready, setVis }) {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const [enter, setEnter] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  async function loaderAnimate1() {
    await animate(
      scope.current,
      { scaleX: 0 },
      { duration: 0.01, type: "spring" }
    );
    // console.log(ready);
    await animate(scope.current, {
      background: "#C9D9EE",
      boxShadow: "0px 0px 30px 4px #C9D9EE",
    });
    await animate(
      scope.current,
      { scaleX: 0.4 },
      { duration: 1.5, type: "spring", ease: "easeOut" }
    );
    await animate(
      scope.current,
      { scaleX: 0.78 },
      { duration: 1, type: "spring", ease: "easeInOut" }
    );
  }

  async function loaderAnimate2() {
    // console.log('hi')
    await animate(
      scope.current,
      { scaleX: 1 },
      { duration: 1, type: "spring", delay: 0.5 }
    );
    setEnter(true);
    revealAnimate();
  }

  //remove preloader towards top
  const revealAnimate = async () => {
    await animate2(
      scope2.current,
      {
        translateY: "-100%",
      },
      { duration: 0.4, ease: "easeIn", delay: 0.3 }
    );
    setVis(true);
  };

  useEffect(() => {
    // console.log(document.readyState)
    if (ready === 1) {
      loaderAnimate2();
      // console.log(ready)
    } else {
      loaderAnimate1();
    }
  }, [ready]);

  return (
    <motion.div
      ref={scope2}
      id="preloader"
      className={`flex justify-center  items-center flex-nowrap bg-neutral-700 h-screen w-screen absolute z-[200] top-0 `}
    >
      <motion.div
        variants={variants}
        animate={enter ? "hidden" : "visible"}
        transition={{ duration: 0.4 }}
        className="flex justify-center items-center gap-x-4 w-full h-fit"
      >
        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-20 p-2  rounded-full"
        >
          <Logo style="w-full bg-primary" />
        </motion.div>

        <div
          id="parent_progress"
          className="w-[700px] bg-primaryFg rounded-lg h-[1px] overflow-visible "
        >
          <motion.div
            id="progress"
            ref={scope}
            className="flex bg-transparent w-full origin-left rounded-lg h-full "
          ></motion.div>
        </div>
        {/* <Box
          front="Digital Design"
          bottom="Brand Design"
          back="User Interface"
          top="User Experience"
        /> */}
        <Text />
      </motion.div>

      {/* <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={enter && "visible"}
        transition={{ duration: 0.3, delay: 0.5 }}
        type="btn"
        className={` text-2xl absolute transition-all font-serif `}
        disabled={enter ? false : true}
      >
  
<Button content={'Enter'} onclick={(e) => {
          e.target.style.opacity = 0;
          revealAnimate();
          sessionStorage.setItem("preloaded", "true");
        }}/>
      </motion.div> */}
    </motion.div>
  );
}

export default Preloader;

const Text = () => {
  const [scope, animate] = useAnimate();

  async function MoveUp() {
    const sequence = [
      [scope.current, { y: -40 }, { duration: 0.7, ease: "backInOut" }],
      [scope.current, { y: -80 }, { duration: 0.7, ease: "backInOut" }],
      [scope.current, { y: -120 }, { duration: 0.7, ease: "backInOut" }],
      [scope.current, { y: -160 }, { duration: 0.7, ease: "backInOut" }],
    ];
    await animate(sequence, { repeat: Infinity, repeatType: "loop" });
  }
  useEffect(() => {
    MoveUp();
  }, []);
  return (
    <div className="block overflow-hidden">
      <motion.div
        ref={scope}
        // whileHover={{ y: -20 }}
        // transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[40px]"
      >
        <span className="flex h-[40px] items-center text-3xl">
          Digital Design
        </span>
        <span className="flex h-[40px] items-center text-3xl">
          Brand Design
        </span>
        <span className="flex h-[40px] items-center text-3xl">
          User Interface
        </span>
        <span className="flex h-[40px] items-center text-3xl">
          User Experience
        </span>
        <span className="flex h-[40px] items-center text-3xl">
          Digital Design
        </span>
        {/*<span className="flex h-[40px] items-center text-3xl">
          Brand Design
        </span>
        <span className="flex h-[40px] items-center text-3xl">
          User Interface
        </span>
        <span className="flex h-[40px] items-center text-3xl">
          User Experience
        </span> */}
        {/* <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span> */}
      </motion.div>
    </div>
  );
};

const Box = ({ front, bottom, back, top }) => {
  return (
    <motion.span
      className="relative h-20 w-72 text-2xl font-sans uppercase"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center -40px",
      }}
      initial={{ rotateX: "0deg" }}
      animate={{
        rotateX: [
          "0deg",
          "90deg",
          "90deg",
          "180deg",
          "180deg",
          "270deg",
          "270deg",
          "360deg",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "backInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex h-full w-full items-center justify-center border-2 border-black bg-transparent text-white">
        {front}
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
        className="absolute flex h-full w-full origin-top items-center justify-center bg-transparent text-white"
      >
        {bottom}
      </span>

      {/* TOP */}
      <span
        style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
        className="absolute flex h-full w-full origin-bottom items-center justify-center  bg-transparent text-white"
      >
        {top}
      </span>

      {/* BACK */}
      <span
        style={{
          transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
        }}
        className="absolute flex h-full w-full origin-center items-center justify-center bg-transparent text-white"
      >
        {back}
      </span>
    </motion.span>
  );
};
