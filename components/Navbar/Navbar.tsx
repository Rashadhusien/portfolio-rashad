"use client";

import Image from "next/image";
import { NAV_LINKS } from "../../app/constants";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MobileNavbar from "./Mobile-Navbar";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // glass effect
    ScrollTrigger.create({
      start: "top -80",
      onEnter: () => {
        gsap.to(navRef.current, {
          margin: "1rem",
          borderRadius: "1rem",
          backgroundColor: "var(--nav-glass-bg)",
          boxShadow: "var(--nav-glass-shadow)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid var(--nav-glass-border)",
          duration: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          margin: "0",
          borderRadius: "0",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
          duration: 0.3,
        });
      },
    });

    // hide / show on scroll direction
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1) {
          // scrolling DOWN
          gsap.to(navRef.current, {
            y: "-120%",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          // scrolling UP
          gsap.to(navRef.current, {
            y: "0%",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      },
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 h-20 px-2 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="flex items-center justify-between h-full w-full">
        <Image
          className="invert dark:invert-0"
          src="/logo.svg"
          alt="Logo"
          width={24}
          height={24}
        />

        <ul className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <li
              key={link.title}
              className="hover:text-primary py-2 px-4 rounded-[10px] text-lg transition-colors"
            >
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
