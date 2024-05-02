// import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";
import './Accordion.css'
import { useRef } from "react";
import Reveal from "./Reveal";
// import Text_Scroller from "./Text_Scroller";
const Accordion = () => {
  const [open, setOpen] = useState(items[0].id);
  
  return (
    <section className="screen-padding mt-10">
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

const Panel = ({ open, setOpen, id, title, imgSrc, list, }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;
  const refP=useRef(null)


  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
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
            className="w-full h-full overflow-hidden relative bg-black  flex flex-nowrap gap-x-4 justify-center pl-10 items-center "
          >
            <div 
              className="w-[500px] h-[200px]"
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
{/* <Text_Scroller list={list}/> */}
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
             <div className="py-[40%]">
              {list.map((phrase, id) => {
                return (
                  <Reveal refP={refP} content={phrase} key={id}/>
                  );
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
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const items = [
  {
    id: 1,
    title: "Research and Analysis",
    // Icon: FiDollarSign,
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
list:[
'Competitor Analysis',
'Audience Research'
]
  },
  {
    id: 2,
    title: "Strategic Marketing",
    // Icon: FiPlay,
    imgSrc:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
list:[
'Creative Strategy',
'Brand Strategy Development',
'Website Design',
'Application Design',
'Social Media Content',
'Merchandise Design',
'Search Engine Optimization',
'Search Engine Marketing',
'Augmented Reality Filters',
]
  },
  {
    id: 3,
    title: "Campaign Execution",
    // Icon: FiBell,
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
 list: [
  "Advertising Campaigns",
  "Digital Marketing",
  "User Experience",
  "Email Campaigns",
  "Social Media Filtersn",
]
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
