"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  spanTitle: string;
  description: string;
}

const SectionTitle = ({ title, spanTitle, description }: Props) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      spanRef.current,
      {
        opacity: 0,
        // scale: 0.9,
      },
      {
        opacity: 1,
        // scale: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: spanRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      h2Ref.current,
      {
        opacity: 0,
        // scale: 0.9,
      },
      {
        opacity: 1,
        // scale: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      pRef.current,
      {
        opacity: 0,
        // scale: 0.9,
      },
      {
        opacity: 1,
        // scale: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
  });
  return (
    <div className="flex flex-col  gap-4 mt-4 mx-10">
      <span
        className="text-md font-bold uppercase tracking-wider mt-3"
        ref={spanRef}
      >
        {spanTitle}
      </span>
      <h2 className="text-6xl font-bold text-primary" ref={h2Ref}>
        {title}
      </h2>
      <p
        className="text-lg md:text-2xl leading-relaxed font-bold max-w-xl "
        ref={pRef}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
