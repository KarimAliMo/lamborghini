"use client";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
const NavBeyond = {
  id: "nav-beyond",
  title: "beyond",
};
export default function BeyondLink() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  const [isSpan, setIsSpan] = useState(false);
  return (
    <div
      key={NavBeyond.id}
      onMouseEnter={() => setIsSpan(true)}
      onMouseLeave={() => setIsSpan(false)}
      className=" flex flex-col  "
    >
      <div className=" relative ">
        <Link href={`/${NavBeyond.title}`} className=" uppercase  text-lg ">
          {NavBeyond.title}
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
    </div>
  );
}
