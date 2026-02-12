import { DATABASES_AREAS, SKILLS_AREAS, TOOLS_AREAS } from "@/app/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto py-20 z-10 relative">
      <div className="flex flex-col  gap-4 mt-4 mx-10">
        <span className="text-md font-bold uppercase tracking-wider mt-3">
          Skills
        </span>
        <h2 className="text-6xl font-bold text-primary">My Skills</h2>
        <p className="text-lg md:text-2xl leading-relaxed font-bold max-w-xl ">
          I like to take responsibility to craft aesthetic user experience using
          modern frontend architecture.
        </p>
      </div>
      <div className="flex flex-col  gap-4 mt-4 ">
        <ul>
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
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-8 mx-10 w-fit">
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
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
