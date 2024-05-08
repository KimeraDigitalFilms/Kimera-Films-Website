import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import ShowReelModal from "./ShowReelModal";

const ShowReel = ({ viewRef, scale }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.section
        ref={viewRef}
        style={{ scale }}
        onClick={() => {
          document.body.style.overflow = "hidden";
          setIsOpen(true);
        }}
        className="z-40 relative w-[25vw] h-[25vh] overflow-hidden "
      >
        <Video />
      </motion.section>
      <ShowReelModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Video = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      // onClick={() => {
      //   const vid = document.getElementById("reel");
      //   vid.play();
      //   vid.muted = !vid.muted;
      // }}
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav w-full z-10 mx-auto max-w-6xl overflow-hidden h-full border-transparent  "
    >
      <div className="glass-nav flex items-center justify-between h-full w-full">
        <Cursor hovered={hovered} scope={scope} />
   
          <div style={{position:'relative',paddingLeft:'50%', paddingBottom:'35%',paddingTop:'35%',paddingRight:'50%', width: "25vw !important", height: "25vh !important" }}
          className="-z-10"
          >
          <iframe
          id="reel"
            src="https://player.vimeo.com/video/938376141?h=4bb8442f8d&autoplay=1&loop=1&title=0&byline=0&muted=1&controls=0"
            // style={{ position:'relative',width: "25vw !important", height: "25vh !important",padding:0 }}
            style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}
            // className="w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            webkitallowfullscreen 
            mozallowfullscreen
            allowfullscreen
            ></iframe>
            </div>
        {/* <video
          style={{ width: "25vw !important", height: "25vh !important" }}
          muted={true}
          playsInline
          preload="none"
          poster="/thumbnails/random3.png"
          src="/videos/random3.mp4"
          id="reel"
          className="-z-10 w-[25vw] h-[25vh] object-fill"
        ></video> */}
        {/* <motion.div
          style={{ scale: scale4 }}
          className={
            "el w-full h-full top-0 -z-10 flex items-center justify-center "
          }
        >
          <div className={" relative w-[25vw] h-[25vh]"}>
            <motion.video playsInline id="reel" muted autoPlay loop src="/videos/random1.mp4" className="w-full h-full z-50"></motion.video> */}
        {/* <img src={pictures[0].src} alt="image" className="object-cover w-full h-full"/> */}
        {/* </div>
        </motion.div> */}

        {/* <div className="-z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni ipsa accusamus reiciendis dicta. Incidunt nemo commodi aliquam dicta, libero ipsum voluptas odit! Sequi, eos minima facere reprehenderit perspiciatis pariatur!
        </div> */}
      </div>
    </div>
  );
};

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none z-40 absolute  grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-primary from-40% to-gray-400 text-secondary1 text-sm"
    >
      PLAY
    </motion.span>
  );
};

export default ShowReel;
