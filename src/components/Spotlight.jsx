import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// const Spotlight = () => {
//   return (
//     <div className="flex items-center justify-center  ">
//       <SpotlightButton />
//     </div>
//   );
// };

const Spotlight = ({ content, style }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height } = e.target.getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const left = `${(offsetX / width) * 100}%`;
      const top = `${(offsetY / height) * 100}%`;
      spanRef.current.animate(
        // { left },
        { opacity: 1, left, top },
        // {translateX:offsetX, translateY: offsetY},
        { duration: 250, fill: "forwards" }
      );
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        // { left: "50%" },
        { opacity: 0 },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    // return () => {
    //   btnRef.current.removeEventListener("mousemove", handleMouseMove);
    //   btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    // };
  }, []);

  return (
    <motion.h1
      // whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-fit rounded-lg  bg-transparent p-0 text-lg font-medium text-white"
    >
      <span
        className={`pointer-events-none ${style}  relative z-10 mix-blend-difference`}
      >
        {content}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] opacity-0 h-28 w-28 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white"
      />
    </motion.h1>
  );
};

export default Spotlight;
