import Land from "@/components/modelsUi/Land";
import Image from "next/image";
import Revuelto from "@/public/revuelto.png";
import Hurican from "@/public/Huracán_logo.png";
import Urus from "@/public/Image 34.png";

export default function page() {
  return (
    <div className=" bg-white dark:bg-slate-950 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div
        className=" w-screen h-screen bg-cover bg-no-repeat flex flex-col justify-center"
        style={{ backgroundImage: `url(/gate_models_hero_01.webp)` }}
      >
        <Land />
      </div>
      <div className=" w-screen h-screen relative pt-12 lg:pt-0  bg-white dark:bg-slate-900 flex flex-col justify-end">
        <div className=" container relative z-30 ">
          <Image
            src={Revuelto}
            width={400}
            height={100}
            alt="revuelto-logo-pic"
            className=" w-[400px]"
          />
          <p className=" text-base lg:text-lg font-semibold w-full lg:w-1/2 mb-16 leading-loose dark:text-slate-200 text-slate-800 mt-8">
            The Revuelto is the beginning of a new era for Lamborghini, who has
            harnessed the power of hybridization technology to create the first
            HPEV High Performance Electrified Vehicle. Responding to the need
            for sustainability and powerful performance, the Lamborghini
            Revuelto rewrites all paradigms and represents a technical
            masterpiece beyond anyones imagination. The iconic V12 engine finds
            a new life in this futuristic automotive masterwork that delivers
            unparalleled performance and driving emotions.
          </p>
        </div>
        <div
          className=" bg-cover bg-no-repeate bg-left hidden lg:block h-[70vh] absolute w-[50vw] xl:w-[53vw] 2xl:w-[54vw] right-0 top-0 z-10 "
          style={{ backgroundImage: `url(/gate_models_s_01.jpg)` }}
        >
          <div className=" w-full h-full relative overflow-hidden ">
            <div className=" h-[100vh] w-[30vw] bg-white dark:bg-slate-900 rotate-[25deg] absolute -top-[30%] -left-[10vw]"></div>
          </div>
        </div>
        <div
          className=" bg-cover bg-no-repeate bg-left h-[70vh] hidden lg:block absolute w-[70vw] xl:w-[67vw] 2xl:w-[65vw] right-0 top-[73vh] z-20 "
          style={{ backgroundImage: `url(/gate_models_s_02.jpg)` }}
        >
          <div className=" w-full h-full relative overflow-hidden ">
            <div className=" h-[100vh] w-[30vw] bg-white dark:bg-slate-900 z-10 rotate-[25deg] absolute -top-[30%] -left-[15vw]"></div>
            <div className=" h-[60vh] w-[20vw] bg-white absolute z-10 dark:bg-slate-900 rotate-[25deg] -bottom-1/4 -right-1/4"></div>
          </div>
        </div>
        <div
          className=" bg-cover bg-no-repeate bg-left h-[70vh] block lg:hidden w-full "
          style={{ backgroundImage: `url(/gate_models_s_02.jpg)` }}
        ></div>
      </div>
      <div className=" w-screen lg:min-h-[120vh] h-auto relative  bg-white dark:bg-slate-900 flex flex-col justify-start  lg:justify-end">
        <div className=" container relative  flex flex-col lg:items-end items-start pt-12 lg:pt-0 lg:z-30 ">
          <Image
            src={Hurican}
            width={400}
            height={100}
            alt="revuelto-logo-pic"
            className=" -translate-x-0 2xl:-translate-x-[50%] xl:-translate-x-[30%] lg:-translate-x-[20%]"
          />
          <p className="  text-base lg:text-lg font-semibold lg:w-[40%] w-full mb-12 lg:mb-16 leading-loose dark:text-slate-200 text-slate-800 mt-8">
            From our past, we have learned perfection. This is how the first
            model of the Lamborghini Huracán was born. More performance, more
            control, more innovation. The Huracán is equipped with a powerful
            V10 engine and the latest technologies to perform at its absolute
            best. Engineered to guarantee the best performance and control under
            any driving condition, it is easy to take to the limit, not to
            mention extremely fun, thanks to technology like the Lamborghini
            Doppia Frizione LDF dual clutch gearbox and the
            electronically-controlled four-wheel drive. Enjoy the best driving
            experience, ever. Discover all the Lamborghini Huracán models.
          </p>
        </div>
        <div
          className=" bg-cover bg-no-repeate bg-left h-[70vh] hidden lg:block absolute w-[70vw] xl:w-[67vw] 2xl:w-[65vw] left-0 top-[50vh] z-20 "
          style={{ backgroundImage: `url(/gate_models_s_03.webp)` }}
        >
          <div className=" w-full h-full relative overflow-hidden ">
            <div className=" h-[100vh] w-[30vw] bg-white dark:bg-slate-900 z-10 rotate-[25deg] absolute top-0 -right-[15vw]"></div>
            <div className=" h-[60vh] w-[20vw] bg-white absolute z-10 dark:bg-slate-900 rotate-[25deg] -top-1/4 -left-1/4"></div>
          </div>
        </div>
      </div>
      <div className=" h-[80vh] w-screen bg-white dark:bg-slate-900  relative hidden lg:block ">
        <div
          className=" bg-cover bg-no-repeate bg-left hidden lg:block h-[70vh] absolute w-[50vw] xl:w-[53vw] 2xl:w-[54vw] left-0 top-[3vh] z-10 "
          style={{ backgroundImage: `url(/gate_models_s_04.jpg)` }}
        >
          <div className=" w-full h-full relative overflow-hidden ">
            <div className=" h-[100vh] w-[30vw] bg-white dark:bg-slate-900 rotate-[25deg] absolute top-0 -right-[10vw]"></div>
          </div>
        </div>
      </div>
      <div
        className=" bg-cover bg-no-repeate bg-center h-[70vh] block lg:hidden w-full "
        style={{ backgroundImage: `url(/gate_models_s_03.webp)` }}
      ></div>
      <div className=" w-screen h-screen bg-white dark:bg-slate-900 relative py-16">
        <div className=" container relative z-30 lg:top-1/2 lg:-translate-y-1/2 ">
          <Image
            src={Urus}
            width={300}
            height={100}
            alt="revuelto-logo-pic"
            className=" lg:w-[300px] md:w-[200px] w-[150px]"
          />
          <p className=" text-base lg:text-lg font-semibold w-full lg:w-1/2 mb-16 leading-loose dark:text-slate-200 text-slate-800 mt-8">
            Lamborghini Urus is the world first Super Sport Utility Vehicle, in
            which luxury, sportiness and performance meet comfort and
            versatility. It offers best-in-class driving dynamics, alongside its
            unmistakable elegance of design. Urus embodies the characteristics
            of multiple souls: sporty, elegant and off-road, and has a
            suitability for everyday driving in a range of environments. With
            its surprisingly distinct engine sound, combined with high
            performance, Lamborghini Urus is anything but typical.
          </p>
        </div>
        <div
          className=" bg-cover bg-no-repeate bg-left hidden lg:block h-[90vh] absolute w-[50vw] xl:w-[55vw] 2xl:w-[60vw] right-0 top-0 z-10 "
          style={{ backgroundImage: `url(/gate_models_over_rev_01.jpg)` }}
        >
          <div className=" w-full h-full relative overflow-hidden ">
            <div className=" h-[120vh] w-[30vw] bg-white dark:bg-slate-900 rotate-[25deg] absolute -top-[30%] -left-[10vw]"></div>
          </div>
        </div>
        <div
          className=" bg-cover bg-no-repeate bg-center h-[70vh] block lg:hidden w-full "
          style={{ backgroundImage: `url(/gate_models_over_rev_01.jpg)` }}
        ></div>
      </div>
      <div className=" w-screen min-h-screen bg-white dark:bg-slate-900 relative py-16">
        <div className=" container relative z-30">
          <h2 className=" uppercase font-bold text-4xl dark:text-white text-slate-900">
            limited series
          </h2>
          <p className=" text-base lg:text-lg font-semibold w-full lg:w-1/2 mb-16 leading-loose dark:text-slate-200 text-slate-800 mt-8">
            The Limited Series Lamborghini are the most exclusive, limited
            editions to meet a small and select number of clients. Truly
            representing the state of the art in the domain of super cars, the
            Limited Series models express the highest Lamborghini spirit in
            every respect. Indeed, they are equipped with the most advanced
            features available in the fields of design and technology.
          </p>
        </div>
        <div className=" w-screen h-[80vh] relative ">
          <div
            className=" bg-cover bg-no-repeat bg-center h-[60vh] w-[60vw] absolute -right-[5vw]"
            style={{ backgroundImage: `url(/countach_02.png)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
