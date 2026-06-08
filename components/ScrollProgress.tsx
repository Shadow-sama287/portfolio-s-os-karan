"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(pct, 100));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px]"
      style={{ background: "var(--border)" }}
    >
      <div
        className="h-full transition-all duration-75 relative overflow-hidden"
        style={{
          width: `${progress}%`,
          background: "var(--text)",
        }}
      >
        <div className="absolute inset-0 progress-stream-overlay" />
      </div>
    </div>
  );
}
