"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@/components/icons";

const NAV_ITEMS = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // IntersectionObserver to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(href);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t-2"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border)",
      }}
    >
      {/* Inner container — matches page content width */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">

        {/* Logo / monogram - hidden on mobile to give links more room */}
        <span
          className="font-mono font-bold text-base tracking-widest hidden sm:inline-block"
          style={{ color: "var(--text)" }}
        >
          K
        </span>

        {/* Nav items */}
        <ul className="flex items-center gap-1 sm:gap-1.5">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = activeSection === href;
            return (
              <li key={href}>
                <button
                  id={`nav-${href}`}
                  onClick={() => scrollTo(href)}
                  className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 sm:py-1.5 transition-all duration-150 border-2"
                  style={{
                    borderColor: isActive ? "var(--text)" : "transparent",
                    color: isActive ? "var(--bg)" : "var(--text-muted)",
                    background: isActive ? "var(--text)" : "transparent",
                  }}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Theme toggle */}
        <button
          id="theme-toggle"
          onClick={() => setDark((d) => !d)}
          className="p-2 border-2 transition-all"
          style={{
            borderColor: "var(--border)",
            color: "var(--text)",
            background: "var(--bg-2)",
          }}
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={13} /> : <Moon size={13} />}
        </button>

      </div>
    </nav>
  );
}
