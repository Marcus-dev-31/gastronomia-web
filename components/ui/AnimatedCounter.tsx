"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export default function AnimatedCounter({
  value,
  label,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView(0.5);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9]/g, "");
    const target = parseInt(numericPart);
    const prefix = value.match(/^[^0-9]*/)?.[0] || "";
    const suffix = value.match(/[^0-9]*$/)?.[0] || "";

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);

      const formatted = current.toLocaleString("es-AR");
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-3xl md:text-4xl text-brand-gold font-bold">
        {displayValue}
      </p>
      <p className="text-sm text-brand-cream/70 mt-1">{label}</p>
    </div>
  );
}