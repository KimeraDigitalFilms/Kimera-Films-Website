import { useContext, useEffect, useRef } from "react"
import webGLFluidEnhanced from "webgl-fluid-enhanced"
import colorContext from "../context/ColorContext"

const App = () => {
  const canvasRef = useRef(null)

  const { canvasBg, canvasColor } = useContext(colorContext)

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 1.5,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 30,
      HOVER: true,
      BRIGHTNESS: 0.12,
      BLOOM: false,
      CURL: 0,
      BACK_COLOR: canvasBg,
      // BACK_COLOR:'rgba(255, 99, 71, 0)',
      // TRANSPARENT: true,
      SPLAT_RADIUS: 0.5,
      // COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
      COLOR_PALETTE: [canvasColor],
    })
  }, [canvasColor])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="transition-colors duration-500"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div className="absolute top-[45%] z-10 flex w-screen flex-col gap-y-7">
        <h1 className="text-center font-Dancing text-7xl font-semibold text-secondary1">
          Bringing bold narratives to life
        </h1>
        <h1 className="text-center font-AvenirBook text-3xl font-semibold text-secondary1">
          Elevating brands in the digital realm
        </h1>
      </div>
    </>
  )
}

export default App
