"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";
import ThreeDCardProject from "./Project";
import { ProjectData } from "@/lib/types";
import { urlFor } from "@/lib/sanity";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projects }: { projects: ProjectData[] }) => {
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
          {projects.map((project) => (
            <ThreeDCardProject
              key={project.title}
              imageSrc={urlFor(project.image).url()}
              title={project.title}
              link={project.liveLink}
              githubLink={project.githubLink}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
