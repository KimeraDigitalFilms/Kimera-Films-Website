import React, {
  Suspense,
  lazy,
  // useEffect,
  // useLayoutEffect,
  // useRef,
  // useState,
} from "react"
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
// import  WrappedProjects  from "./pages/Projects"
const WrappedProjects = lazy(() => import("./pages/Projects"))
// import Home from "./pages/Home";
import WrappedHome from "./pages/Home"
// import Projects from "./pages/Projects";
import "./App.css"
import { ColorState } from "./context/ColorContext"
import {
  AnimatePresence,
  // useScroll,
  // useSpring,
  // useTransform,
  // motion,
} from "framer-motion"

function App() {
  document.body.style.overflowX = "hidden"

  document.body.style.width =
    document.documentElement.clientWidth.toString() + "px"

  function notify() {
    document.body.style.width =
      document.documentElement.clientWidth.toString() + "px"
  }
  document.body.style.scrollBehavior = "smooth"
  window.addEventListener("resize", notify)

  const location = useLocation()

  //Scroll Behavior Manipulation
  // const [containerSize, setContainerSize] = useState(0)
  // const containerRef = useRef(null)
  // const { scrollY } = useScroll()
  // const transform = useTransform(
  //   scrollY,
  //   [0, containerSize],
  //   [0, -containerSize]
  // )

  // const spring = useSpring(transform, { stiffness: 10, mass: 1 })

  // useEffect(() => {
  //   const container = containerRef.current
  //   const body = document.body
  //   const size = container.getBoundingClientRect().height

  //   // set the size of the body to be the sized of the container
  //   // its needed to keep a scrollbar since the container has a fixed position
  //   // see CSS
  //   body.style.height = `${size}px`
  //   setContainerSize(size)
  // }, [])
  // useLayoutEffect(() => {
  //   const container = containerRef.current
  //   const observer = new ResizeObserver((entries) => {
  //     for (const entry of entries) {
  //       if (Array.isArray(entry.contentBoxSize)) {
  //         setContainerSize(entry.contentRect.height)
  //       } else {
  //         setContainerSize(entry.contentRect.height)
  //       }
  //     }
  //   })

  //   observer.observe(container)

  //   return () => observer.disconnect()
  // }, [])

  return (
    <>
      <ColorState>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              // index
              path="/"
              element={<WrappedHome />}
            />
            <Route
              path="/gallery"
              element={
                <Suspense>
                  <WrappedProjects />
                </Suspense>
                // <Projects/>
              }
            />
            {/* <Route
              exact
              path="/services"
              element={
                <>
                <Dummy />
                </>
                }
                /> */}
          </Routes>
        </AnimatePresence>
      </ColorState>
    </>
  )
}

export default App
