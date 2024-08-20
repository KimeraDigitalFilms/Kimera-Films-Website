import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const EncryptionReveal = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">
      <EncryptButton />
    </div>
  )
}

let TARGET_TEXT = "Design"
const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

const CHARS = "!@#$%^&*():{};|,.<>/?"

const EncryptButton = () => {
  const intervalRef = useRef(null)

  const [text, setText] = useState("Development")

  const scramble = () => {
    let pos = 0

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length)
          const randomChar = CHARS[randomCharIndex]

          return randomChar
        })
        .join("")

      setText(scrambled)
      pos++

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble()
      }
    }, SHUFFLE_TIME)
  }
  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined)
    setText(TARGET_TEXT)
    if (TARGET_TEXT === "Development") {
      TARGET_TEXT = "Design"
    } else {
      TARGET_TEXT = "Development"
    }
  }

  // document.addEventListener("visibilitychange", () => {
  //
  //   });

  let inView = true
  document.addEventListener("visibilitychange", () => {
    // console.log(document.visibilityState)
    if (document.visibilityState == "visible") {
      inView = true
    } else if (document.visibilityState == "hidden") {
      inView = false
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (inView) {
        scramble()
      }
    }, 4000)
    return () => clearInterval(interval)

    // else{
    //     clearInterval(interval);
    // }
  }, [inView])

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      //   onHoverStart={scramble}
      //   onMouseLeave={stopScramble}
      className="group relative overflow-hidden px-4 py-2 font-mono text-3xl font-medium uppercase text-white transition-colors hover:text-orange-600"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.button>
  )
}

export default EncryptionReveal
