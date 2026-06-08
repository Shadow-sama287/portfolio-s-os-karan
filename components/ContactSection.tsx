"use client";

import { useState } from "react";
import { Github, Linkedin, LeetCode, Twitter, Copy, Check, Download } from "@/components/icons";

const EMAIL = "karan287.dev@gmail.com";

const CHANNELS = [
  {
    id: "github",
    label: "GitHub",
    handle: "Shadow-sama287",
    freq: "GH-287",
    href: "https://github.com/Shadow-sama287",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "karanchavan8097",
    freq: "LI-8097",
    href: "https://www.linkedin.com/in/karanchavan8097",
    icon: Linkedin,
  },
  {
    id: "leetcode",
    label: "LeetCode",
    handle: "KaranC8",
    freq: "LC-C8",
    href: "https://leetcode.com/u/KaranC8/",
    icon: LeetCode,
  },
  {
    id: "twitter",
    label: "Twitter / X",
    handle: "Karankun287",
    freq: "TW-287",
    href: "https://x.com/Karankun287",
    icon: Twitter,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-2">04 // CONTACT</p>
          <h2
            className="font-mono font-bold text-3xl md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Open to
            <br />
            <span style={{ color: "var(--text-muted)" }}>Signals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Direct contact ───────────────── */}
          <div>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              I&apos;m actively looking for{" "}
              <strong style={{ color: "var(--text)" }}>freelance projects</strong> and{" "}
              <strong style={{ color: "var(--text)" }}>internships</strong>. Whether you
              have something cool in mind or just want to talk tech, my inbox is
              always open.
            </p>

            {/* Email row */}
            <div
              className="flex items-center justify-between p-4 border-2 mb-4"
              style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}
            >
              <span
                className="font-mono text-sm truncate mr-3"
                style={{ color: "var(--text)" }}
              >
                {EMAIL}
              </span>
              <button
                onClick={copyEmail}
                className="p-1.5 border-2 flex-shrink-0 transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  background: "var(--bg)",
                }}
                aria-label="Copy email"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>

            {/* Mailto CTA */}
            <a
              href={`mailto:${EMAIL}?subject=Hey Karan!`}
              className="pixel-btn w-full justify-center mb-4"
              id="contact-mailto"
            >
              Send Email ↗
            </a>

            {/* Resume */}
            <a
              href="/Karan_Resume_2026.pdf"
              download="Karan_Resume_2026.pdf"
              className="pixel-btn-outline w-full justify-center"
              id="download-resume"
            >
              <Download size={13} />
              Download Resume
            </a>
          </div>

          {/* ── Right: Signal broadcast console ──── */}
          <div
            className="border-2 p-6"
            style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}
          >
            {/* Console header */}
            <div
              className="flex items-center gap-2 pb-4 mb-6 border-b-2"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="w-2 h-2 inline-block"
                style={{
                  background: "var(--text)",
                  animation: "pixelBlink 1.2s step-end infinite",
                }}
              />
              <span
                className="font-mono text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                BROADCAST_CONSOLE v1.0
              </span>
            </div>

            {/* Boot message */}
            <div
              className="font-mono text-xs mb-6 space-y-1"
              style={{ color: "var(--text-muted)" }}
            >
              <p><span style={{ color: "var(--text)" }}>&gt;&gt;</span> SCANNING FOR ACTIVE CHANNELS...</p>
              <p><span style={{ color: "var(--text)" }}>&gt;&gt;</span> {CHANNELS.length} CHANNELS FOUND. SIGNAL STRONG.</p>
              <p><span style={{ color: "var(--text)" }}>&gt;&gt;</span> SELECT A CHANNEL TO CONNECT:</p>
            </div>

            {/* Channel list */}
            <div className="space-y-3">
              {CHANNELS.map(({ id, label, handle, freq, href, icon: Icon }) => (
                <a
                  key={id}
                  id={`channel-${id}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border-2 group transition-all duration-100"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--bg)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
                    (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 var(--shadow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Left */}
                  <div className="flex items-center gap-3">
                    <Icon size={15} />
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-wide" style={{ color: "var(--text)" }}>
                        {label}
                      </p>
                      <p className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
                        @{handle}
                      </p>
                    </div>
                  </div>
                  {/* Right: freq + arrow */}
                  <div className="text-right">
                    <p className="font-mono text-[10px] font-bold" style={{ color: "var(--text-muted)" }}>
                      {freq}
                    </p>
                    <p className="font-mono text-xs" style={{ color: "var(--text)" }}>↗</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer status */}
            <div
              className="mt-6 pt-4 border-t-2 font-mono text-[10px] text-right"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              STATUS: <span style={{ color: "var(--text)" }}>ONLINE</span> · RESPONSE_TIME: FAST
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
