"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className=" h-screen min-w-screen flex flex-col gap-8 overflow-hidden justify-center items-center bg-white dark:bg-slate-950">
      <h2 className=" uppercase text-xl font-bold">
        oops something went wrong with models...!
      </h2>
      <Button
        className=" capitalize font-bold text-lg py-5 px-8"
        onClick={() => reset()}
      >
        try again
      </Button>
    </div>
  );
}
