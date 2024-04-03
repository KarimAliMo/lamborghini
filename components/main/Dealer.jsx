"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dealer() {
  return (
    <section
      className=" h-[80vh] w-screen overflow-hidden flex items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(/533702.jpg)` }}
    >
      <div className=" container">
        <p className=" uppercase text-2xl md:text-3xl lg:text-5xl mb-8 font-bold text-white dark:text-slate-800">
          dealer locator
        </p>
        <p className=" uppercase text-5xl md:text-6xl  lg:text-8xl font-black w-full lg:w-2/3 text-white dark:text-slate-900">
          find your country dealer
        </p>
        <motion.div
          // to animate the arrow rotation and scaling
          initial={{ rotate: 45, x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
          whileHover={{ rotate: 225, transition: { duration: 0.2 } }}
          whileTap={{
            rotate: -90,
            borderRadius: "100%",
          }}
          className=" w-fit h-fit lg:px-6 lg:py-6 md:px-4 md:py-4  px-1 py-1 bg-white dark:bg-slate-900 mt-8"
        >
          <Link href="#" className=" relative z-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" lg:w-6 lg:h-6  w-5 h-5 text-slate-900 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
