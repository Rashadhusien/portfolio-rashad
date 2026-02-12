"use client";
import { EXPERTISE_AREAS } from "@/app/constants";
import SectionTitle from "./SectionTitle";
import TechIconCloud from "./TechIconCloud";
import { Button } from "./ui/button";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Paragraph animation
    gsap.fromTo(
      paragraphRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Expertise areas staggered animation
    if (expertiseRef.current) {
      const buttons = expertiseRef.current.querySelectorAll("button");
      gsap.fromTo(
        buttons,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        },
      );
    }
  });

  return (
    <section id="about" className="py-20 container mx-auto z-30 relative ">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="container-text flex flex-col items-center justify-center gap-4  p-4 rounded-sm  ">
            <p
              ref={paragraphRef}
              className="text-lg md:text-2xl leading-relaxed font-bold "
            >
              I am a passionate software developer with experience in building
              web applications. I enjoy creating seamless user experiences and
              solving complex problems with clean, efficient code.
            </p>
            <h4 className="text-lg md:text-xl font-bold w-full text-start text-accent-foreground tracking-wider">
              Expertise Areas
            </h4>
            <div
              ref={expertiseRef}
              className="grid grid-cols-2 lg:grid-cols-3 items-center justify-center lg:w-full gap-2 sm:gap-4"
            >
              {EXPERTISE_AREAS.map((item) => (
                <Button
                  key={item}
                  className="w-full m-0! md:m-2  about-btn text-lg md:text-xl rounded-[5px] bg-accent "
                >
                  <span className="text-sm lg:text-md">{item}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center size-full ">
            <TechIconCloud />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
