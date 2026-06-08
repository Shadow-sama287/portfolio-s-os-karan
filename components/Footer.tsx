"use client";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t-2"
      style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © 2026 KARAN. BUILT WITH NEXT.JS + TAILWIND.
        </span>
        <span
          className="font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          DESIGNED & CODED BY <span style={{ color: "var(--text)" }}>KARAN</span>
        </span>
      </div>
    </footer>
  );
}
