import React from 'react'
import './Logo.css'
function Logo({style}) {
  return (
    <div className={`logo ${style}`}>
    <img src="/logo.svg" className='opacity-0' />
    </div>
  )
}

export default Logo
