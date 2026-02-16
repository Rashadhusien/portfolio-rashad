import { urlFor } from "@/lib/sanity";
import { SkillsData } from "@/lib/types";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Skills = ({ skills }: { skills: SkillsData[] }) => {
  const mainSkills = skills.find((skill) => skill.category === "main");
  const frameworkSkills = skills.find(
    (skill) => skill.category === "framework",
  );
  const databaseSkills = skills.find((skill) => skill.category === "database");
  const toolSkills = skills.find((skill) => skill.category === "tool");

  return (
    <section id="skills" className=" py-20 z-10 relative">
      <SectionTitle
        title="Skills"
        spanTitle="My Skills"
        description="I like to take responsibility to craft aesthetic user experience using
          modern frontend architecture."
      />
      <div className="flex flex-col  gap-4 mt-4 ">
        <div>
          {[mainSkills, frameworkSkills].map(
            (area) =>
              area && (
                <div
                  key={area.title}
                  className="flex flex-col  gap-4 mt-4 mx-10"
                >
                  <span className="text-md font-bold uppercase tracking-wider mt-3">
                    {area.title}
                  </span>
                  <ul className="flex flex-row flex-wrap  gap-8 mt-4 ">
                    {area.skills.map((skill) => (
                      <li
                        key={skill._key}
                        className="flex justify-center items-center "
                      >
                        <Image
                          src={urlFor(skill.image).url()}
                          alt={skill.name}
                          width={50}
                          height={50}
                          className="size-[50px]"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ),
          )}
        </div>
        <div className="grid grid-cols-2 gap-8 mx-10 w-fit">
          <div>
            {databaseSkills && (
              <div className="flex flex-col  gap-4 mt-4 w-fit ">
                <span className="text-md font-bold uppercase tracking-wider mt-3">
                  {databaseSkills.title}
                </span>
                <ul className="flex flex-row  gap-8 mt-4 ">
                  {databaseSkills.skills.map((skill) => (
                    <li
                      key={skill._key}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={urlFor(skill.image).url()}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="size-[50px]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            {" "}
            {toolSkills && (
              <div className="flex flex-col  gap-4 mt-4 ">
                <span className="text-md font-bold uppercase tracking-wider mt-3 ">
                  {toolSkills.title}
                </span>
                <ul className="flex flex-row  gap-8 mt-4 w-fit">
                  {toolSkills.skills.map((skill) => (
                    <li
                      key={skill._key}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={urlFor(skill.image).url()}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="size-[50px]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
