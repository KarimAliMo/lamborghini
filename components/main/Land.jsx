"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Landing() {
  return (
    <div className=" relative">
      <Carousel
        // to make the carousel full screen
        className="  w-screen h-screen relative top-0 left-0"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className=" -ml-0">
          <CarouselItem className=" pl-0 pt-0">
            <div className=" slideLand1 bg-cover bg-no-repeat h-screen w-full bg-center flex items-center">
              <div className=" container">
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className=" uppercase lg:text-xl text-white dark:text-slate-900 md:text-lg text-base font-bold relative z-40 tracking-widest "
                >
                  join us to{" "}
                  <span className=" text-slate-900 dark:text-white">
                    discover
                  </span>{" "}
                  more
                </motion.p>
                <motion.p
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className=" uppercase font-black lg:text-6xl md:text-4xl text-3xl text-white dark:text-slate-900 w-3/4 relative z-40 lg:leading-normal "
                >
                  lamborghini{" "}
                  <span className=" uppercase text-slate-900 dark:text-white">
                    new
                  </span>{" "}
                  editions released{" "}
                  <span className=" uppercase text-slate-900 dark:text-white">
                    now
                  </span>
                </motion.p>

                <motion.div
                  // to animate the arrow rotation and scaling
                  initial={{ rotate: 45 }}
                  whileHover={{ scale: 1.1, rotate: 225 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  className=" w-fit h-fit lg:px-6 lg:py-6 md:px-4 md:py-4  px-3 py-3 bg-white dark:bg-slate-900 mt-4"
                >
                  <Link href="#" className=" relative z-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" lg:w-8 lg:h-8 md:w-6 md:h-6  w-4 h-4 text-slate-900 dark:text-white"
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
            </div>
          </CarouselItem>
          <CarouselItem className=" pl-0 pt-0">
            <div className=" slideLand2 bg-cover bg-no-repeat h-screen w-full bg-bottom flex items-center">
              <div className=" container">
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className=" uppercase lg:text-xl text-white dark:text-slate-900 md:text-lg text-base font-bold relative z-40 tracking-widest "
                >
                  join us to{" "}
                  <span className=" text-slate-900 dark:text-white">
                    discover
                  </span>{" "}
                  more
                </motion.p>
                <motion.p
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className=" uppercase font-black lg:text-6xl md:text-4xl text-3xl text-white dark:text-slate-900 w-3/4 relative z-40 lg:leading-normal "
                >
                  lamborghini{" "}
                  <span className=" uppercase text-slate-900 dark:text-white">
                    new
                  </span>{" "}
                  editions released{" "}
                  <span className=" uppercase text-slate-900 dark:text-white">
                    now
                  </span>
                </motion.p>

                <motion.div
                  initial={{ rotate: 45 }}
                  whileHover={{ scale: 1.1, rotate: 225 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  className=" w-fit h-fit lg:px-6 lg:py-6 md:px-4 md:py-4  px-3 py-3 bg-white dark:bg-slate-900 mt-4"
                >
                  <a href="#" className=" relative z-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" lg:w-8 lg:h-8 md:w-6 md:h-6  w-4 h-4 text-slate-900 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" pl-0 pt-0">
            <div className=" slideLand3 bg-cover bg-top bg-no-repeat h-screen w-full  flex items-center">
              <div className=" container">
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className=" uppercase lg:text-xl text-white dark:text-slate-900 md:text-lg text-base font-bold relative z-40 tracking-widest "
                >
                  join us to{" "}
                  <span className=" text-slate-900 dark:text-white">
                    discover
                  </span>{" "}
                  more
                </motion.p>
                <motion.p
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className=" uppercase font-black lg:text-6xl md:text-4xl text-3xl text-white dark:text-slate-900 w-3/4 relative z-40 lg:leading-normal "
                >
                  lamborghini{" "}
                  <span className=" uppercase text-slate-900 dark:text-white">
                    new
                  </span>{" "}
                  editions released{" "}
                  <span className=" uppercase text-slate-900 dark:text-white">
                    now
                  </span>
                </motion.p>

                <motion.div
                  initial={{ rotate: 45 }}
                  whileHover={{ scale: 1.1, rotate: 225 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  className=" w-fit h-fit lg:px-6 lg:py-6 md:px-4 md:py-4  px-3 py-3 bg-white dark:bg-slate-900 mt-4"
                >
                  <a href="#" className=" relative z-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" lg:w-8 lg:h-8 md:w-6 md:h-6  w-4 h-4 text-slate-900 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
