"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedWords() {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const words = [
      "Frontend Developer",
      "Crafting Code",
      "Building Digital Experiences",
      "Designing the Web",
      "Turning Ideas Into Interfaces",
      "Code Meets Creativity",
      "Creating Interactive UIs",
    ];
    let index = 0;

    const showWord = () => {
      const letters = containerRef.current!.children;

      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            gsap.delayedCall(1.2, hideWord);
          },
        },
      );
    };

    const hideWord = () => {
      gsap.to(containerRef.current!.children, {
        opacity: 0,
        y: -20,
        stagger: 0.03,
        duration: 0.3,
        onComplete: () => {
          index = (index + 1) % words.length;
          containerRef.current!.innerHTML = words[index]
            .split("")
            .map((l) => `<span>${l}</span>`)
            .join("");
          showWord();
        },
      });
    };

    containerRef.current!.innerHTML = words[0]
      .split("")
      .map((l) => `<span>${l}</span>`)
      .join("");

    showWord();
  }, []);

  return (
    <span className="text-md font-bold bg-secondary/50 p-3 rounded-full tracking-wide flex items-center gap-2">
      <span ref={containerRef} className="inline-block" />
      <span className="inline-block rounded-full w-2 h-2 bg-primary animate-pulse"></span>
    </span>
  );
}
