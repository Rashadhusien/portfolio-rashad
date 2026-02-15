"use client";
import About from "@/components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Projects"));
const Skills = dynamic(() => import("@/components/Skills"));
const Text = dynamic(() => import("@/components/Text"));
const Contact = dynamic(() => import("@/components/Contact"));
const Experinces = dynamic(() => import("@/components/Experinces"));
const ScrollBasedVelocity = dynamic(
  () => import("@/components/ScrollBasedVelocity"),
);
const Footer = dynamic(() => import("@/components/Footer"));

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
    <main id="smooth-wrapper" className=" relative  z-10 " ref={main}>
      <div
        id="smooth-content"
        // className="bg-linear-to-br from-primary/10 to-secondary/10  border border-border hover:border-accent transition-colors"
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Text />
        <Projects />
        <Experinces />
        <ScrollBasedVelocity />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
