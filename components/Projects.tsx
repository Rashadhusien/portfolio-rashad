"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // const sectionRef = useRef<HTMLDivElement>(null);
  // const pinWrapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const pinWrap = pinWrapRef.current;

  //   if (!section || !pinWrap) return;

  //   const ctx = gsap.context(() => {
  //     const totalWidth = pinWrap.scrollWidth;
  //     const scrollLength = totalWidth - window.innerWidth;

  //     gsap.to(pinWrap, {
  //       x: -scrollLength,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top top",
  //         end: `+=${totalWidth}`,
  //         scrub: true,
  //         pin: true,
  //         anticipatePin: 1,
  //       },
  //     });
  //   }, section);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section id="projects" className="relative z-10">
      <div className="container mx-auto py-20">
        <SectionTitle title="Projects" />
      </div>

      {/* Horizontal Scroll Section */}
      {/* <section
        ref={sectionRef}
        className="relative h-[calc(100vh-8rem)] overflow-hidden"
      >
        <div
          ref={pinWrapRef}
          className="flex gap-16 items-center h-full px-20 w-max"
        >
          <h2 className="text-3xl min-w-[500px]">Horizontal Scroll Section</h2>

          <Image
            src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg"
            width={500}
            height={500}
            alt=""
            className="rounded-xl min-w-[500px]"
          />

          <Image
            src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg"
            width={500}
            height={500}
            alt=""
            className="rounded-xl min-w-[500px]"
          />

          <Image
            src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg"
            width={500}
            height={500}
            alt=""
            className="rounded-xl min-w-[500px]"
          />
        </div>
      </section> */}
    </section>
  );
};

export default Projects;
