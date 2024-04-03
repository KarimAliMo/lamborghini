"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DealerLink = {
  id: "nav-dealerships",
  name: "dealerships",
};
const MuseumLink = {
  id: "nav-museum",
  name: "museum",
};
const StoreLink = {
  id: "nav-store",
  name: "store",
};
export default function SideLinks() {
  const [isSpan1, setIsSpan1] = useState(false);
  const [isSpan2, setIsSpan2] = useState(false);
  const [isSpan3, setIsSpan3] = useState(false);
  return (
    <div className=" flex flex-row gap-6 items-center">
      {/* first side link DealerShips */}
      <div
        key={DealerLink.id}
        onMouseEnter={() => setIsSpan1(true)}
        onMouseLeave={() => setIsSpan1(false)}
        className=" flex flex-col  "
      >
        <div className=" relative ">
          <Link href={`/${DealerLink.name}`} className=" uppercase text-lg ">
            {DealerLink.name}
          </Link>

          <AnimatePresence>
            {isSpan1 && (
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
      </div>
      {/* Second side link Museum */}
      <div
        key={MuseumLink.id}
        onMouseEnter={() => setIsSpan2(true)}
        onMouseLeave={() => setIsSpan2(false)}
        className=" flex flex-col  "
      >
        <div className=" relative ">
          <Link href={`/${MuseumLink.name}`} className=" uppercase text-lg ">
            {MuseumLink.name}
          </Link>

          <AnimatePresence>
            {isSpan2 && (
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
      </div>
      {/* Third side link Store */}
      <div
        key={StoreLink.id}
        onMouseEnter={() => setIsSpan3(true)}
        onMouseLeave={() => setIsSpan3(false)}
        className=" flex flex-col  "
      >
        <div className=" relative ">
          <Link href={`/${StoreLink.name}`} className=" uppercase text-lg ">
            {StoreLink.name}
          </Link>

          <AnimatePresence>
            {isSpan3 && (
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
      </div>
    </div>
  );
}
