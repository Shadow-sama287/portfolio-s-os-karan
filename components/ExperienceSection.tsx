"use client";

const RESPONSIBILITIES = [
  "Built and maintained dynamic web application features using React.js and Node.js, improving user-facing performance.",
  "Collaborated with backend team to design and integrate RESTful APIs, enabling seamless client-server data flow.",
  "Implemented responsive, accessible UI components using modern CSS and component libraries.",
  "Participated in code reviews and adopted best practices in version control with Git.",
  "Contributed to database schema design and query optimization using SQL.",
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-2">02 // EXPERIENCE</p>
          <h2
            className="font-mono font-bold text-3xl md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Work &amp;
            <br />
            <span style={{ color: "var(--text-muted)" }}>Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-[2px]"
            style={{ background: "var(--border)" }}
          />

          {/* Work Experience */}
          <div className="relative pl-12 sm:pl-16 mb-10">
            {/* Dot */}
            <div
              className="absolute left-[18px] top-2 w-4 h-4 border-2"
              style={{ background: "var(--text)", borderColor: "var(--bg)" }}
            >
              <div className="w-2 h-2 m-[2px]" style={{ background: "var(--bg)" }} />
            </div>

            <div
              className="pixel-card p-6"
              style={{ background: "var(--bg)", borderColor: "var(--border)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3
                    className="font-mono font-bold text-lg"
                    style={{ color: "var(--text)" }}
                  >
                    Web Developer Intern
                  </h3>
                  <p
                    className="font-mono text-sm font-bold mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Oasis Infobyte
                  </p>
                </div>
                <div
                  className="font-mono text-xs px-3 py-1.5 border-2 self-start whitespace-nowrap"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                    background: "var(--bg-2)",
                  }}
                >
                  OCT 2024 — NOV 2024
                </div>
              </div>

              <div className="h-[2px] w-full mb-5" style={{ background: "var(--border)" }} />

              <ul className="space-y-3">
                {RESPONSIBILITIES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="font-mono text-xs mt-1 flex-shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div
                className="flex flex-wrap gap-2 mt-5 pt-4 border-t-2"
                style={{ borderColor: "var(--border)" }}
              >
                {["React.js", "Node.js", "REST APIs", "Git", "SQL"].map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative pl-12 sm:pl-16">
            <div
              className="absolute left-[18px] top-2 w-4 h-4 border-2"
              style={{ background: "var(--bg-3)", borderColor: "var(--border)" }}
            />

            <div
              className="pixel-card p-6"
              style={{ background: "var(--bg)", borderColor: "var(--border)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3
                    className="font-mono font-bold text-lg"
                    style={{ color: "var(--text)" }}
                  >
                    B.Tech Computer Science &amp; Engineering
                  </h3>
                  <p
                    className="font-mono text-sm font-bold mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Terna Engineering College
                  </p>
                </div>
                <div
                  className="font-mono text-xs px-3 py-1.5 border-2 self-start whitespace-nowrap"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                    background: "var(--bg-2)",
                  }}
                >
                  2023 — 2027
                </div>
              </div>
              <p className="text-sm mt-3" style={{ color: "var(--text-muted)" }}>
                CGPA:{" "}
                <strong style={{ color: "var(--text)" }}>8.98 / 10.0</strong>
                {" "}· Graduating 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
