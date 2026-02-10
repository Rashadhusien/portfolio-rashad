"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RotatingBorder() {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <svg
      className="absolute inset-0"
      viewBox="0 0 120 120"
      width="120"
      height="120"
    >
      <circle
        ref={circleRef}
        cx="60"
        cy="60"
        r="56"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="6 10"
        className="text-primary"
      />
    </svg>
  );
}
