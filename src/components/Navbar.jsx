import React, { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { Link } from "react-router-dom"
import Anchor from "./Anchor"
import { AnchorButton } from "./Anchor"
import colorContext from "../context/ColorContext"

function Navbar() {
  const location = useLocation()
  // if (location.pathname === "/") {
  //   // document.body.style.background = "#ffffff";
  // }
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious()
    if (latest > prev && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const [isActive, setActive] = useState(false)

  const handleSidebar = () => {
    setActive(!isActive)
  }
  const [mobile, setMobile] = useState(window.innerWidth <= 460 ? 1 : 0)

  useEffect(() => {
    setMobile(window.innerWidth <= 460 ? 1 : 0)
  }, [window.innerWidth])

  //change nav bg color on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 55) {
      document.getElementById("nav").style.backgroundColor = "transparent"
    } else {
      document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.70)"
    }
  })

  const navigate = useNavigate()
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
            className={`body-font fixed top-0 z-50 w-full px-7 transition-colors duration-300`}
          >
            <div className="container mx-auto flex h-full flex-col flex-wrap items-center justify-between p-5 md:flex-row">
              <Link
                to={"/"}
                className={`title-font mb-4 flex items-center font-medium md:mb-0`}
              >
                {/* <i
                  className="fa-sharp fa-solid fa-photo-film fa-2xl"
                  style={{ color: "#5900ff" }}
                ></i> */}
                {/* <img src="" alt="logo" /> */}
                <span className="ml-3 font-AvenirBook text-2xl font-bold uppercase text-primary">
                  Kimera Films
                </span>
              </Link>

              <nav className="flex w-fit flex-wrap items-center justify-center gap-x-8 text-base text-white">
                <Colors />
                <Anchor colorStyle={``} content={"Home"} href={"/"} />
                <Anchor colorStyle={``} content={"Gallery"} href={"/gallery"} />
                <AnchorButton />
              </nav>
            </div>
          </motion.header>
        </>
      ) : (
        <>
          {" "}
          <motion.button
            onClick={handleSidebar}
            className="fixed right-5 top-3 z-[100] flex h-12 w-12 flex-col flex-nowrap items-center justify-center gap-y-[5px] rounded-[50%] bg-secondary1 p-0 hover:cursor-pointer focus:outline-none"
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
              className="m-0 h-[1.5px] w-6 bg-black p-0"
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
              className="m-0 h-[1.5px] w-6 bg-black p-0"
            ></motion.div>
          </motion.button>
          <AnimatePresence>
            {isActive && <Dropdown setActive={setActive} />}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default Navbar

function Dropdown({ setActive }) {
  const navLinks = [
    { title: "Home", href: "/" },
    // { title: "About", href: "/about" },
    { title: "Gallery", href: "/gallery" },
    // { title: "Services", href: "/services" },
  ]

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
      className="fixed left-0 top-0 z-[80] h-screen w-full origin-top bg-primary px-10 pb-10 pt-6 text-black"
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-black">Menu</h1>
        </div>

        <div className="flex h-full flex-col items-center justify-center gap-4 font-serif text-4xl uppercase text-black">
          {navLinks.map((link, i) => {
            return (
              <motion.div
                key={i}
                className="overflow-hidden"
                onClick={() => {
                  setActive(false)
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
            )
          })}
        </div>
        <div>
          <p className="text-center text-lg text-black underline decoration-black decoration-solid underline-offset-4">
            info@kimerafilms.art
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Colors = () => {
  const { setCanvasBg, setCanvasColor, setLoadColor } = useContext(colorContext)

  const handleRadio = (e) => {
    if (e.target.id === "alt2") {
      document.documentElement.style.filter = "grayscale(100%)"
    } else {
      document.documentElement.style.filter = ""
      document.documentElement.setAttribute("data-theme", e.target.id)
      document.body.style.backgroundColor = e.target.getAttribute("data-color")
      setCanvasColor(e.target.getAttribute("data-canvasColor"))
      setCanvasBg(e.target.getAttribute("data-color"))
      setLoadColor(e.target.getAttribute("data-loadcolor"))
    }
  }
  return (
    <div>
      <div className="flex items-center justify-center gap-x-3">
        {/* <div className="rounded-full p-2 bg-"></div> */}
        <div
          defaultChecked
          onClick={handleRadio}
          type="radio"
          name="color"
          // data-bg="#241c18"
          id="main"
          data-color="#0A0A0A" //Bg of page other canvas
          data-canvascolor="#ED6E0B" // Primary color in cansvas
          data-loadcolor="#C9D9EE" // Color of loader in preloader
          className="cursor-pointer rounded-full bg-[#ED6E0B] p-2"
        />
        <div
          onClick={handleRadio}
          type="radio"
          name="color"
          id="alt1"
          data-canvascolor="#ED6E0B"
          data-loadcolor="#535C91"
          data-color="#ffffff"
          className="cursor-pointer rounded-full bg-[#1B1A55] p-2"
        />
        <div
          onClick={handleRadio}
          type="radio"
          name="color"
          id="alt2"
          data-text=""
          data-color="#123524"
          data-loadcolor="#D8D4F2"
          data-canvascolor="#C4B2BC"
          className="cursor-pointer rounded-full bg-[#C4B2BC] p-2"
        />
      </div>
    </div>
  )
}
