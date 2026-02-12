"use client";
import About from "@/components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "@/components/Projects";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      // create the smooth scroller
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
    },
    { scope: main },
  );

  return (
    <main id="smooth-wrapper" className="pt-20 relative  z-10 " ref={main}>
      <div id="smooth-content" className="pt-20">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <div className="bg-dotted" />
      </div>
    </main>
  );
}
