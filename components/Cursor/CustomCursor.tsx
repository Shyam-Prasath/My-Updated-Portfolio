"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className={`relative -left-1/2 -top-1/2 rounded-full transition-all duration-300 ${
        isPointer ? "h-8 w-8 bg-[#20B2AA]/20 border border-[#20B2AA]" : "h-4 w-4 bg-[#20B2AA] shadow-[0_0_10px_#20B2AA]"
      } dark:bg-white dark:shadow-[0_0_10px_#fff]`} 
      />
    </div>
  );
};

export default CustomCursor;