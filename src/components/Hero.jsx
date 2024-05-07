import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 30,
      HOVER: true,
      BLOOM: false,
      CURL: 0,
      SPLAT_RADIUS: 0.5,
      // COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
      COLOR_PALETTE: ['#ED6E0B'],
      
    });
  }, []);

  return (<>
  <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />
  <div className='absolute top-[45%] w-screen flex flex-col gap-y-7'>
<h1 className='text-secondary1 text-7xl text-center font-semibold font-Dancing'>Bringing bold narratives to life</h1>
<h1 className='text-secondary1 text-3xl text-center font-semibold font-Oswald'>Elevating brands in the digital realm</h1>
  </div>
  </>
  )
};

export default App;