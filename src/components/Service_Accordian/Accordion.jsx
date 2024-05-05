// import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useEffect, useState } from "react";
import "./Accordion.css";
import { useRef } from "react";
import Reveal from "./Reveal";

const Accordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="screen-padding mt-24">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[600px] w-full max-w-6xl mx-auto  shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              // Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              list={item.list}
              // description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, title, imgSrc, list }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;
  const refP = useRef(null);


  return (
    <>
      <button
        className="bg-white hover:bg-slate-50  transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-3xl font-Oswald rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        {/* <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div> */}
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative bg-primaryFg flex flex-nowrap gap-x-4 justify-center pl-10 items-center "
          >
            <div className="absolute bottom-10 right-14">
              <motion.div
                style={{ rotate: "45deg" }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -30, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.7 }}
                className="absolute border-l-secondary1 border-t-secondary1 border-l-2 border-t-2 p-[7px] "
              ></motion.div>
              <motion.div
                style={{ rotate: "45deg" }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -15, opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.7 }}
                className="absolute border-t-secondary1 border-l-secondary1 border-t-2 border-l-2 p-[7px] "
              ></motion.div>
              <motion.div className="absolute border-t-secondary1 border-l-secondary1 border-t-2 border-l-2 p-[7px] rotate-45"></motion.div>
            </div>

            <div
              className="w-[400px] h-[300px] rounded-lg"
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            <motion.div
              ref={refP}
              variants={{
                open: {
                  opacity: 1,
                },
                closed: {
                  opacity: 0,
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
    
              transition={{ duration: 0.1 }}
              className="container w-[500px] relative flex flex-col h-[450px] justify-start items-start overflow-scroll text-white"
            >
              <div className="py-[50%] ">
                {list.map((phrase, id) => {
                  return <Reveal refP={refP} content={phrase} key={id} />;
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
    // opacity:'1'
  },
  closed: {
    // opacity:'0',
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "400px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const items = [
  {
    id: 1,
    title: "BRAND FORGE",
    // Icon: FiDollarSign,
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    list: [
      "Brand Positioning",
      "Tone of Voice",
      "Naming Consultation",
      "Strategic Objectives Planning",
      " Brand Narrative Development",
      "Messaging Architecture",
      "Verbal Branding",
      "Tagline Development",

      "Creative Conceptualization",
      "Visual Identity Design",
      "Logo Design",
      "Brand Collateral Design",
      "Packaging Design",
      "Art Direction",
      "Stationery Design",
      "Signage Design",

      "Copywriting",
      "Website Copywriting",
      "Social Media Copy",
      "Brand Messaging",
    ],
  },
  {
    id: 2,
    title: "MOTION CANVAS",
    // Icon: FiPlay,
    imgSrc:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    list: [
      "AD Film Production",
      "Music Video Production",
      "Feature Films and TV Series",

      "Animation",
      "Visual Effects",

      "Editorial Production",
      "Social Media Asset Production",
      "Printing",
      "Stationary Asset Production",
      "Creative Coding",
    ],
  },
  {
    id: 3,
    title: "MARKETING MOMENTUM",
    // Icon: FiBell,
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    list: [
      "Competitor Analysis",
      "Audience Research",

      "Creative Strategy",
      "Brand Strategy Development",
      "Website Design",
      "Application Design",
      "Social Media Content",
      "Merchandise Design",
      "Search Engine Optimization",
      "Search Engine Marketing",
      "Augmented Reality Filters",

      "Advertising Campaigns",
      "Digital Marketing",
      "User Experience",
      "Email Campaigns",
      "Social Media Filters",
    ],
  },
  //   {
  //     id: 4,
  //     title: "Grow faster",
  //     // Icon: FiBarChart,
  //     imgSrc:
  //       "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  // list:[
  //   "Design",
  //   "User Interface",
  //   "User Experience",
  //   "Search Engine Optimization",
  //   "Web Design",
  // ]
  //   },
];
