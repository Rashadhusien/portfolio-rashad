"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Highlighter } from "./highlighter";
import { AboutData } from "@/lib/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = ({ about }: { about: AboutData }) => {
  const firstParagraphRef = useRef<HTMLParagraphElement>(null);
  const secondParagraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // First paragraph: starts light (opacity 1), fades to low opacity (0.3) as you scroll
    gsap.fromTo(
      firstParagraphRef.current,
      {
        opacity: 1,
        textShadow: "4px 4px 60px rgba(255,255,255,0.1)",
      },
      {
        opacity: 0.3,
        textShadow: "none",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: secondParagraphRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // Second paragraph: starts with low opacity (0.3), becomes light (opacity 1) as you scroll to it
    gsap.fromTo(
      secondParagraphRef.current,
      {
        opacity: 0.3,
        textShadow: "none",
      },
      {
        opacity: 1,
        textShadow: "4px 4px 60px rgba(255,255,255,0.1)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: secondParagraphRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );
  });

  return (
    <section id="about" className="py-20 z-30 relative ">
      <div className=" px-4">
        <div className={`text-center mb-12 flex justify-center items-center `}>
          <div className="relative">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 `}>
              <Highlighter action="underline" color="#8c5cff">
                {about.title}
              </Highlighter>
            </h2>
            {/* <div className="w-full h-1 bg-primary mx-auto"></div> */}
          </div>
        </div>{" "}
        <div className="container-text flex   items-center justify-center gap-4 w-full text-center  p-4 rounded-sm  ">
          <p className="text-lg md:text-5xl leading-relaxed font-bold max-w-6xl ">
            <span ref={firstParagraphRef}>{about.firstDescription}</span>{" "}
            <span ref={secondParagraphRef}>{about.secondDescription}</span>
          </p>
        </div>
      </div>

      <Image
        src="/left-pattern.svg"
        alt="left pattern"
        width={220}
        height={500}
        className="absolute -top-1/6 left-0 -z-30 opacity-50 w-[120px] h-[320px] md:w-[220px] md:h-[500px]"
      />
    </section>
  );
};

export default About;
