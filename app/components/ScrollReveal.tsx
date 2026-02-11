"use client";

import { useEffect, useRef, useCallback, ReactNode } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-scale"
  | "fade-blur"
  | "gold-line";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  duration?: "normal" | "slow" | "slower";
}

export default function ScrollReveal({
  children,
  className = "",
  delay,
  variant = "fade-up",
  duration = "normal",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const observe = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return observe();
  }, [observe]);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  const durationClass = duration !== "normal" ? ` reveal-${duration}` : "";

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant}${delayClass}${durationClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
