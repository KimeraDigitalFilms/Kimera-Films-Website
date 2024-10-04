import { useContext, useEffect, useRef, useState } from "react"
import webGLFluidEnhanced from "webgl-fluid-enhanced"
import colorContext from "../../context/ColorContext"
import "./Hero.css"

const Hero = () => {
  const canvasRef = useRef(null)

  const { canvasBg, canvasColor } = useContext(colorContext)
  const [sensitivity, setSensitivity] = useState(
    window.innerWidth >= 500 ? 1.5 : 4.5
  )

  // useEffect(() => {
  //   setSensitivity(window.innerWidth >= 500 ? 1.5 : 3)
  // }, [window.innerWidth])

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: sensitivity,
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
  }, [canvasColor, canvasBg])

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
      <h3
        id="h3"
        className="font-base absolute font-InclusiveSans text-secondary1"
      >
        A catalyst for digital evolution, KIMERA seamlessly blends creativity,
        strategy and technology to build powerful narratives and immersive
        visual experiences that captivate and connect.
      </h3>
      <h2
        id="h2"
        className="absolute font-Recoleta font-bold text-secondary1"
        // className="absolute left-[15%] top-[20%] font-Recoleta text-2xl font-bold text-secondary1 [@media(min-width:1000px)]:top-[40%] [@media(min-width:1120px)]:text-4xl [@media(min-width:405px)]:left-[20%] [@media(min-width:525px)]:text-3xl [@media(min-width:700px)]:left-[30%] [@media(min-width:970px)]:left-[5%] [@media(min-width:970px)]:top-[45%] [@media(min-width:970px)]:text-2xl"
      >
        Elevating brands in the digital
        <br />
        realm
      </h2>
      <div
        id="mainLogoContainer"
        className="font-AvenirBook  absolute left-[10%] top-[50%] flex w-fit flex-nowrap items-center gap-x-4 text-center font-extrabold text-secondary1 [@media(max-width:970px)]:flex-col [@media(max-width:970px)]:justify-center [@media(min-width:426px)]:left-[15%] [@media(min-width:474px)]:left-[20%] [@media(min-width:700px)]:left-[30%] [@media(min-width:970px)]:left-[25%] [@media(min-width:970px)]:top-[65%]"
      >
        <img
          id="heroLogo"
          src="/logo.svg"
          alt="logo"
          className="w-44 [@media(min-width:1120px)]:w-40 [@media(min-width:970px)]:w-32"
        />

        <h1 className="select-none font-OverusedGroteskBold text-7xl font-extrabold uppercase [@media(min-width:1120px)]:text-9xl [@media(min-width:1800px)]:text-[170px]">
          Kimera
          <span className="absolute text-2xl [@media(min-width:815px)]:text-4xl  [@media(min-width:1120px)]:top-2 [@media(min-width:970px)]:top-5">
            TM
          </span>
        </h1>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Hero
