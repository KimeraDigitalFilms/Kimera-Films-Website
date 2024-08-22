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
    <div className="relative">
      <canvas
        id="webglCanvas"
        ref={canvasRef}
        className=""
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />
      {/* Content in Hero Section */}
      {/* <div className="absolute top-0 z-10 flex w-full flex-col gap-y-7">  */}
      <h3 className="absolute left-[65%] top-[20%] text-xl font-base text-secondary1 w-[400px] font-InclusiveSans">
        A catalyst for digital evolution, KIMERA seamlessly blends
        creativity,strategy,and technology to build poweful narrations and
        immersive visual experiences that captivate and connect.
      </h3>
      <h2 className="absolute left-[5%] top-[40%] text-4xl font-bold text-secondary1 font-Salisbury">
        Elevating brands in the digital
        <br />
        realm
      </h2>
      <div className="absolute left-[25%] top-[65%] flex w-fit flex-nowrap items-center text-center font-AvenirBook text-3xl font-extrabold text-secondary1 gap-x-4">
        <img src="/logo.svg" alt="" className="w-40" />
         <h1 className="text-9xl font-extrabold uppercase select-none font-OverusedGroteskBold">
          Kimera<sup className="absolute top-2 text-4xl">TM</sup>
        </h1>
      </div>
      {/* </div> */}
    </div>
  )
}

export default App
