import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Modal({ selected, setSelected }) {
  if (!selected) {
    return <></>;
  } else {
    document.body.style.overflowY = "hidden";
  }
  return (
    <div className="">
      <div
        onClick={() => {
          setSelected(null);
          document.body.style.overflowY = "auto";
        }}
        className="fixed inset-0  bg-black/75 z-[150] cursor-pointer overflow-y-scroll"
      >
        {/* inset-0 just covers whole screen */}
        <div
          onClick={(e) => e.stopPropagation()} // .stopPropagation() method prevents parent event from bubbling/affecting/calling from children
          className="w-full min-[1120px]:max-w-[1000px] min-[825px]:max-w-[750px] max-w-[500px] h-max-[50vh] mx-auto  mt-24 px-8 cursor-default"
        >
          {/* <motion.div>
            <motion.video
              muted
              loop
              autoPlay
              controls
              layout
              layoutId={selected.id}
              id="a"
              className="w-full"
              src={selected.vid}
              alt="vid"
            />
          </motion.div> */}

          <div
            style={{
              width: "100%",
              position: "relative",
              // position: "relative",
              // paddingLeft: "50%",
              // paddingBottom: "35%",
              // paddingTop: "35%",
              // paddingRight: "50%",
              // // width: "25vw !important",
              // // height: "25vh !important",
              // overflowX: "hidden",
            }}
            className=""
          >
            <iframe
              // src={`${selected.vid}&autoplay=1&title=0&byline=0&muted=1&controls=1`}
              src={selected.vid}
              // style={{ position:'relative',width: "25vw !important", height: "25vh !important",padding:0 }}
              className="aspect-video w-full"
              style={
                {
                  // position: "absolute",
                  // top: "0",
                  // left: "0",
                  // width: "100%",
                  // height: "100%",
                }
              }
              // className="w-full h-full"
              frameBorder="0"
              // allow="autoplay; fullscreen; picture-in-picture"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className={`p-2`}
          >
            <h3 className="mt-3 font-bold text-4xl font-Dancing text-primary">
              {selected.title}
            </h3>
            {/* <div className="inline-flex flex-wrap mt-1 justify-center gap-3">
              {selected.tags.map((tag) => {
                return (
                  <span key={tag} className="py-1 text-secondaryLight border-1  border px-2 bg-slate-300 rounded-md">
                    {tag}
                  </span>
                );
              })}
            </div> */}
            {/* <p className="mt-4">{selected.description}</p> */}
            {/* <div className="mt-4">

            <Button
            to={selected.redirectUrl}
            onClick={()=>{
              window.open(selected.redirectUrl, '_blank');
            }}
            variant="gradient"
            color="teal"
            className="px-2 py-3  text-center bg-secondary font-medium text-black w-full"
            >
              Check Out <i className="fa-solid fa-arrow-right" style={{color: "#000000"}}></i>
            </Button>
              </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
