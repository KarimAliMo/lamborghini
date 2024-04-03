"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NavModels = {
  id: "nav-models",
  title: "models",
  items: [
    {
      name: "revuelto",
      image: "/Lamborghini_Aventador_Lp700_4-removebg-preview.png",
    },
    {
      name: "urus",
      image:
        "/lamborghini-urus-black-edition-black-cars-white-background-5120x2880-6587.jpg",
    },
    {
      name: "huracan",
      image: "/Huracán-LP-580-2_3-4-Front-Red.webp",
    },
    {
      name: "pre-owned",
    },
    {
      name: "limited series",
    },
    {
      name: "concept",
    },
  ],
};
export default function ModelsLinks() {
  const pathName = usePathname();
  // state NavData is to contain the data of NavModels object
  const [navData, setNavData] = useState(NavModels);
  // state isHovered to determine showing the sublinks list of models
  const [isHovered, setIsHovered] = useState(false);
  // state isSpan to determine showing the animation line under the link
  const [isSpan, setIsSpan] = useState(false);

  return (
    <div>
      {/* control showing the link models if it true or false */}
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
          <div className=" relative text-lg ">
            <Link
              href={`/${navData.title}`}
              className={`uppercase ${
                pathName === `/${navData.title}` ? " text-slate-400" : ""
              }`}
            >
              {navData.title}
            </Link>
            {/* animate presence is to animate the exit of element as motion allow us to animate easily */}
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
                className=" absolute p-8 top-full left-0 h-auto shadow-xl dark:shadow-slate-800 w-full bg-gradient-to-r from-[#8a2387] via-[#e94057] to-[#f27121]  flex flex-col gap-9 mx-auto rounded-xl mt-5 "
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* here i loop inside navData object to return the items inside in away and condition i want only */}
                {navData.items.map((subItem) => {
                  return (
                    <li
                      key={subItem.name}
                      className=" car text-white hover:text-black uppercase"
                    >
                      {subItem.name}
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
