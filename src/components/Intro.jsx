import React from "react";
import { useRef } from "react";
import Spotlight from "./Spotlight";
import { useScroll, motion, useTransform } from "framer-motion";

function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0.45, 1], ["400px", "0px"]);

  return (
    <div
      ref={ref}
      className="screen-padding w-full flex my-20 justify-evenly flex-nowrap h-[450px] items-center "
    >
      <div className="w-[500px]">
        <Spotlight
          content={
            "Lorem ipsum dolor sit, amet consectetur adipis. Eveniet, aliquid!"
          }
          style={"font-semibold text-6xl font-Oswald"}
        />
      </div>
      <div className="flex justify-center gap-x-14 flex-nowrap w-1/3 rounded-lg h-full">
        <div className="overflow-hidden relative w-[350px]  h-[400px] rounded-lg place-self-start shadow-xl shadow-primary-dark/30">
          <motion.div
            style={{ translateY }}
            className="absolute h-full w-full top-0 left-0  bg-foreground"
          ></motion.div>
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
            className="object-cover w-[350px] place-self-end bg-foreground rounded-lg h-[400px] shadow-xl shadow-primary-dark/30"
          />
        </div>

        <div className="overflow-hidden relative w-[350px] place-self-end bg-foreground rounded-lg h-[400px] shadow-xl shadow-primary-dark/30">
          <motion.div
            style={{ translateY }}
            className="absolute h-full w-full top-0 left-0 bg-foreground "
          ></motion.div>
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
            alt=""
            className=" object-cover w-[350px] place-self-end  rounded-lg h-[400px] shadow-xl shadow-primary-dark/30"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
