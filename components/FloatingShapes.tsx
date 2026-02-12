"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = containerRef.current?.querySelectorAll(".shape");

    shapes?.forEach((shape) => {
      // floating animation
      gsap.to(shape, {
        x: () => gsap.utils.random(-25, 25),
        y: () => gsap.utils.random(-25, 25),
        rotation: () => gsap.utils.random(-8, 8),
        duration: gsap.utils.random(3, 6),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // hover animation
      shape.addEventListener("mouseenter", () => {
        gsap.to(shape, {
          scale: 1.2,
          rotation: "+=10",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      shape.addEventListener("mouseleave", () => {
        gsap.to(shape, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-auto">
      {/* TypeScript */}
      <svg
        className="shape absolute top-8 left-8 cursor-pointer"
        width="40"
        height="40"
      >
        <rect
          x="2"
          y="2"
          width="46"
          height="46"
          fill="#3178C6"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
        <text x="10" y="38" fontSize="25" fontWeight="bold" fill="#FFF">
          TS
        </text>
      </svg>

      {/* React */}
      <svg
        className="shape absolute top-12 right-16 cursor-pointer"
        width="55"
        height="50"
      >
        <ellipse
          cx="27.5"
          cy="25"
          rx="24"
          ry="9"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="3"
        />
        <ellipse
          cx="27.5"
          cy="25"
          rx="24"
          ry="9"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="3"
          transform="rotate(60 27.5 25)"
        />
        <ellipse
          cx="27.5"
          cy="25"
          rx="24"
          ry="9"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="3"
          transform="rotate(120 27.5 25)"
        />
        <circle cx="27.5" cy="25" r="5" fill="#61DAFB" />
      </svg>

      {/* MongoDB */}
      <svg
        className="shape absolute top-24 left-[450px] cursor-pointer"
        width="45"
        height="52"
      >
        <ellipse
          cx="22.5"
          cy="12"
          rx="18"
          ry="8"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
        <rect x="4.5" y="12" width="36" height="30" fill="#00D4AA" />
        <ellipse
          cx="22.5"
          cy="42"
          rx="18"
          ry="8"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
      </svg>

      {/* Terminal */}
      <svg
        className="shape absolute top-1/3 left-[250px] cursor-pointer"
        width="55"
        height="45"
      >
        <rect x="2" y="2" width="50" height="40" fill="#1A1A2E" rx="4" />
        <text
          x="10"
          y="32"
          fontSize="14"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#00D4AA"
        >
          &gt;_
        </text>
      </svg>

      {/* Next.js Logo */}
      <svg
        className="shape absolute top-20 right-[450px] cursor-pointer"
        width="50"
        height="50"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
            fill="#000000"
          />
        </g>
      </svg>

      {/* Docker */}
      <svg
        width="60"
        height="45"
        className="shape absolute bottom-16 right-[550px] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 28 Q5 28 5 24 L5 22 Q5 18 12 18 L48 18 Q52 18 52 22 L52 28 Q52 35 40 38 Q30 40 20 38 Q12 36 10 28"
          fill="#2496ED"
          stroke="#1A1A2E"
          strokeWidth="2"
        />
        <rect
          x="12"
          y="20"
          width="7"
          height="6"
          fill="#FFF"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="21"
          y="20"
          width="7"
          height="6"
          fill="#FFF"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="30"
          y="20"
          width="7"
          height="6"
          fill="#FFF"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="39"
          y="20"
          width="7"
          height="6"
          fill="#FFF"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="21"
          y="12"
          width="7"
          height="6"
          fill="#FFF"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="30"
          y="12"
          width="7"
          height="6"
          fill="#FFF"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="30"
          y="4"
          width="7"
          height="6"
          fill="#FFF"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <circle cx="8" cy="24" r="2" fill="#1A1A2E" />
      </svg>

      {/* Keyboard */}
      <svg
        width="54"
        height="28"
        className="shape absolute top-1/2 right-12 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 28"
      >
        <rect
          x="2"
          y="4"
          width="50"
          height="20"
          rx="4"
          fill="#FFF8E7"
          stroke="#1A1A2E"
          strokeWidth="2"
        />
        <rect
          x="5"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#FF6B9D"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="10"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#FFE156"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="15"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="20"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#9B59B6"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="25"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#FF8C42"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="30"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#4ECDC4"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="35"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#FF6B9D"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="40"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#FFE156"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="45"
          y="7"
          width="4"
          height="4"
          rx="1"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="7"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#9B59B6"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="12"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#FF8C42"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="17"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#4ECDC4"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="22"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#FF6B9D"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="27"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#FFE156"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="32"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="37"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#9B59B6"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="42"
          y="13"
          width="4"
          height="4"
          rx="1"
          fill="#FF8C42"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="10"
          y="19"
          width="4"
          height="4"
          rx="1"
          fill="#FFE156"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="15"
          y="19"
          width="4"
          height="4"
          rx="1"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="20"
          y="19"
          width="12"
          height="4"
          rx="2"
          fill="#1A1A2E"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="33"
          y="19"
          width="4"
          height="4"
          rx="1"
          fill="#FF6B9D"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <rect
          x="38"
          y="19"
          width="4"
          height="4"
          rx="1"
          fill="#FFE156"
          stroke="#1A1A2E"
          strokeWidth="1"
        />
        <circle
          cx="6"
          cy="24"
          r="1.2"
          fill="#FF6B9D"
          stroke="#1A1A2E"
          strokeWidth="0.7"
        />
        <circle
          cx="48"
          cy="24"
          r="1.2"
          fill="#00D4AA"
          stroke="#1A1A2E"
          strokeWidth="0.7"
        />
      </svg>

      {/* Terminal Window */}
      <svg
        width="55"
        height="45"
        className="shape absolute bottom-20 left-[500px] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="50"
          height="40"
          fill="#1A1A2E"
          stroke="#1A1A2E"
          strokeWidth="2"
          rx="4"
        />
        <rect
          x="2"
          y="2"
          width="50"
          height="10"
          fill="#FF6B9D"
          stroke="#1A1A2E"
          strokeWidth="2"
          rx="4"
        />
        <circle cx="10" cy="7" r="2" fill="#FF4757" />
        <circle cx="18" cy="7" r="2" fill="#FFE156" />
        <circle cx="26" cy="7" r="2" fill="#00D4AA" />
        <text
          x="10"
          y="32"
          fontSize="14"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#00D4AA"
        >
          &gt;_
        </text>
      </svg>

      {/* Cloud */}
      <svg
        width="60"
        height="40"
        className="shape absolute top-[75%] left-16 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 32 Q3 32 3 22 Q3 12 15 12 Q17 4 30 4 Q44 4 46 14 Q56 14 56 24 Q56 32 44 32 Z"
          fill="#4ECDC4"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
        <circle cx="22" cy="20" r="3" fill="#1A1A2E" />
        <circle cx="34" cy="20" r="3" fill="#1A1A2E" />
        <path
          d="M24 26 Q30 30 36 26"
          stroke="#1A1A2E"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Laptop */}
      <svg
        width="60"
        height="45"
        className="shape absolute bottom-1/3 right-[400px] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="5"
          width="44"
          height="28"
          rx="2"
          fill="#1A1A2E"
          stroke="#1A1A2E"
          strokeWidth="2"
        />
        <rect x="11" y="8" width="38" height="22" fill="#9B59B6" />
        <line
          x1="14"
          y1="13"
          x2="28"
          y2="13"
          stroke="#FFE156"
          strokeWidth="2"
        />
        <line
          x1="14"
          y1="18"
          x2="38"
          y2="18"
          stroke="#00D4AA"
          strokeWidth="2"
        />
        <line
          x1="14"
          y1="23"
          x2="32"
          y2="23"
          stroke="#FF6B9D"
          strokeWidth="2"
        />
        <path
          d="M3 35 L8 33 L52 33 L57 35 L57 38 Q57 40 55 40 L5 40 Q3 40 3 38 Z"
          fill="#C0C0C0"
          stroke="#1A1A2E"
          strokeWidth="2"
        />
      </svg>

      {/* Binary Code */}
      <svg
        width="55"
        height="45"
        className="shape absolute top-3/4 right-24 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="51"
          height="41"
          fill="#FFE156"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
        <text
          x="8"
          y="18"
          fontSize="12"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#1A1A2E"
        >
          1010
        </text>
        <text
          x="8"
          y="32"
          fontSize="12"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#1A1A2E"
        >
          0101
        </text>
        <text x="8" y="42" fontSize="8" fontFamily="monospace" fill="#1A1A2E">
          1100
        </text>
      </svg>

      {/* Python */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 547.8 410.6"
        enableBackground="new 0 0 547.8 410.6"
        width="55"
        height="45"
        className="shape absolute bottom-36 left-[300px] cursor-pointer"
      >
        <path
          fill="#CD6799"
          d="M471.4,236c-19.1,0.1-35.7,4.7-49.6,11.5c-5.1-10.1-10.2-19.1-11.1-25.7c-1-7.7-2.2-12.4-1-21.6  c1.2-9.2,6.6-22.3,6.5-23.3s-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5c-1.1,2.9-3.2,9.5-4.6,16.3c-1.9,10-22,45.7-33.5,64.4  c-3.7-7.3-6.9-13.7-7.6-18.8c-1-7.7-2.2-12.4-1-21.6c1.2-9.2,6.6-22.3,6.5-23.3c-0.1-1-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5  c-1.1,2.9-2.3,9.7-4.6,16.3c-2.3,6.6-29,66.2-36,81.6c-3.6,7.9-6.7,14.2-8.9,18.5c0,0,0,0,0,0s-0.1,0.3-0.4,0.8  c-1.9,3.7-3,5.7-3,5.7s0,0,0,0.1c-1.5,2.7-3.1,5.2-3.9,5.2c-0.6,0-1.7-7.2,0.2-17c4-20.7,13.5-52.9,13.4-54c0-0.6,1.8-6.2-6.2-9.1  c-7.8-2.9-10.6,1.9-11.3,1.9c-0.7,0-1.2,1.7-1.2,1.7s8.7-36.2-16.6-36.2c-15.8,0-37.6,17.3-48.4,32.9c-6.8,3.7-21.3,11.6-36.8,20.1  c-5.9,3.3-12,6.6-17.7,9.7c-0.4-0.4-0.8-0.9-1.2-1.3c-30.6-32.7-87.2-55.8-84.8-99.7c0.9-16,6.4-58,108.7-109  C233.9,19,300.9,30.5,312.5,56c16.6,36.4-35.9,104-122.9,113.8c-33.2,3.7-50.6-9.1-55-13.9c-4.6-5-5.3-5.3-7-4.3c-2.8,1.5-1,6,0,8.6  c2.6,6.8,13.3,18.8,31.4,24.7c16,5.2,54.9,8.1,102-10.1c52.7-20.4,93.9-77.1,81.8-124.6C330.7,2,250.7-13.9,175,13  C130,29,81.2,54.2,46.1,87c-41.7,39-48.3,72.9-45.6,87.1c9.7,50.4,79.2,83.2,107,107.5c-1.4,0.8-2.7,1.5-3.8,2.1  c-13.9,6.9-66.9,34.6-80.1,63.9c-15,33.2,2.4,57,13.9,60.2c35.7,9.9,72.4-7.9,92.1-37.3c19.7-29.4,17.3-67.6,8.2-85.1  c-0.1-0.2-0.2-0.4-0.4-0.6c3.6-2.1,7.3-4.3,10.9-6.4c7.1-4.2,14.1-8.1,20.1-11.3c-3.4,9.3-5.9,20.4-7.1,36.4  c-1.5,18.8,6.2,43.2,16.3,52.8c4.5,4.2,9.8,4.3,13.2,4.3c11.8,0,17.1-9.8,23-21.4c7.2-14.2,13.7-30.7,13.7-30.7s-8.1,44.6,13.9,44.6  c8,0,16.1-10.4,19.7-15.7c0,0.1,0,0.1,0,0.1s0.2-0.3,0.6-1c0.8-1.3,1.3-2.1,1.3-2.1s0-0.1,0-0.2c3.2-5.6,10.4-18.3,21.1-39.4  c13.8-27.2,27.1-61.2,27.1-61.2s1.2,8.3,5.3,22.1c2.4,8.1,7.4,17,11.4,25.6c-3.2,4.5-5.2,7-5.2,7s0,0,0.1,0.1  c-2.6,3.4-5.4,7.1-8.5,10.7c-10.9,13-23.9,27.9-25.7,32.2c-2.1,5.1-1.6,8.8,2.4,11.8c2.9,2.2,8.1,2.5,13.4,2.2  c9.8-0.7,16.7-3.1,20.1-4.6c5.3-1.9,11.5-4.8,17.3-9.1c10.7-7.9,17.2-19.2,16.6-34.1c-0.3-8.2-3-16.4-6.3-24.1  c1-1.4,1.9-2.8,2.9-4.2c16.9-24.7,30-51.8,30-51.8s1.2,8.3,5.3,22.1c2,7,6.1,14.6,9.7,22c-15.9,12.9-25.7,27.9-29.2,37.7  c-6.3,18.2-1.4,26.4,7.9,28.3c4.2,0.9,10.2-1.1,14.6-3c5.6-1.8,12.2-4.9,18.5-9.5c10.7-7.9,21-18.9,20.4-33.8  c-0.3-6.8-2.1-13.5-4.6-20c13.5-5.6,30.9-8.7,53.1-6.1c47.6,5.6,57,35.3,55.2,47.8c-1.8,12.5-11.8,19.3-15.1,21.4  c-3.3,2.1-4.4,2.8-4.1,4.3c0.4,2.2,2,2.1,4.8,1.7c3.9-0.7,25-10.1,25.9-33.1C548.9,267.8,520.9,235.7,471.4,236z M104.2,359.8  C88.4,377,66.4,383.5,56.9,378c-10.2-5.9-6.2-31.3,13.2-49.5c11.8-11.1,27-21.4,37.1-27.7c2.3-1.4,5.7-3.4,9.8-5.9  c0.7-0.4,1.1-0.6,1.1-0.6l0,0c0.8-0.5,1.6-1,2.4-1.5C127.6,318.8,120.8,341.7,104.2,359.8z M219.2,281.6c-5.5,13.4-17,47.7-24,45.8  c-6-1.6-9.7-27.6-1.2-53.3c4.3-12.9,13.4-28.3,18.7-34.3c8.6-9.6,18.1-12.8,20.4-8.9C236,236,222.6,273.2,219.2,281.6z M314.1,327  c-2.3,1.2-4.5,2-5.5,1.4c-0.7-0.4,1-2,1-2s11.9-12.8,16.6-18.6c2.7-3.4,5.9-7.4,9.3-11.9c0,0.4,0,0.9,0,1.3  C335.5,312.5,320.7,322.8,314.1,327z M387.3,310.3c-1.7-1.2-1.4-5.2,4.3-17.7c2.2-4.9,7.4-13.1,16.3-21c1,3.2,1.7,6.3,1.6,9.2  C409.4,300.1,395.6,307.3,387.3,310.3z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <script />
      </svg>
    </div>
  );
};

export default FloatingShapes;
