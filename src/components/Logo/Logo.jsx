import React from "react"
// import './Logo.css'
function Logo({ src, style,id }) {
  return (
    <div id={id}
      style={{
        WebkitMask: `url(${src}) no-repeat center`,
        mask: `url(${src}) no-repeat center`,
      }}
      className={`logo ${style} mx-auto`}
    >
      <img src="/logo.svg" className="p-0 opacity-0" />
    </div>
  )
}

export default Logo
