import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Link } from "react-router-dom";
import Anchor from "./Anchor";

function Navbar() {
  const location = useLocation();
  if (location.pathname === "/") {
    document.body.style.background = "#ffffff";
  }
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [isActive, setActive] = useState(false);

  const handleSidebar = () => {
    setActive(!isActive);
  };
  const [mobile, setMobile] = useState(window.innerWidth <= 460 ? 1 : 0);

  useEffect(() => {
    setMobile(window.innerWidth <= 460 ? 1 : 0);
  }, [window.innerWidth]);

  //change nav bg color on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 55) {
      document.getElementById("nav").style.backgroundColor = "transparent";
    } else {
      document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.70)";
    }
  });
  return (
    <>
      {!mobile ? (
        <>
          <motion.header
            variants={{
              visible: {
                y: 0,
              },
              hidden: {
                y: "-100%",
              },
            }}
            id="nav"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: easeInOut }}
            className={`body-font fixed w-full transition-colors duration-300 top-0  z-50 px-7`}
          >
            <div className="container h-full mx-auto justify-between flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link
                to={"/"}
                className={`flex title-font font-medium  items-center  mb-4 md:mb-0`}
              >
                {/* <i
                  className="fa-sharp fa-solid fa-photo-film fa-2xl"
                  style={{ color: "#5900ff" }}
                ></i> */}
                {/* <img src="" alt="logo" /> */}
                <span className="ml-3 text-2xl uppercase font-bold font-Oswald text-primary">
                  Kimera Films
                </span>
              </Link>

              <nav className="gap-x-8 w-fit flex flex-wrap text-white items-center text-base justify-center">
                <Anchor colorStyle={``} content={"Home"} href={"/"} />
                {/* <Anchor colorStyle={``} content={"About"} href={"/about"} /> */}
                <Anchor colorStyle={``} content={"Gallery"} href={"/gallery"} />
                <Anchor
                  colorStyle={``}
                  content={"Services"}
                  href={"/services"}
                />
              </nav>
            </div>
          </motion.header>
        </>
      ) : (
        <>
          {" "}
          <motion.button
            onClick={handleSidebar}
            className="p-0 fixed top-3 right-5 z-[100] flex items-center justify-center bg-secondary1 h-12 w-12 focus:outline-none hover:cursor-pointer rounded-[50%] gap-y-[5px] flex-col flex-nowrap"
          >
            <motion.div
              variants={{
                active: {
                  rotate: "45deg",
                  y: 2.5,
                },
                notActive: { rotate: "0deg", y: 0 },
              }}
              animate={isActive ? "active" : "notActive"}
              transition={{
                duration: 0.5,
              }}
              className="bg-black h-[1.5px] m-0 p-0 w-6"
            ></motion.div>

            <motion.div
              variants={{
                active: { rotate: "-45deg", y: -2.5 },
                notActive: { rotate: "0deg", y: 0 },
              }}
              animate={isActive ? "active" : "notActive"}
              transition={{
                duration: 0.5,
              }}
              className="bg-black h-[1.5px] p-0 m-0 w-6"
            ></motion.div>
          </motion.button>
          <AnimatePresence>
            {isActive && <Dropdown setActive={setActive} />}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default Navbar;

function Dropdown({ setActive }) {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Gallery", href: "/gallery" },
    { title: "Services", href: "/services" },
  ];

  return (
    <motion.div
      variants={{
        initial: { scaleY: 0 },
        animate: {
          scaleY: 1,
          transition: {
            ease: [0.12, 0, 0.39, 0],
            duration: 0.5,
          },
        },
        exit: {
          scaleY: 0,
          transition: {
            ease: [0.12, 1, 0.45, 1.07],
            duration: 0.5,
            delay: 0.5,
          },
        },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 origin-top left-0 w-full h-screen pb-10 px-10 pt-6 text-black bg-primary z-[80]"
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold  text-black">Menu</h1>
        </div>

        <div className="flex flex-col h-full justify-center font-serif items-center gap-4 uppercase text-4xl text-black">
          {navLinks.map((link, i) => {
            return (
              <motion.div
                key={i}
                className="overflow-hidden"
                onClick={() => {
                  setActive(false);
                }}
              >
                <motion.div
                  variants={{
                    initial: {
                      y: "30vh",
                      transition: { duration: 0.5, delay: 0.09 * i },
                    },
                    open: {
                      y: 0,
                      transition: { duration: 0.7, delay: 0.09 * i },
                    },
                    exit: {
                      y: "30vh",
                      transition: { duration: 0.7, delay: 0.09 * i },
                    },
                  }}
                  initial="initial"
                  animate="open"
                  exit="exit"
                >
                  <Link to={link.href}>{link.title}</Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div>
          <p className="underline underline-offset-4 decoration-solid decoration-black text-black text-lg text-center">
            info@kimerafilms.art
          </p>
        </div>
      </div>
    </motion.div>
  );
}
