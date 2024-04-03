"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Land() {
  return (
    <div className=" container">
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" uppercase font-semibold text-2xl lg:text-4xl text-slate-800 dark:text-white "
      >
        lamborghini
      </motion.h2>
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" uppercase lg:text-8xl text-5xl md:text-6xl xl:text-9xl font-bold text-slate-900 dark:text-slate-100 mt-8 "
      >
        models
      </motion.h1>
      <AnimatePresence>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          exit={{ y: 0 }}
          transition={{ duration: 0.5, ease: "linear", repeat: Infinity }}
          className=" absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            className=" w-12 h-12"
            viewBox=" 0 0 15 15"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
              d="M3 2v2l5 5 5-5V2L8 7z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
              d="M3 7v2l5 5 5-5V7l-5 5z"
            ></path>
          </svg>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
