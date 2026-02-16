"use client";
import { DATABASES_AREAS, SKILLS_AREAS, TOOLS_AREAS } from "@/app/constants";
import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const firstSkillsRef = useRef<HTMLDivElement>(null);
  const secondSkillsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      firstSkillsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: firstSkillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      secondSkillsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: secondSkillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
  });
  return (
    <section id="skills" className=" py-20 z-10 relative">
      <SectionTitle
        title="Skills"
        spanTitle="My Skills"
        description="I like to take responsibility to craft aesthetic user experience using
          modern frontend architecture."
      />
      <div className="flex flex-col  gap-4 mt-4 ">
        <div ref={firstSkillsRef}>
          {SKILLS_AREAS.map((area) => (
            <div key={area.title} className="flex flex-col  gap-4 mt-4 mx-10">
              <span className="text-md font-bold uppercase tracking-wider mt-3">
                {area.title}
              </span>
              <ul className="flex flex-row flex-wrap  gap-8 mt-4 ">
                {area.skills.map((skill) => (
                  <li key={skill} className="flex justify-center items-center ">
                    <Image
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      width={50}
                      height={50}
                      className="size-[50px]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="grid grid-cols-2 gap-8 mx-10 w-fit"
          ref={secondSkillsRef}
        >
          <div>
            {DATABASES_AREAS.map((area) => (
              <div
                key={area.title}
                className="flex flex-col  gap-4 mt-4 w-fit "
              >
                <span className="text-md font-bold uppercase tracking-wider mt-3">
                  {area.title}
                </span>
                <ul className="flex flex-row  gap-8 mt-4 ">
                  {area.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={`/skills/${skill}.svg`}
                        alt={skill}
                        width={50}
                        height={50}
                        className="size-[50px]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            {" "}
            {TOOLS_AREAS.map((area) => (
              <div key={area.title} className="flex flex-col  gap-4 mt-4 ">
                <span className="text-md font-bold uppercase tracking-wider mt-3 ">
                  {area.title}
                </span>
                <ul className="flex flex-row  gap-8 mt-4 w-fit">
                  {area.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={`/skills/${skill}.svg`}
                        alt={skill}
                        width={50}
                        height={50}
                        className="size-[50px]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/right-pattern.svg"
        alt="right pattern"
        width={320}
        height={700}
        className="absolute top-[-100px] ms:top-0 right-0 -z-30 opacity-70 w-[120px] h-[320px] md:w-[320px] md:h-[700px]"
      />
    </section>
  );
};

export default Skills;
