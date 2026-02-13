"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";
import ThreeDCardProject from "./Project";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinWrap = pinWrapRef.current;

    if (!section || !pinWrap) return;

    const ctx = gsap.context(() => {
      const totalWidth = pinWrap.scrollWidth;
      const scrollLength = totalWidth - window.innerWidth;

      gsap.to(pinWrap, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative z-10 ">
      <div className="container mx-auto py-20">
        <SectionTitle
          spanTitle="My Projects"
          title="Projects"
          description="Some things I've built with love, expertise and a pinch of magical ingredients."
        />
      </div>

      {/* Horizontal Scroll Section */}
      <section
        ref={sectionRef}
        className="relative h-[calc(100vh-8rem)] overflow-hidden"
      >
        <div
          ref={pinWrapRef}
          className="flex gap-16 items-center h-full px-20 w-max"
        >
          <ThreeDCardProject
            imageSrc="/projects/project-4.png"
            title="Dev Overflow "
            link="https://devflow.rashadhussein.com/"
            githubLink="https://github.com/Rashadhusien/devflow"
            description="DevFlow is a professional-grade web application designed to help developers ask questions, share knowledge, and collaborate on technical problems."
          />
          <ThreeDCardProject
            imageSrc="/projects/project-2.png"
            title="Storage Management App"
            githubLink="https://github.com/Rashadhusien/storage_managment"
            link="https://storage-managment-indol.vercel.app/"
            description="A storage management application built with Next.js and Tailwind CSS, featuring a user-friendly interface for managing storage data."
          />
          <ThreeDCardProject
            imageSrc="/projects/project-3.png"
            title="Movie App"
            githubLink="https://github.com/Rashadhusien/Movie-Application"
            link="https://movieapp.rashadhussein.com/"
            description="A responsive movie browsing web application that allows users to explore and discover movies by popularity, rating, or search."
          />
        </div>
      </section>
    </section>
  );
};

export default Projects;
