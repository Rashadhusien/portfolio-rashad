"use client";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const ScrollBasedVelocity = () => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      spanRef.current,
      {
        backgroundPosition: "0% 0%",
      },
      {
        backgroundPosition: "100% 0%",
        ease: "none",
        scrollTrigger: {
          trigger: spanRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
  });
  return (
    <section className="container mx-auto py-20 h-screen">
      <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl ">
        <ScrollVelocityRow
          baseVelocity={0.1}
          direction={1}
          className="opacity-50"
        >
          Software Engineering Problem Solving Software Architecture Software
          Engineering Problem Solving Software Architecture Software Engineering
          Problem Solving Software Architecture Software Engineering Problem
          Solving Software Architecture Software Engineering Problem Solving
          Software Architecture
        </ScrollVelocityRow>
        <p className="text-3xl md:text-5xl lg:text-[4rem] text-center font-bold leading-relaxed my-10">
          Interested In{" "}
          <span
            ref={spanRef}
            className="bg-[linear-gradient(90deg,white_0%,white_50%,#8b31ff_51%,#7000ff_100%)] bg-size-[200%_100%] bg-clip-text text-transparent"
          >
            Collaboration
          </span>{" "}
          ?
        </p>
        <ScrollVelocityRow
          baseVelocity={0.1}
          direction={-1}
          className="opacity-50"
        >
          Agile Development Frontend Development React Native Development Agile
          Development Frontend Development React Native Development Agile
          Development Frontend Development React Native Development Agile
          Development Frontend Development React Native Development Agile
          Development Frontend Development React Native Development
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </section>
  );
};

export default ScrollBasedVelocity;
