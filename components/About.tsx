"use client";
import { EXPERTISE_AREAS } from "@/app/constants";
import SectionTitle from "./SectionTitle";
import TechIconCloud from "./TechIconCloud";
import { Button } from "./ui/button";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const firstParagraphRef = useRef<HTMLParagraphElement>(null);
  const secondParagraphRef = useRef<HTMLParagraphElement>(null);
  // const expertiseRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // First paragraph: starts light (opacity 1), fades to low opacity (0.3) as you scroll
    gsap.fromTo(
      firstParagraphRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0.3,
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
      },
      {
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: secondParagraphRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // Expertise areas staggered animation
    // if (expertiseRef.current) {
    //   const buttons = expertiseRef.current.querySelectorAll("button");
    //   gsap.fromTo(
    //     buttons,
    //     {
    //       opacity: 0,
    //       y: 30,
    //       scale: 0.9,
    //     },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       scale: 1,
    //       duration: 0.6,
    //       ease: "back.out(1.2)",
    //       stagger: 0.1,
    //       scrollTrigger: {
    //         trigger: expertiseRef.current,
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         scrub: true,
    //       },
    //     },
    //   );
    // }
  });

  return (
    <section id="about" className="py-20 container mx-auto z-30 relative ">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        <div className="container-text flex   items-center justify-center gap-4 w-full text-center  p-4 rounded-sm  ">
          <p className="text-lg md:text-5xl leading-relaxed font-bold md:font-extrabold tracking-wide ">
            <span ref={firstParagraphRef}>
              I am a passionate software developer with experience in building
              web applications.
            </span>{" "}
            <span ref={secondParagraphRef}>
              I enjoy creating seamless user experiences and solving complex
              problems with clean, efficient code.
            </span>
          </p>
        </div>
      </div>
      <Image
        src="/right-pattern.svg"
        alt="right pattern"
        width={320}
        height={700}
        className="absolute top-1/2 right-0 -z-30 opacity-50"
      />
      <Image
        src="/left-pattern.svg"
        alt="left pattern"
        width={220}
        height={500}
        className="absolute -top-1/3 left-0 -z-30 opacity-50"
      />
    </section>
  );
};

export default About;
