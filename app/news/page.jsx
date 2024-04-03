import Articles from "@/components/allNews/Articles";

export default function page() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen overflow-hidden  flex flex-col justify-center items-center ">
      <div className=" flex flex-col relative min-h-screen w-screen pt-16">
        <div className="absolute top-0 left-0 w-full h-[80vh] bg-[#F8F8F7] z-10 dark:bg-slate-900 "></div>
        <Articles />
      </div>
    </div>
  );
}
