import { clsx } from "clsx";
import { CardDemo } from "@/components/ui/advancedCard";
import Landing from "@/components/main/Land";
import CarouselCars from "@/components/main/CarouselCars";
import ConfigureRevuelto from "@/components/main/ConfigureRevuelto";
import Dealer from "@/components/main/Dealer";
import News from "@/components/main/News";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-slate-950 min-h-screen overflow-hidden  flex flex-col justify-center items-center relative">
      <Landing />
      <CarouselCars />
      <ConfigureRevuelto />
      <Dealer />
      <News />
    </div>
  );
}
