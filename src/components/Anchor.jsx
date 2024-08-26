import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useMotionValueEvent, useScroll } from "framer-motion"

const Anchor = ({ content, colorStyle, href, onClick }) => {
  return (
    <>
      <div className="">
        <FlyoutLink href={href} colorStyle={colorStyle} onClick={onClick}>
          {content}
        </FlyoutLink>
      </div>
    </>
  )
}

const FlyoutLink = ({ children, href, colorStyle, onClick }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const [onBlack, setOnBlack] = useState(false)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 55) {
      setOnBlack(false)
    } else {
      setOnBlack(true)
    }
  })
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link
        to={href}
        onClick={onClick}
        id="navLink"
        className={`relative transition-colors duration-200 ${
          location.pathname === href
            ? "text-primary hover:cursor-default"
            : onBlack
              ? "text-white"
              : "text-secondary1"
        } ${colorStyle}`}
      >
        {children}
        {location.pathname !== href && (
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
          />
        )}
      </Link>
    </div>
  )
}

const AnchorButton = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const [onBlack, setOnBlack] = useState(false)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 55) {
      setOnBlack(false)
    } else {
      setOnBlack(true)
    }
  })

  const navigate = useNavigate()
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <button
        id="contactButton"
        type="button"
        onClick={() => {
          return new Promise((resolve) => {
            navigate("/")
            if (location.pathname === "/") {
              resolve()
            } else {
              setTimeout(() => {
                resolve()
              }, 1850)
            }
          }).then(() => {
            window.scrollTo(0, document.getElementById("contact").offsetTop)
          })
          // window.scrollTo({
          //   left: 0,
          //   top: document.body.scrollHeight,
          //   behavior: "smooth",
          // })
        }}
        className={`${onBlack ? "text-white" : "text-secondary1"} transition-colors`}
      >
        Contact
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </button>
    </div>
  )
}

export default Anchor
export { AnchorButton }
