import React from 'react'
// import './Logo.css'
function Logo({src,style}) {
  return (
    <div style={{
      WebkitMask:`url(${src}) no-repeat center`,
      mask:`url(${src}) no-repeat center`
    }}
     className={`logo ${style} mx-auto `}>
    <img src="/logo.svg" className='opacity-0 p-0' />
    </div>
  )
}

export default Logo
