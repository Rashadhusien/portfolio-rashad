"use client";

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scroll-svg"
      >
        {/* Mouse outline */}
        <path
          d="M 25 11 C 25 6.05 20.95 2 16 2 C 11.05 2 7 6.05 7 11 L 7 21 C 7 25.95 11.05 30 16 30 C 20.95 30 25 25.95 25 21 L 25 11 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated wheel line */}
        <line
          x1="16"
          y1="8"
          x2="16"
          y2="14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="wheel-line"
        />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
