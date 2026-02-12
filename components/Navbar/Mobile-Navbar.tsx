"use client";
import { NAV_LINKS } from "@/app/constants";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function MobileNavbar() {
  useGSAP(() => {
    const textElements = gsap.utils.toArray(".text") as HTMLElement[];

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  });
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer direction={"top"}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="capitalize rounded-full h-10 w-10 shadow-none"
          >
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[70vh] data-[vaul-drawer-direction=top]:max-h-[70vh] py-4">
          <DrawerHeader>
            <DrawerTitle className=" flex items-center justify-between">
              <span className="text-2xl font-bold">Menu</span>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="rounded-full h-10 w-10 shadow-none"
                >
                  <X />
                </Button>
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <div className="no-scrollbar overflow-y-auto px-4">
            <ul className="flex flex-col items-start gap-4 ">
              {NAV_LINKS.map((link) => (
                <DrawerClose key={link.title} asChild>
                  <li className="w-full text py-2 rounded-[12px]">
                    <a
                      href={link.url}
                      className="text-link py-2transition-colors hover:text-primary text-2xl font-bold w-full"
                    >
                      {link.title}
                    </a>
                    <a
                      href={link.url}
                      className=" transition-colors px-2 hover:text-primary text-2xl font-bold w-full"
                    >
                      {link.title}
                    </a>
                  </li>
                </DrawerClose>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default MobileNavbar;
