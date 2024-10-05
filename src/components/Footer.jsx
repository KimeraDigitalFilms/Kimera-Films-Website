import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // const handleChange = (e) => {
  //   const { id, value } = e.target; //name= name attribute of element that triggered event and same with value
  //   setFormData({
  //     ...formData,
  //     [id]: value, //keep all formdata same but change the object key-value pais whose name matches with that of the field. also add new pair if name dont alread exist
  //   });
  // };

  const form = useRef()
  const [error, setError] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_kfv0oqs",
        "template_876ytij",
        form.current,
        "SkgLwwqay6wLx83lf"
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          })
          setError(false)
          // document.getElementById('contactForm').reset()
          document.getElementById("name").value = ""
          document.getElementById("email").value = ""
          document.getElementById("message").value = ""
          setTimeout(() => {
            setError(null)
          }, 3000)
        },
        (error) => {
          setError(true)
          setTimeout(() => {
            setError(null)
          }, 3000)
        }
      )
  }

  const ref = useRef()
  return (
    <footer ref={ref} className="flex h-fit min-h-screen" id="contact">
      <motion.div className="m-auto flex h-full w-2/3 flex-row items-center justify-between gap-y-5 text-secondary2 [@media(max-width:715px)]:flex-wrap [@media(max-width:715px)]:!justify-around [@media(max-width:970px)]:w-5/6">
        <motion.div className="flex flex-col gap-y-[40px] [@media(max-width:412px)]:gap-y-[10px] [@media(max-width:715px)]:items-center [@media(max-width:715px)]:gap-y-[30px]">
          <motion.h1 className="text-6xl font-extrabold [@media(max-width:362px)]:text-3xl [@media(max-width:715px)]:text-center [@media(max-width:715px)]:text-4xl">
            Let's Work Together
          </motion.h1>

          <motion.div>
            <h1 className="font-semibold [@media(max-width:715px)]:text-center [@media(min-width:362px)]:text-lg">
              Address
            </h1>
            <span className="text-[10px] text-gray-500 [@media(min-width:362px)]:text-xs [@media(min-width:412px)]:text-sm [@media(min-width:461px)]:text-base">
              I-2, Golf City, Plot 11, Sector 75, Noida, Uttar Pradesh
            </span>
          </motion.div>

          <motion.div>
            <h1 className="font-semibold [@media(max-width:715px)]:text-center [@media(min-width:362px)]:text-lg">
              Mail
            </h1>
            <span className="text-xs text-gray-500 [@media(min-width:362px)]:text-sm [@media(min-width:461px)]:text-base">
              info@kimerafilms.art
            </span>
          </motion.div>

          <motion.div>
            <h1 className="font-semibold [@media(max-width:715px)]:text-center [@media(min-width:362px)]:text-lg">
              Phone
            </h1>
            <span className="text-xs text-gray-500 [@media(min-width:362px)]:text-sm [@media(min-width:461px)]:text-base">
              +91 88822 64140
            </span>
          </motion.div>

          <motion.div className="flex flex-wrap gap-x-6 gap-y-6 [@media(max-width:345px)]:gap-x-5">
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=100091328288195"
            >
              <motion.i
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fa-brands fa-square-facebook fa-2xl"
              ></motion.i>
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/kimerafilms?igsh=ZnN3c2FrcDgwdW9o"
            >
              <motion.i
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fa-brands fa-square-instagram fa-2xl"
              ></motion.i>
            </Link>
            <Link target="_blank" to="https://x.com/FilmsByKimera">
              <motion.i
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fa-brands fa-square-x-twitter fa-2xl"
              ></motion.i>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/kimera-films21/"
            >
              <motion.i
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fa-brands fa-linkedin fa-2xl"
              ></motion.i>
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative w-[500px]">
          <motion.form
            onSubmit={sendEmail}
            ref={form}
            id="contactForm"
            className="m-auto flex w-full flex-col flex-nowrap gap-y-5"
          >
            <input
              required
              id="name"
              name="name"
              className="bg-transparent px-3 py-2 text-secondary outline outline-1 outline-secondary1 placeholder:text-gray-500"
              color="white"
              placeholder="Name"
            ></input>
            <input
              required
              id="email"
              name="email"
              className="bg-transparent px-3 py-2 text-secondary outline outline-1 outline-secondary1 placeholder:text-gray-500"
              placeholder="Email"
            ></input>
            <textarea
              required
              rows={5}
              name="message"
              id="message"
              className="text-secondary bg-transparent p-3 outline outline-1 outline-secondary1 placeholder:text-gray-500"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              id="btnsubmit"
              value="SUBMIT"
              // className="rounded-none bg-secondary py-2 hover:cursor-pointer"
              className="scale-100 bg-buttonBg px-4 py-1 font-NeueMontrealLight text-3xl uppercase tracking-wider text-primary transition-all hover:scale-110 hover:cursor-pointer active:scale-95"
            />
            {/* <button
              onClick={sendEmail}

              className="scale-100 bg-buttonBg px-4 py-1 font-NeueMontrealLight text-3xl uppercase tracking-wider text-primary transition-all hover:scale-110 active:scale-95"
            >
              Submit
            </button> */}

            {error === null && <span>&nbsp;</span>}
            {error === false && (
              <span className="text-green-500">Mail Sent</span>
            )}
            {error === true && (
              <span className="text-red-500">Error Occured</span>
            )}
          </motion.form>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
