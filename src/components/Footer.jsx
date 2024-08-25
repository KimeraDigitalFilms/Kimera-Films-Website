import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
// import emailjs from "@emailjs/browser";

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

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_gu1gtzg",
  //       "template_k5ksp3y",
  //       form.current,
  //       "SkgLwwqay6wLx83lf"
  //     )
  //     .then(
  //       (result) => {
  //         setFormData({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //         setError(false);
  //         // document.getElementById('contactForm').reset()
  //         document.getElementById("name").value = "";
  //         document.getElementById("email").value = "";
  //         document.getElementById("message").value = "";
  //         setTimeout(() => {
  //           setError(null);
  //         }, 3000);
  //       },
  //       (error) => {
  //         setError(true);
  //         setTimeout(() => {
  //           setError(null);
  //         }, 3000);
  //       }
  //     );
  // };

  const ref = useRef()
  const isInView = useInView(ref, { margin: "-100px" })

  const smallAnimations = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // delay:1,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <footer ref={ref} className="h-screen" id="contact">
      <motion.div
        // variants={variants}
        // initial="initial"
        // whileInView="animate"
        className="text-secondary2 m-auto flex h-full w-2/3 flex-row items-center justify-between [@media(max-width:715px)]:flex-wrap [@media(max-width:715px)]:!justify-around [@media(max-width:970px)]:w-5/6"
      >
        <motion.div
          className="flex flex-col flex-nowrap gap-y-[40px] [@media(max-width:715px)]:items-center [@media(max-width:715px)]:gap-y-[30px]"
          // variants={variants}
        >
          <motion.h1
            className="text-6xl font-extrabold [@media(max-width:715px)]:text-center [@media(max-width:715px)]:text-4xl"
            // variants={variants}
          >
            Let's Work Together
          </motion.h1>

          <motion.div
          // variants={variants}
          >
            <h1 className="text-lg font-semibold [@media(max-width:715px)]:text-center">
              Address
            </h1>
            <span className="text-gray-500">
              I-2, Golf City, Plot 11, Sector 75, Noida, Uttar Pradesh
            </span>
          </motion.div>

          <motion.div
          // variants={variants}
          >
            <h1 className="text-lg font-semibold [@media(max-width:715px)]:text-center">
              Mail
            </h1>
            <span className="text-gray-500">info@kimerafilms.art</span>
          </motion.div>

          <motion.div
          // variants={variants}
          >
            <h1 className="text-lg font-semibold [@media(max-width:715px)]:text-center">
              Phone
            </h1>
            <span className="text-gray-500">+91 88822 64140</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-6 [@media(max-width:345px)]:gap-x-5"
            // variants={variants}
          >
            {/* <Link target="_blank" to="https://github.com/Inquisitor820">
              <motion.i
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fa-brands fa-square-github fa-2xl"
              ></motion.i>
            </Link> */}
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
              to="https://www.instagram.com/kimeraadvertisement_?igsh=MTYyMDAyY2owNHNoMQ=="
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
            {/* <Link target="_blank" to="https://www.behance.net/shadowz123">
              <motion.i
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", duration: 0.4 }}
                className=" fa-brands fa-square-behance fa-2xl"
              ></motion.i>
            </Link> */}
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
          {/* <motion.div
            className="absolute m-auto -z-10 w-1/2"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
            viewport={{ once: true }}
          >
            <motion.svg
              className="[@media(max-width:500px)]:w-[350px] [@media(max-width:400px)]:!w-[300px] [@media(max-width:500px)]:h-[350px] w-[450px] h-[450px]"
              viewBox="0 0 1024 1124"
              // version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#3b33ff"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 5 }}
                fill="none"
                style={{
                  verticalAlign: "middle",
                  overflow: "hidden",
                }}
                strokeWidth={3}
                d="M597.333333 955.733333H426.666667a17.066667 17.066667 0 0 1-17.066667-17.066666v-153.6H85.333333a17.066667 17.066667 0 0 1-17.066666-17.066667V469.333333c0-63.5904 22.647467-118.459733 67.293866-163.106133S235.076267 238.933333 298.666667 238.933333H580.266667V85.333333a17.066667 17.066667 0 0 1 17.066666-17.066666h170.666667a17.066667 17.066667 0 0 1 17.066667 17.066666v85.333334a17.066667 17.066667 0 0 1-17.066667 17.066666h-153.6v51.2h116.906667c60.9792 1.2288 113.749333 23.876267 157.1328 67.293867C933.085867 350.8736 955.733333 405.742933 955.733333 469.333333V768a17.066667 17.066667 0 0 1-17.066666 17.066667H614.4v153.6a17.066667 17.066667 0 0 1-17.066667 17.066666z m-153.6-34.133333h136.533334v-136.533333h-136.533334v136.533333z m153.6-170.666667h324.266667V469.333333c0-54.971733-18.756267-100.420267-57.2928-138.973866-37.461333-37.495467-81.083733-56.234667-133.341867-57.2928H614.4v238.933333a17.066667 17.066667 0 1 1-34.133333 0V273.066667h-159.5904c14.4896 9.216 28.2112 20.2752 41.096533 33.160533C506.4192 350.8736 529.066667 405.742933 529.066667 469.333333V750.933333h68.266666z m-170.666666 0h68.266666v-51.2H102.4v51.2h324.266667zM102.4 665.6h392.533333V469.333333c0-54.971733-18.7392-100.420267-57.2928-138.973866-37.461333-37.444267-81.032533-56.183467-133.1712-57.2928h-5.802666c-54.971733 0-100.420267 18.7392-138.973867 57.2928S102.4 414.3616 102.4 469.333333V665.6zM614.4 153.6h136.533333V102.4h-136.533333v51.2z"
              />
            </motion.svg>
          </motion.div> */}

          <motion.form
            // onSubmit={sendEmail}
            ref={form}
            id="contactForm"
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1, delay: 1 }}
            // viewport={{ once: true }}
            className="m-auto flex w-full flex-col flex-nowrap gap-y-5"
          >
            <input
              required
              id="name"
              name="name"
              className="bg-transparent px-3 py-2 text-secondary1 outline outline-1 outline-secondary1 placeholder:text-gray-500"
              color="white"
              placeholder="Username"
            ></input>
            <input
              required
              id="email"
              name="email"
              className="bg-transparent px-3 py-2 text-secondary1 outline outline-1 outline-secondary1 placeholder:text-gray-500"
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
            {/* <input
              type="submit"
              id="btnsubmit"
              value="SEND"
              className="rounded-none bg-secondary py-2 hover:cursor-pointer"
            /> */}
            <button
              // onClick={sendEmail}

              className="bg-buttonBg font-NeueMontrealLight scale-100 px-4 py-1 text-3xl uppercase tracking-wider text-primary transition-all hover:scale-110 active:scale-95"
            >
              Submit
            </button>

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

      <motion.span
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.05 }}
        className="relative bottom-12 left-6 mb-4 block pl-1 text-sm font-medium text-primary md:text-sm [@media(max-width:715px)]:bottom-6"
      >
        {"Designed by Robin Sen".split("").map((char, i) => {
          return (
            <motion.span variants={smallAnimations} key={i}>
              {char}
            </motion.span>
          )
        })}
      </motion.span>
    </footer>
  )
}

export default Footer
