import React from "react";
import { motion } from "framer-motion";
// import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Modal({ selected, setSelected }) {
  const navigate = useNavigate();

  if (!selected) {
    return <></>;
  } else {
    document.body.style.overflowY = "hidden";

  }
  return (
    <div className=" z-[150]">
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
          className="w-full max-w-[700px] h-max-[50vh] mx-auto my-12 px-8 cursor-default"
        >
          <motion.div>
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
          </motion.div>

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
            className={` bg-transparent text-white p-2 `}
          >
            <h3 className="mb-2 font-bold text-3xl font-Dancing text-primary">{selected.title}</h3>
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
