"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      spanRef.current,
      {
        backgroundPosition: "0% 0%", // يبدأ من اليمين
      },
      {
        backgroundPosition: "100% 0%", // يتحرك للشمال
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
    <div className="container mx-auto py-20">
      <p className="text-4xl md:text-6xl lg:text-[4rem] text-center font-bold leading-relaxed">
        I have a{" "}
        <span
          ref={spanRef}
          className="bg-[linear-gradient(90deg,white_0%,white_50%,#8b31ff_51%,#7000ff_100%)] bg-size-[200%_100%] bg-clip-text text-transparent"
        >
          Strong
        </span>{" "}
        obsession for attention to detail.
      </p>
    </div>
  );
};

export default Text;
