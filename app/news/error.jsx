"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className=" h-screen min-w-screen overflow-hidden flex flex-col justify-center items-center gap-8 bg-white dark:bg-slate-950">
      <h2 className=" uppercase font-bold text-xl">
        Oops something went wrong with news...!
      </h2>
      <Button
        //   Attempt to recover from error by rerender the segment
        onClick={() => reset()}
        className=" capitalize font-bold text-lg py-5 px-8"
      >
        try again
      </Button>
    </div>
  );
}
