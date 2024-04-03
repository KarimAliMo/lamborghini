"use client";
import { useState } from "react";
import { ConfigureRevoulto } from "@/public/smalllinks";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ConfigureRevuelto() {
  const [revoulto, setRevoulto] = useState(true);
  const [huracan, setHuracan] = useState(false);
  const [urus, setUrus] = useState(false);
  // configureRevuelto is the array of objects that contains the data of cars used in this section
  const [carConf, setCarConf] = useState(ConfigureRevoulto);
  // state isSpan to determine showing the animation line under the link
  const [isSpan0, setIsSpan0] = useState(false);
  const [isSpan1, setIsSpan1] = useState(false);
  const [isSpan2, setIsSpan2] = useState(false);
  return (
    <section className=" relative overflow-hidden h-[80vh] w-screen hidden lg:block">
      {carConf && (
        <div>
          {/* condition to check the state of revuelto if true it will show the element */}
          {revoulto && (
            <div
              style={{ backgroundImage: `url(${carConf[1].img})` }}
              className=" absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover flex items-center"
            >
              <div className=" container">
                <motion.p
                  // animate the element when showing on screen where initial is the value of start and animate is the value
                  // to animate to it
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="  lg:text-3xl xl:text-4xl  text-slate-900 uppercase font-bold mb-4 pl-4"
                >
                  {carConf[1].subTitle}
                </motion.p>
                <motion.p
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className=" lg:text-7xl xl:text-8xl text-black uppercase font-extrabold lg:w-2/3 xl:w-1/2"
                >
                  {carConf[1].title}
                </motion.p>
                <motion.div
                  // to animate the arrow rotation and scaling
                  initial={{ rotate: 45, x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
                  whileHover={{ rotate: 225, transition: { duration: 0.2 } }}
                  whileTap={{
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  className=" w-fit h-fit lg:px-6 lg:py-6 md:px-4 md:py-4  px-1 py-1 bg-slate-300 dark:bg-slate-900 mt-8"
                >
                  <Link href="#" className=" relative z-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" lg:w-6 lg:h-6 md:w-5 md:h-5  w-3 h-3 text-slate-900 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      />
                    </svg>
                  </Link>
                </motion.div>
                <div className=" flex mt-16 gap-8">
                  <div
                    className=" cursor-pointer uppercase text-slate-900 text-xl font-bold relative"
                    onClick={() => {
                      setRevoulto(true);
                      setHuracan(false);
                      setUrus(false);
                    }}
                    onMouseEnter={() => {
                      setIsSpan0(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan0(false);
                    }}
                  >
                    revuelto
                    <AnimatePresence>
                      {isSpan0 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div
                    className=" cursor-pointer uppercase text-slate-900 text-xl font-bold relative"
                    onClick={() => {
                      setRevoulto(false);
                      setHuracan(true);
                      setUrus(false);
                    }}
                    onMouseEnter={() => {
                      setIsSpan1(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan1(false);
                    }}
                  >
                    huracan
                    <AnimatePresence>
                      {isSpan1 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div
                    className=" cursor-pointer uppercase text-slate-900 text-xl font-bold relative"
                    onClick={() => {
                      setRevoulto(false);
                      setHuracan(false);
                      setUrus(true);
                    }}
                    onMouseEnter={() => {
                      setIsSpan2(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan2(false);
                    }}
                  >
                    urus
                    <AnimatePresence>
                      {isSpan2 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          )}
          {huracan && (
            <div
              style={{ backgroundImage: `url(${carConf[0].img})` }}
              className=" absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover flex items-center"
            >
              <div className=" container">
                <motion.p
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="  text-4xl text-slate-900 uppercase font-bold mb-4 pl-4"
                >
                  {carConf[0].subTitle}
                </motion.p>
                <motion.p
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className=" text-8xl text-black uppercase font-extrabold w-1/2"
                >
                  {carConf[0].title}
                </motion.p>
                <motion.div
                  // to animate the arrow rotation and scaling
                  initial={{ rotate: 45, x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
                  whileHover={{ rotate: 225, transition: { duration: 0.2 } }}
                  whileTap={{
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  className=" w-fit h-fit lg:px-6 lg:py-6 md:px-4 md:py-4  px-1 py-1 bg-slate-300 dark:bg-slate-900 mt-8"
                >
                  <Link href="#" className=" relative z-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" lg:w-6 lg:h-6 md:w-5 md:h-5  w-3 h-3 text-slate-900 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      />
                    </svg>
                  </Link>
                </motion.div>
                <div className=" flex mt-16 gap-8">
                  <div
                    className=" uppercase text-slate-900 text-xl font-bold cursor-pointer relative"
                    onClick={() => {
                      setRevoulto(true);
                      setHuracan(false);
                      setUrus(false);
                    }}
                    onMouseEnter={() => {
                      setIsSpan0(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan0(false);
                    }}
                  >
                    revuelto
                    <AnimatePresence>
                      {isSpan0 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div
                    className=" uppercase text-slate-900 text-xl font-bold cursor-pointer relative"
                    onClick={() => {
                      setRevoulto(false);
                      setHuracan(true);
                      setUrus(false);
                    }}
                    onMouseEnter={() => {
                      setIsSpan1(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan1(false);
                    }}
                  >
                    huracan
                    <AnimatePresence>
                      {isSpan1 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div
                    href=""
                    className=" uppercase text-slate-900 text-xl font-bold cursor-pointer relative"
                    onClick={() => {
                      setRevoulto(false);
                      setHuracan(false);
                      setUrus(true);
                    }}
                    onMouseEnter={() => {
                      setIsSpan2(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan2(false);
                    }}
                  >
                    urus
                    <AnimatePresence>
                      {isSpan2 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          )}
          {urus && (
            <div
              style={{ backgroundImage: `url(${carConf[2].img})` }}
              className=" absolute left-0 top-0 w-full h-full bg-no-repeat bg-cover flex items-center"
            >
              <div className=" container">
                <motion.p
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="  text-4xl text-slate-900 uppercase font-bold mb-4 pl-4"
                >
                  {carConf[2].subTitle}
                </motion.p>
                <motion.p
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className=" text-8xl text-black uppercase font-extrabold w-1/2"
                >
                  {carConf[2].title}
                </motion.p>
                <motion.div
                  // to animate the arrow rotation and scaling
                  initial={{ rotate: 45, x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
                  whileHover={{ rotate: 225, transition: { duration: 0.2 } }}
                  whileTap={{
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  className=" w-fit h-fit lg:px-6 lg:py-6 md:px-4 md:py-4  px-1 py-1 bg-slate-300 dark:bg-slate-900 mt-8"
                >
                  <Link href="#" className=" relative z-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" lg:w-6 lg:h-6 md:w-5 md:h-5  w-3 h-3 text-slate-900 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      />
                    </svg>
                  </Link>
                </motion.div>
                <div className=" flex mt-16 gap-8">
                  <div
                    className=" uppercase text-slate-900 text-xl font-bold cursor-pointer relative"
                    onClick={() => {
                      setRevoulto(true);
                      setHuracan(false);
                      setUrus(false);
                    }}
                    onMouseEnter={() => {
                      setIsSpan0(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan0(false);
                    }}
                  >
                    revuelto
                    <AnimatePresence>
                      {isSpan0 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div
                    href=""
                    className=" uppercase text-slate-900 text-xl font-bold cursor-pointer relative"
                    onClick={() => {
                      setRevoulto(false);
                      setHuracan(true);
                      setUrus(false);
                    }}
                    onMouseEnter={() => {
                      setIsSpan1(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan1(false);
                    }}
                  >
                    huracan
                    <AnimatePresence>
                      {isSpan1 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <div
                    href=""
                    className=" uppercase text-slate-900 text-xl font-bold cursor-pointer relative"
                    onClick={() => {
                      setRevoulto(false);
                      setHuracan(false);
                      setUrus(true);
                    }}
                    onMouseEnter={() => {
                      setIsSpan2(true);
                    }}
                    onMouseLeave={() => {
                      setIsSpan2(false);
                    }}
                  >
                    urus
                    <AnimatePresence>
                      {isSpan2 && (
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0, transition: { duration: 0.5 } }}
                          transition={{ type: "spring", duration: 1 }}
                          className=" absolute h-px left-0 -bottom-2 bg-slate-800 "
                        ></motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
