"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NavMotors = {
  id: "nav-motorsport",
  title: "motorsport",
  items: [
    "sc63",
    "super trofeo",
    "gt3",
    "motorsport models",
    "drivers",
    "motorsport news",
    "experience",
    "esports",
  ],
};
export default function MotorsportLinks() {
  const [navData, setNavData] = useState(NavMotors);
  const [isHovered, setIsHovered] = useState(false);
  const [isSpan, setIsSpan] = useState(false);

  return (
    <div>
      {navData && (
        <div
          key={navData.id}
          onMouseEnter={() => {
            setIsHovered(true);
            setIsSpan(true);
          }}
          onMouseLeave={() => {
            setIsSpan(false);
            setIsHovered(false);
          }}
          className=" flex flex-col  "
        >
          <div className=" relative ">
            <Link href={`/${navData.title}`} className=" uppercase text-lg ">
              {navData.title}
            </Link>
            <AnimatePresence>
              {isSpan && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0, transition: { duration: 0.5 } }}
                  transition={{ type: "spring", duration: 1 }}
                  className=" absolute h-px left-0 -bottom-2 bg-slate-500 dark:bg-slate-400"
                ></motion.span>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {isHovered && (
              <motion.ul
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -50,
                  transition: { duration: 0.2, delay: 0.7 },
                }}
                transition={{ type: "spring", duration: 0.5 }}
                className=" absolute p-8 top-full left-0 h-auto w-full bg-gradient-to-r from-[#ff00cc] to-[#333399] flex flex-col gap-9 mx-auto rounded-xl mt-5 "
                onMouseLeave={() => setIsHovered(false)}
              >
                {navData.items.map((subItem) => {
                  return (
                    <li
                      key={subItem}
                      className=" text-white uppercase hover:text-black"
                    >
                      {subItem}
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
