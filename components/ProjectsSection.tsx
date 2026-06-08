"use client";

import { ExternalLink, Github } from "@/components/icons";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  badge: string;
  wip?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "ws-chatapp",
    title: "WS ChatApp",
    tagline: "Real-Time WebSocket Chat",
    description:
      "Full-stack real-time chat app built with Socket.IO and Node.js. Supports multiple rooms, live typing indicators, join/leave events, and a clean React frontend. Deployed live.",
    tags: ["Socket.IO", "Node.js", "React", "WebSockets", "Express"],
    github: "https://github.com/Shadow-sama287/ws_chatApp",
    live: "https://ws-chat-app-kappa.vercel.app/",
    badge: "REAL-TIME",
  },
  {
    id: "canvas-suite",
    title: "Interactive Canvas Suite",
    tagline: "Creative Simulation Collection",
    description:
      "A series of browser-based physics simulations and creative coding experiments built with raw HTML5 Canvas — particle systems, circular motion visualizations, and procedural animations.",
    tags: ["Canvas API", "JavaScript", "Physics", "Simulation", "Animation"],
    github: "https://github.com/Shadow-sama287/circular-motion",
    badge: "CREATIVE",
  },
  {
    id: "bharat-yatra",
    title: "Bharat Yatra",
    tagline: "3D Educational Culture Game",
    description:
      "An immersive 3D educational game exploring India's diverse cultural heritage through interactive environments. Built with Three.js and TypeScript — currently in active development.",
    tags: ["Three.js", "TypeScript", "React", "3D", "WebGL"],
    github: "https://github.com/Shadow-sama287/BharatYatra",
    badge: "IN PROGRESS",
    wip: true,
  },
  {
    id: "pizza-visualizer",
    title: "3D Pizza Visualizer",
    tagline: "Three.js Interactive Module",
    description:
      "An interactive 3D pizza customization visualizer built with Three.js and TypeScript. Features real-time topping placement, orbit controls, and a polished UI. Spun out from the Pizza Planet project.",
    tags: ["Three.js", "TypeScript", "WebGL", "3D"],
    github: "https://github.com/Shadow-sama287/3js-3d-pizza-visualize",
    live: "https://threejs-pizza-visualizer.netlify.app/",
    badge: "DEPLOYED",
  },
  {
    id: "pizza-planet",
    title: "Pizza Planet",
    tagline: "Full-Stack Pizza Store",
    description:
      "A full-featured pizza ordering web app built during my Oasis Infobyte internship. Includes a product catalog, cart system, order flow, and an admin panel — complete end-to-end.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Shadow-sama287/OIB-SIP",
    badge: "INTERNSHIP",
  },
  {
    id: "movie-browser",
    title: "Movie Browser Web",
    tagline: "React Movie Discovery App",
    description:
      "A modern React app for browsing, searching, and saving your favourite movies using the TMDB API. Search popular titles, explore details, and curate a personal watchlist. Deployed live.",
    tags: ["React", "TMDB API", "JavaScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Shadow-sama287/movie-browser-web",
    live: "https://movie-browser-web.vercel.app/",
    badge: "DEPLOYED",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={`project-${project.id}`}
      className={`pixel-card flex flex-col p-5 ${project.live ? "glow-card" : ""}`}
      style={{
        background: "var(--bg)",
        borderColor: project.wip ? "var(--text-muted)" : "var(--border)",
        opacity: project.wip ? 0.82 : 1,
      }}
    >
      {/* Top row: badge + links */}
      <div className="flex items-center justify-between mb-4">
        {project.live ? (
          <span
            className="font-mono text-[10px] font-bold tracking-[0.15em] px-2 py-0.5 border flex items-center gap-1.5"
            style={{
              borderColor: "var(--text)",
              color: "var(--text)",
              background: "var(--bg)",
            }}
          >
            <span
              className="w-1.5 h-1.5 inline-block"
              style={{
                background: "var(--text)",
                animation: "onlinePulse 1.5s infinite ease-in-out",
              }}
            />
            ONLINE
          </span>
        ) : (
          <span
            className="font-mono text-[10px] font-bold tracking-[0.15em] px-2 py-0.5 border"
            style={{
              borderColor: project.wip ? "var(--text-muted)" : "var(--border)",
              color: "var(--text-muted)",
              background: "var(--bg-2)",
            }}
          >
            {project.wip && (
              <span
                className="inline-block w-1.5 h-1.5 mr-1.5 align-middle"
                style={{
                  background: "var(--text-muted)",
                  animation: "pixelBlink 1.5s step-end infinite",
                }}
              />
            )}
            {project.badge}
          </span>
        )}

        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 border-2 inline-flex transition-all hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
              background: "var(--bg-2)",
            }}
            aria-label={`GitHub for ${project.title}`}
          >
            <Github size={12} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border-2 inline-flex transition-all hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
                background: "var(--bg-2)",
              }}
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className="font-mono font-bold text-lg mb-1"
        style={{ color: "var(--text)" }}
      >
        {project.title}
      </h3>
      <p className="font-mono text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        {"// "}{project.tagline}
      </p>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "var(--text-muted)" }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] font-bold px-1.5 py-0.5 border"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
              background: "var(--bg-2)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-2">03 // PROJECTS</p>
          <h2
            className="font-mono font-bold text-3xl md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Selected
            <br />
            <span style={{ color: "var(--text-muted)" }}>Work</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Shadow-sama287"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-outline inline-flex"
          >
            <Github size={14} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
