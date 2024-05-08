import React from "react";
import { motion,useScroll, useTransform,  } from "framer-motion";
import { useRef,useState } from "react";

function Card({ setSelected, item,style }) {

  // const ref=useRef(null)
  // const {scrollYProgress}=useScroll({
  //   target:ref,
  //   offset:['start end','end start']
  // })

  // const opacity=useTransform(scrollYProgress,[0,0.2,0.8,1],[0,1,1,0])
  // const scale=useTransform(scrollYProgress,[0,0.3,0.8,1],[0,1,1,0])
// const [loaded,setLoaded]=useState(false)

  return (
    <>
      <div className={`box-content w-full ${style}`}>
        <motion.div 
        key={item.id}
        variants={{
          hidden: {
            opacity: 0,
            scale:0
          },
          visible: {
            opacity: 1,
            scale:1,
            transition: {
              // delay: 0.1 * k,
              // type:'spring',
              ease:'easeIn'
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        // viewport={{once:true}}
        // style={{opacity,scale}} transition={{ease:easeOut,type:'spring'}} ref={ref}
          // className={`flex justify-center items-center mx-auto justify-self-center place-items-center `}
        >
          {/* <motion.img
            layout
            layoutId={item.id}
       
            whileTap={{ scale: 0.95 }}
      
            onClick={() => {
              setSelected(item);
            }}
            className="mx-auto inline  w-fit overflow-hidden hover:cursor-pointer"
            src={item.img}
            alt=""
          /> */}
          <motion.video 
          muted
          loop
//           onCanPlayThrough={()=>{
// setLoaded(true)
//           }}
          preload="none"
          poster={item.poster}
//           onMouseEnter={(e)=>{
//             e.target.play()
// console.log(loaded)
//             if (loaded){
//               console.log('enter')
//             }
//           }}
          // onMouseLeave={(e)=>{
          //   e.target.pause()
          //   if (loaded){
          //     console.log('leave')
          //   }
          // }}
           layout
           playsInline
           layoutId={item.id}
           className="mx-auto inline w-full object-cover z-20 overflow-hidden hover:cursor-pointer"
           whileTap={{ scale: 0.95 }}
          onClick={() => {
            setSelected(item);
          }}
          src={item.vid}/>
         
        </motion.div>
      </div>
    </>
  );
}

export default Card;
