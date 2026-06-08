import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karan | Full-Stack Developer & 3D Graphics Engineer",
  description:
    "Portfolio of Karan — Full-Stack Developer specializing in real-time systems, interactive 3D graphics, and WebSocket-driven applications.",
  keywords: [
    "Full-Stack Developer",
    "Three.js",
    "WebSockets",
    "React",
    "Next.js",
    "3D Graphics",
    "Real-Time Systems",
  ],
  authors: [{ name: "Karan" }],
  openGraph: {
    title: "Karan | Full-Stack Developer & 3D Graphics Engineer",
    description:
      "Portfolio showcasing real-time systems, interactive 3D graphics, and full-stack engineering by Karan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="scanlines">{children}</body>
    </html>
  );
}
