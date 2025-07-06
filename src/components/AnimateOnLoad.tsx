"use client";

import { useEffect, useState, ReactNode } from "react";

interface AnimateOnLoadProps {
  children: ReactNode;
  animation?: string;
  delay?: string;
  waitForMs?: number; // Optional delay before starting animation
}

export default function AnimateOnLoad({ children, animation = "animate-fade-in-left", delay = "", waitForMs = 0 }: AnimateOnLoadProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small timeout to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, waitForMs);

    return () => clearTimeout(timer);
  }, [waitForMs]);

  return <div className={isVisible ? `${animation} ${delay}` : "opacity-0"}>{children}</div>;
}
