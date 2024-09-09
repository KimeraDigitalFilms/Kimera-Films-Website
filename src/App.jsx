import React, { Suspense, lazy } from "react"
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
import { AnimatePresence } from "framer-motion"
import SmoothScroll from "./components/SmoothScroll.jsx"

function App() {
  document.body.style.overflowX = "hidden"

  // document.body.style.width =
  //   document.documentElement.clientWidth.toString() + "px"

  // function notify() {
  //   document.body.style.width =
  //     document.documentElement.clientWidth.toString() + "px"
  // }
  // document.body.style.scrollBehavior = "smooth"
  // window.addEventListener("resize", notify)

  const location = useLocation()

  return (
    <>
      <ColorState>
        <SmoothScroll>
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
        </SmoothScroll>
      </ColorState>
    </>
  )
}

export default App
