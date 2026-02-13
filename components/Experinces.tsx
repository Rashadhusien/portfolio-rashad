import React from "react";
import SectionTitle from "./SectionTitle";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { EXPERINCES_CONTENT } from "@/app/constants";
import Image from "next/image";

const Experinces = () => {
  return (
    <section id="experinces" className="relative container mx-auto">
      <div className="sm:mx-20 sm:py-20">
        <SectionTitle
          spanTitle="work"
          title="Experinces"
          description="A quick recap of where I've worked."
        />
        <div className="flex justify-center items-center h-full text-center mt-10">
          <StickyScroll content={EXPERINCES_CONTENT} />
        </div>
      </div>
      <Image
        src="/right-pattern.svg"
        alt="right pattern"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 -z-30 opacity-70 w-[120px] h-[320px] md:w-[220px] md:h-[500px]"
      />
      <Image
        src="/left-pattern.svg"
        alt="left pattern"
        width={100}
        height={100}
        className="absolute -top-[20%] opacity-70 left-0 -z-30 w-[120px] h-[320px] md:w-[220px] md:h-[500px]"
      />
    </section>
  );
};

export default Experinces;
