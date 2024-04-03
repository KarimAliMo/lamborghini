"use client";
import { Posts } from "@/public/smalllinks";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function News() {
  const [postData, setPostData] = useState(Posts);
  return (
    <div className=" flex flex-col relative min-h-screen w-screen">
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-[#F8F8F7] z-10 dark:bg-slate-900 "></div>
      <div className=" container pt-20">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" uppercase text-slate-800 dark:text-slate-200 relative z-20 font-semibold text-2xl lg:text-4xl "
        >
          news
        </motion.h1>
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" uppercase lg:text-7xl text-4xl md:text-5xl xl:text-8xl font-bold text-slate-900 dark:text-slate-100 relative z-20 mt-8 tracking-widest"
        >
          lamborghini world
        </motion.h2>
        {postData && (
          <div>
            <div
              className=" h-[70vh] bg-cover bg-no-repeat relative z-20 mt-12"
              style={{
                backgroundImage: `url(${postData[0].img})`,
              }}
            >
              <Link
                href={`/news/${postData[0].title}`}
                className=" absolute left-0 top-0 w-full h-full"
              ></Link>
            </div>
            <p className=" uppercase text-xl text-slate-700 dark:text-slate-400 mt-16">
              {postData[0].date}
            </p>
            <h3 className=" uppercase text-2xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mt-12">
              <Link href={`/news/${postData[0].title}`}>
                {postData[0].title}
              </Link>
            </h3>
            <p className=" capitalize text-lg text-slate-600 dark:text-slate-400 mt-8">
              {postData[0].subTitle}
            </p>
            <div className=" grid grid-cols-1 lg:grid-cols-2 mt-16 gap-12 mb-20">
              <motion.div
                initial={{ x: "50%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundImage: `url(${postData[1].img})` }}
                className=" bg-cover bg-no-repeat h-[30vh] lg:h-auto relative z-20"
              >
                <Link
                  href={`/news/${postData[1].title}`}
                  className=" absolute left-0 top-0 w-full h-full"
                ></Link>
              </motion.div>
              <motion.div
                initial={{ x: "-50%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className=" flex flex-col gap-16"
              >
                <p className="uppercase text-xl text-slate-700 dark:text-slate-400">
                  {postData[1].date}
                </p>
                <h2 className=" uppercase text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 dark:text-slate-100">
                  <Link href={`/news/${postData[1].title}`}>
                    {postData[1].title}
                  </Link>
                </h2>
                <Button
                  className=" uppercase text-lg py-6 w-fit px-16 rounded-none font-normal tracking-wide"
                  variant="outline"
                >
                  <Link href={`/news/${postData[1].title}`}>read more</Link>
                </Button>
              </motion.div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 mt-16 gap-12 mb-20">
              <motion.div
                initial={{ x: "50%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundImage: `url(${postData[2].img})` }}
                className=" bg-cover bg-no-repeat h-[30vh] lg:h-auto relative z-20"
              >
                <Link
                  href={`/news/${postData[2].title}`}
                  className=" absolute left-0 top-0 w-full h-full"
                ></Link>
              </motion.div>
              <motion.div
                initial={{ x: "-50%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className=" flex flex-col gap-16"
              >
                <p className="uppercase text-xl text-slate-700 dark:text-slate-400">
                  {postData[2].date}
                </p>
                <h2 className=" uppercase text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 dark:text-slate-100">
                  <Link href={`/news/${postData[2].title}`}>
                    {postData[2].title}
                  </Link>
                </h2>
                <Button
                  className=" uppercase text-lg py-6 w-fit px-16 rounded-none font-normal tracking-wide"
                  variant="outline"
                >
                  <Link href={`/news/${postData[2].title}`}>read more</Link>
                </Button>
              </motion.div>
            </div>
            <div className=" text-center">
              <Button
                className=" uppercase text-lg py-8 w-fit px-16 rounded-none font-normal tracking-wider mb-20"
                variant="outline"
              >
                <Link href={`/news/`}>see all</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
