import React, { useEffect } from "react";
import { useScroll, useTransform, motion,useInView,easeOut } from "framer-motion";
import { useRef } from "react";
import ShowReel from "./ShowReel/ShowReel";

function Featured() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const videoRef = useRef(null);
  const isInView = useInView(videoRef);

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKnGZQfGZl7AaWeLFEUphgLqbbGYGOvwyvA&usqp=CAU',
      scale: scale4,
    },
    {
      src: 'https://t3.ftcdn.net/jpg/02/70/35/00/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg',
      scale: scale5,
    },
    {
      src: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
      scale: scale6,
    },
    {
      src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D',
      scale: scale5,
    },
    {
      src: 'https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg?fmt=webp&w=500',
      scale: scale6,
    },
    {
      src: 'https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863',
      scale: scale8,
    },
    {
      src: 'https://deepai.org/static/images/cyberpunkdolphin.png',
      scale: scale9,
    },
  ];
 useEffect(()=>{
const vid=document.getElementById('reel')
if (isInView){
    vid.play()
}else{
    vid.pause()
}
 },[isInView])

 
  return (
    <>
    <div ref={ref} className={" h-[300vh] relative mx-auto mt-20"}>
      <div className={"overflow-hidden sticky top-0 h-[100vh]"}>
        {/* <motion.div
          style={{ scale: scale4 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div ref={videoRef} className={" relative w-[25vw] h-[25vh]"}>
            <motion.video playsInline id="reel" muted autoPlay loop src="/videos/random1.mp4" className="w-full h-full z-50"></motion.video>
            <img src={pictures[0].src} alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div> */}
        <motion.div 
        //  style={{ scale: scale4 }}
         className="w-full h-full flex justify-center items-center">
        <ShowReel scale={scale4} viewRef={videoRef}/>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div className={" relative -top-[30vh] left-[5vw] w-[35vw] h-[30vh]"}>
            <img src={pictures[1].src}  alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div className={" relative w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]"}>
            <img src={pictures[2].src}  alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div className={" relative w-[25vw] h-[25vh] left-[27.5vw]"}>
            <img src={pictures[3].src}  alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div>

        <motion.div
          style={{ scale:scale6 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div className={" relative w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]"}>
            <img src={pictures[4].src}  alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale8 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div className={" relative w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]"}>
            <img src={pictures[5].src}  alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale9 }}
          className={
            "el w-full h-full top-0 absolute flex items-center justify-center"
          }
        >
          <div className={" relative w-[15vw] h-[15vh] left-[25vw] top-[22.5vh]"}>
            <img src={pictures[6].src}  alt="image" className="object-cover w-full h-full"/>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="my-20 flex flex-col justify-start gap-y-16 h-[70vh] items-center">
    <h2 className="text-secondary1 w-1/2">
    WE CRAFT IMPACTFUL CONTENT FOR CLIENTS ACROSS A RANGE OF INDUSTRIES, INCLUDING BROADCAST, FILM, GAMES, BRANDS, EXPERIENTIAL, AND THEMED ENTERTAINMENT.

    </h2>
    <div className="overflow-hidden py-1">
        <motion.h1
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4, ease: easeOut }}
          style={{
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
          className="font-serif font-weight text-center text-secondary1 text-7xl "
        >
          Featured Projects
        </motion.h1>
      </div>
<motion.div whileTap={{scale:1.2}} className=" rounded-lg px-3 py-1 text-xl bg-white w-fit">
    <NavLink text={'View Gallery'}/>
</motion.div>
    </div>
    </>
  );
}

export default Featured;


const NavLink = ({ text }) => {
    return (
      <a
        href="/gallery"
        rel="nofollow"
        className="block h-[30px] overflow-hidden  font-medium"
      >
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-primary">{text}</span>
          <span className="font-Dancing text-2xl mx-auto flex items-center justify-center h-[30px] text-primary">
            {text}
          </span>
        </motion.div>
      </a>
    );
  };


  