import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, } from "framer-motion";
import './Ticker.css'

function TickerComponent() {
  const list = [
    {
      img: "https://d30ny7ijak9wq4.cloudfront.net/s3fs-public/images/movie_image/2020/08/25/yash.jpg",
      title: "Company1",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png",
      title: "Company2",
    },
    {
      img: "https://www.gblogodesign.co.uk/wp-content/uploads/2021/05/Louis-Vuitton.png",
      title: "Company3",
    },
    {
      img: "https://marketplace.canva.com/EAFwyRXjJfI/1/0/1600w/canva-clean-elegant-typography-brand-logo-59hSL3onznc.jpg",
      title: "Company4",
    },
    {
      img: "https://images.news18.com/ibnlive/uploads/2022/09/citroen-logo.jpg",
      title: "Company5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExFFbW-ShuVi34krbuFlPAepiUx8LpQm2LJczqMl_0uOdbBW862T8mC4zKpc52Ga7Sos&usqp=CAU",
      title: "Company6",
    },
    {
      img: "https://wp.scoopwhoop.com/wp-content/uploads/2016/02/56bc88c4fb778533d0ae073b_300977194.jpg",
      title: "Company7",
    },
    {
      img: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127.png",
      title: "Company8",
    },
  ];


  useEffect(()=>{
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    
    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
    
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);
    
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
    
  },[])
  return (
    <div className="parent screen-padding">
      <div className="scroller" data-speed='fast'>
        <div className="scroller_inner tag-list">
        {list.slice(0,4).map((item, ind) => {
          return (
            <img src={item.img} alt={item.title} key={ind}/>
          )
        })}
        </div>
      </div>
      <div className="scroller" data-speed='fast' data-direction='right'>
        <div className="scroller_inner tag-list">
        {list.slice(4).map((item, ind) => {
          return (
            <img src={item.img} alt={item.title} key={ind}/>
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default TickerComponent;

const Card = ({ img, title }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div 
      onHoverStart={() => {
        setShowOverlay(true);
      }}
      onHoverEnd={() => {
        setShowOverlay(false);
      }}
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="card relative overflow-hidden  bg-cover bg-center flex justify-center items-center"
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex justify-center items-center"
          >
            <div className="absolute pointer-events-none h-full w-full flex justify-center items-center">
              <motion.h1
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
                className="bg-secondary  font-semibold text-sm z-10 px-3 py-2 rounded-full hover:opacity-75 "
              >
                {/* <span className="text-white">{title}</span> */}
                {title}
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
