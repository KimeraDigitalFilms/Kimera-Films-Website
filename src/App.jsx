import React, { Suspense, lazy } from "react"
import Navbar from "./components/Navbar"
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
const WrappedProjects = lazy(() => import("./pages/Projects"))
import WrappedHome from "./pages/Home"
import "./App.css"
import { ColorState } from "./context/ColorContext"
import { AnimatePresence } from "framer-motion"
import SmoothScroll from "./components/SmoothScroll.jsx"

function App() {
  document.body.style.overflowX = "hidden"

  const location = useLocation()

  return (
    <>
      <ColorState>
        <SmoothScroll>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={<WrappedHome />}
              />
              <Route
                path="/gallery"
                element={
                  <Suspense>
                    <WrappedProjects />
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>
        </SmoothScroll>
      </ColorState>
    </>
  )
}

export default App
