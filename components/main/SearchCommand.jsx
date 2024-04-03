"use client";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useState } from "react";
import { ModelsLinks } from "@/public/smalllinks";
import Link from "next/link";
import { MotorLinks } from "@/public/smalllinks";
import { SubLinks } from "@/public/smalllinks";

export default function SearchCommand() {
  const [models, setModels] = useState(ModelsLinks);
  const [motors, setMotors] = useState(MotorLinks);
  const [sub, setSubLinks] = useState(SubLinks);
  return (
    <Command className=" rounded-lg border shadow-md h-[97%] w-[97%]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className=" max-h-full">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="MODELS">
          {models &&
            models.map((model, _index) => {
              return (
                <CommandItem key={_index}>
                  <Link className=" capitalize" href={model.href}>
                    {model.name}
                  </Link>
                </CommandItem>
              );
            })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="MOTOR SPORTS">
          {motors &&
            motors.map((motor, _index) => {
              return (
                <CommandItem key={_index}>
                  <Link href={motor.href} className=" capitalize">
                    {motor.name}
                  </Link>
                </CommandItem>
              );
            })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="ADDITIONAL FEATURES">
          {sub &&
            sub.map((subLink, _index) => {
              return (
                <CommandItem key={_index}>
                  <Link className=" capitalize" href={subLink.href}>
                    {subLink.title}
                  </Link>
                </CommandItem>
              );
            })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
