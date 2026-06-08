"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> INITIALIZING PORTFOLIO_OS v2.6...",
  "> LOADING CORE MODULES... [OK]",
  "> MOUNTING GRAPHICS ENGINE... [OK]",
  "> CONNECTING REALTIME LAYER... [OK]",
  "> COMPILING COMPONENT TREE... [OK]",
  "> WELCOME, KARAN.DEV",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    const lineInterval = setInterval(() => {
      if (lineIdx < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIdx]]);
        setProgress(Math.round(((lineIdx + 1) / BOOT_LINES.length) * 100));
        lineIdx++;
      } else {
        clearInterval(lineInterval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    }, 420);

    return () => clearInterval(lineInterval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "var(--bg)" }}
    >
      {/* Pixel grid background */}
      <div className="absolute inset-0 pixel-grid" />

      <div className="relative w-full max-w-lg px-6">
        {/* Logo / Title */}
        <div className="mb-8 text-center">
          <div
            className="font-mono text-3xl sm:text-4xl font-bold tracking-tight mb-1"
            style={{ color: "var(--text)" }}
          >
            Karan&apos;s Arcade
          </div>
          <div
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            PORTFOLIO_OS
          </div>
        </div>

        {/* Boot lines */}
        <div
          className="font-mono text-xs mb-6 space-y-1 min-h-[120px]"
          style={{ color: "var(--text-muted)" }}
        >
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: "var(--text)" }}>{line}</span>
            </div>
          ))}
          {lines.length < BOOT_LINES.length && (
            <span className="typing-cursor font-mono text-xs" style={{ color: "var(--text)" }} />
          )}
        </div>

        {/* Progress bar */}
        <div
          className="w-full border-2 p-[2px]"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="h-3 transition-all duration-200"
            style={{
              width: `${progress}%`,
              background: "var(--text)",
            }}
          />
        </div>
        <div
          className="font-mono text-xs mt-2 text-right"
          style={{ color: "var(--text-muted)" }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
