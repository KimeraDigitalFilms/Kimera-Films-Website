import React from 'react'
import Distortion from '../components/Distortion/Distortion'
import TickerComponent from '../components/Ticker/Ticker'


function Home() {
  return (
    <div className='h-[750vh]'>
      <Distortion/>
      <TickerComponent />
    </div>
  )
}

export default Home
