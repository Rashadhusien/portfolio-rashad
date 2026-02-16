"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,

  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    cardText?: React.ReactNode | string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });

  /*
   * Optimization: Memoize breakpoints to avoid recalculating on every render.
   * Calculations only need to happen when content length changes.
   */
  const cardsBreakpoints = React.useMemo(() => {
    return content.map((_, index) => index / content.length);
  }, [content]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    // Only update state if the index actually changed
    if (closestBreakpointIndex !== activeCard) {
      setActiveCard(closestBreakpointIndex);
    }
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#3f1d2e", // rose-dark
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const backgroundGradient =
    linearGradients[activeCard % linearGradients.length];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex  justify-center space-x-10 overflow-y-scroll scrollbar-hide h-[calc(100vh-200px)] p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="sm:max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 text-start w-full"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-start mt-10 max-w-sm text-slate-300 w-full"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-24 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:flex  justify-center items-center text-2xl font-bold",
          contentClassName,
        )}
      >
        {content[activeCard].cardText ?? null}
      </div>
    </motion.div>
  );
};
