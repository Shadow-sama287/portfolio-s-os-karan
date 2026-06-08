"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, LeetCode, Twitter, Code2 } from "@/components/icons";

// ─── Resume summary ───────────────────────────────────────────────────
const SUMMARY =
  "Creative Full-Stack Developer with expertise in building real-time web ecosystems, interactive 3D graphics, and high-performance applications. Strong foundational knowledge in DSA, network communication protocols, and cloud-integrated database design. Adept at transforming complex technical challenges into scalable, production-ready software solutions.";

// ─── Skill tree (from resume) ─────────────────────────────────────────
const SKILL_TREE = [
  {
    cat: "Programming",
    items: ["Python", "C++", "C", "TypeScript", "JavaScript", "SQL", "Shell (Bash)"],
  },
  {
    cat: "Frontend",
    items: ["React.js", "Next.js", "TailwindCSS"],
  },
  {
    cat: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT"],
  },
  {
    cat: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    cat: "Core",
    items: ["DSA", "DBMS", "OS", "Computer Networks"],
  },
  {
    cat: "Design Tools",
    items: ["Canva", "Figma"],
  },
  {
    cat: "Soft Skills",
    items: ["Communication", "Time Management", "Creativity", "Collaboration"],
  },
];

// ─── Social link ──────────────────────────────────────────────────────
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border-2 inline-flex transition-all duration-100 hover:-translate-y-0.5"
      style={{
        borderColor: "var(--border)",
        color: "var(--text)",
        background: "var(--bg-3)",
      }}
      aria-label={label}
    >
      <Icon size={15} />
    </a>
  );
}

// ─── Skill Tree Accordion ─────────────────────────────────────────────
function SkillTree() {
  const [open, setOpen] = useState<string>("Programming");

  return (
    <div className="space-y-[2px]">
      {SKILL_TREE.map(({ cat, items }) => {
        const isOpen = open === cat;
        return (
          <div key={cat}>
            {/* Category row */}
            <button
              onClick={() => setOpen(isOpen ? "" : cat)}
              className="w-full flex items-center justify-between px-3 py-2 border-2 transition-all duration-100 text-left"
              style={{
                borderColor: isOpen ? "var(--text)" : "var(--border)",
                background: isOpen ? "var(--text)" : "var(--bg-2)",
                color: isOpen ? "var(--bg)" : "var(--text-muted)",
              }}
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                {cat}
              </span>
              <span className="font-mono text-xs" style={{ opacity: 0.6 }}>
                {isOpen ? "↑" : "↓"}
              </span>
            </button>

            {/* Chips — shown when open */}
            {isOpen && (
              <div
                className="flex flex-wrap gap-1.5 px-3 py-3 border-2 border-t-0"
                style={{
                  borderColor: "var(--text)",
                  background: "var(--bg)",
                }}
              >
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] font-bold px-2 py-1 border"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                      background: "var(--bg-2)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────
export default function AboutSection() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 flex flex-col justify-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Photo + identity ── */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase mb-6 px-3 py-1.5 border-2"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                background: "var(--bg-2)",
              }}
            >
              <span
                className="w-2 h-2 inline-block"
                style={{
                  background: "var(--text)",
                  animation: "pixelBlink 1.2s step-end infinite",
                }}
              />
              LEARNING &amp; GROWING
            </div>

            {/* Profile photo */}
            <div
              className="relative w-56 h-56 mb-6 border-2"
              style={{
                borderColor: "var(--border)",
                boxShadow: "var(--pixel-shadow)",
              }}
            >
              <Image
                src="/karan-photo.png"
                alt="Karan — Full-Stack Developer"
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                priority
              />
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-2"
                style={{ background: "var(--text)", borderColor: "var(--bg)" }}
              />
            </div>

            {/* Name + title */}
            <h1
              className="font-mono font-bold text-3xl sm:text-4xl mb-1 tracking-tight text-center lg:text-left"
              style={{ color: "var(--text)" }}
            >
              Karan Chavan
            </h1>
            <p
              className="font-mono text-sm mb-5 text-center lg:text-left"
              style={{ color: "var(--text-muted)" }}
            >
              {"// Full-Stack Dev · AI Explorer"}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mb-6">
              <SocialLink
                href="https://github.com/Shadow-sama287"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/karanchavan8097"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://leetcode.com/u/KaranC8/"
                icon={LeetCode}
                label="LeetCode"
              />
              <SocialLink
                href="https://x.com/Karankun287"
                icon={Twitter}
                label="Twitter / X"
              />
            </div>

            {/* CTA */}
            <button
              onClick={scrollToProjects}
              className="pixel-btn"
              id="cta-view-work"
            >
              <Code2 size={13} />
              View My Work
            </button>
          </div>

          {/* ── Right: Summary + skill tree ── */}
          <div>
            <p className="section-label mb-3">01 // ABOUT ME</p>

            {/* Resume summary */}
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              {SUMMARY}
            </p>

            {/* Skill tree */}
            <p className="section-label mb-3">{"// SKILL STACK"}</p>
            <SkillTree />
          </div>

        </div>
      </div>
    </section>
  );
}
