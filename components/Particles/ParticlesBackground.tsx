"use client";

import { useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none" 
      style={{ zIndex: 0 }} 
    >
      <svg className="h-full w-full">
        {Array.from({ length: 50 }).map((_, i) => {
          const radius = Math.random() * 4 + 2; 
          
          return (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={radius}
              fill="currentColor"
              /* Light Mode: Light Sea Blue (text-[#20B2AA])
                 Dark Mode: Original soft white/blue (dark:text-white/15)
              */
              className="text-[#20B2AA]/40 dark:text-white/15 transition-colors duration-500"
            >
              {/* Upward Movement */}
              <animate
                attributeName="cy"
                from="110%"
                to="-10%"
                dur={`${Math.random() * 20 + 20}s`}
                begin={`${Math.random() * -30}s`}
                repeatCount="indefinite"
              />
              {/* Soft Pulsing Fade */}
              <animate
                attributeName="opacity"
                values="0;0.5;0"
                dur={`${Math.random() * 10 + 5}s`}
                repeatCount="indefinite"
              />
              {/* Gentle Horizontal Sway */}
              <animate
                attributeName="cx"
                values={`${Math.random() * 100}%; ${Math.random() * 100}%`}
                dur={`${Math.random() * 40 + 40}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
};

export default ParticlesBackground;