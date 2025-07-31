import React, { useState, useEffect, useLayoutEffect } from "react";

const RouteTransition = ({ children, delay = 50 }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use useLayoutEffect for immediate scroll before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Also ensure scroll to top after any delay
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity duration-300 ease-out overflow-x-hidden w-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ maxWidth: "100vw", transform: "translateZ(0)" }}
    >
      {children}
    </div>
  );
};

export default RouteTransition;
