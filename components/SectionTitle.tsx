import React from "react";
import { Highlighter } from "@/components/highlighter";

const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={`text-center mb-12 flex justify-center items-center `}>
      <div className="relative">
        <h2 className={`text-5xl font-bold mb-4 ${className}`}>
          <Highlighter action="underline" color="#8c5cff">
            {title}
          </Highlighter>
        </h2>
        {/* <div className="w-full h-1 bg-primary mx-auto"></div> */}
      </div>
    </div>
  );
};

export default SectionTitle;
