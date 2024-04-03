"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselSlides } from "@/public/smalllinks";
import { useState } from "react";
import SearchCommand from "./SearchCommand";

export default function CarouselCars() {
  const [slides, setSlides] = useState(CarouselSlides);
  return (
    <div className="  overflow-hidden py-28 ">
      <div className=" text-2xl md:text-4xl text-slate-900 dark:text-white mb-8 uppercase font-bold text-center">
        models
      </div>
      <div className=" uppercase text-base md:text-xl text-center mb-14 text-slate-900 dark:text-white">
        new era started with new models
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className=" w-[99vw] mx-auto relative "
      >
        <div className=" absolute flex items-center justify-center h-full w-full md:w-[49.5%] left-0 top-0 bg-[#ffffffd6] dark:bg-[#0f172af2] z-30">
          <SearchCommand />
        </div>

        <CarouselContent>
          {slides &&
            slides.map((car, _index) => {
              return (
                <CarouselItem
                  className="md:basis-1/2  h-screen bg-cover flex items-center"
                  key={_index}
                  style={{
                    backgroundImage: `url(${car.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "60% 60% ",
                  }}
                >
                  <div>
                    <div className=" text-5xl lg:text-7xl text-slate-50 dark:text-slate-900 font-bold uppercase mb-8 ">
                      {car.title}
                    </div>
                    <div className=" text-2xl text-slate-50 dark:text-slate-800 uppercase font-bold">
                      {car.text}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>

        <CarouselPrevious className=" left-12 top-1/2 translate-y-1/2 z-40" />
        <CarouselNext className=" right-12 top-1/2 translate-y-1/2 z-40" />
      </Carousel>
    </div>
  );
}
