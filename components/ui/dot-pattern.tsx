"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
}

export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const dotsRef = useRef<SVGCircleElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const cols = Math.ceil(dimensions.width / width);
  const rows = Math.ceil(dimensions.height / height);

  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: col * width + cx,
      y: row * height + cy,
    };
  });

  const playGlow = () => {
    if (!glow || timelineRef.current) return;

    const tl = gsap.timeline();

    tl.to(dotsRef.current, {
      opacity: 1,
      scale: 1.6,
      duration: 2,
      stagger: {
        each: 0.02,
        from: "random",
      },
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50%",
    });

    timelineRef.current = tl;
  };

  const stopGlow = () => {
    if (!timelineRef.current) return;

    timelineRef.current.kill();
    timelineRef.current = null;

    gsap.to(dotsRef.current, {
      opacity: 0.6,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      onMouseEnter={playGlow}
      onMouseLeave={stopGlow}
      className={cn(
        "pointer-events-auto absolute inset-0 h-full w-full text-neutral-400/80 -z-10",
        className,
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {dots.map((dot, index) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          ref={(el) => {
            if (el) dotsRef.current[index] = el;
          }}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          opacity={0.6}
        />
      ))}
    </svg>
  );
}
