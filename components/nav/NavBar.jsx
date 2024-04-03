import Image from "next/image";
import NavLinks from "@/components/nav/NavLinks";
import SideLinks from "@/components/nav/SideLinks";
import MobileMenu from "@/components/nav/MobileMenu";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";

// Main navigation bar with sub nav components init
export default function NavBar() {
  return (
    <div className=" bg-white   dark:bg-slate-950 fixed border-b mx-auto z-50 w-full top-0 left-0 shadow-xl dark:shadow-slate-800">
      <div className=" container py-4 mx-auto flex flex-row justify-between gap-5 items-center ">
        <div className=" flex flex-row xl:gap-20 lg:gap-14 gap-10">
          <div className=" block xl:w-[70px] xl:h-[70px] w-14 h-14">
            {/* Logo of website */}
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Logo"
                className=" xl:w-[70px] xl:h-[70px] w-14 h-14 aspect-square"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <NavLinks />
        </div>
        <div className=" flex items-center gap-8 lg:gap-16">
          <div className=" hidden lg:block">
            <SideLinks />
          </div>
          {/* Dark mode component imported next */}
          <ModeToggle />
          {/* The responsive mobile menu with all links */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
