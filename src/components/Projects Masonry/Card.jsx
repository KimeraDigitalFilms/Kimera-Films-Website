import React, { useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

function Card({ setSelected, item, style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // const opacity=useTransform(scrollYProgress,[0,0.2,0.8,1],[0,1,1,0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  // const [loaded,setLoaded]=useState(false)

  // useEffect(()=>{
  //   document.getElementById(item.id).addEventListener('click',()=>{
  //     setSelected(item)
  //     console.log(item.id)
  //   })
  // },[])

  return (
    <>
      <div className={`box-content w-full ${style}`}>
        <motion.div
          // variants={{
          //   hidden: {
          //     opacity: 0,
          //     scale: 0,
          //   },
          //   visible: {
          //     opacity: 1,
          //     scale: 1,
          //     transition: {
          //       // delay: 0.1 * k,
          //       // type:'spring',
          //       ease: "easeIn",
          //     },
          //   },
          // }}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          style={{ scale }}
          transition={{ ease: "easeOut", type: "spring" }}
          ref={ref}
          className={`mx-auto flex place-items-center items-center justify-center justify-self-center`}
        >
          <motion.img
            // layout
            // layoutId={item.id}
            loading="lazy"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelected(item)
            }}
            className="mx-auto inline w-fit overflow-hidden hover:cursor-pointer"
            src={item.poster}
            alt=""
          />
          {/* <motion.video 
          muted
          loop
          onCanPlayThrough={()=>{
setLoaded(true)
          }}
          preload="none"
          poster={item.poster}
          onMouseEnter={(e)=>{
            e.target.play()
console.log(loaded)
            if (loaded){
              console.log('enter')
            }
          }}
          onMouseLeave={(e)=>{
            e.target.pause()
            if (loaded){
              console.log('leave')
            }
          }}
           layout
           playsInline
           layoutId={item.id}
           className="mx-0 w-full object-cover z-20 overflow-hidden hover:cursor-pointer"
           whileTap={{ scale: 0.95 }}
          onClick={() => {
            setSelected(item);
          }}
          src={item.vid}/> */}

          {/* <motion.div style={{position:'relative',padding:'66.67%'}}
          whileTap={{ scale: 0.95 }}
          className="z-50 overflow-hidden bg-blue-500 hover:cursor-pointer"
          onClick={() => {
            setSelected(item);
            console.log('hi')
          }}>
          
          <iframe
          // layout
          // layoutId={item.id}
          id={item.id}
            src={`${item.vid}&background=1&title=0&byline=0&&controls=0&playsinline=1`}
            style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}
            className="z-20 hover:cursor-pointer"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            webkitallowfullscreen 
            mozallowfullscreen
            allowfullscreen
            ></iframe>
            </motion.div> */}
        </motion.div>
      </div>
    </>
  )
}

export default Card
