"use client";
import React from "react";
import TeamShowcase from "./TeamShowcase";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  category: string;
  photo: string;
  gmail: string;
  linkedin: string;
};

interface TeamClientProps {
  members: TeamMember[];
  loggedInEmail: string | null;
}

export default function TeamClient({ members }: TeamClientProps) {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", fontFamily: "Inter, Arial, sans-serif" }}>
      <section
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <p
            style={{
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.6,
              fontSize: "0.85rem",
            }}
          >
            Studio
          </p>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontWeight: 600,
            }}
          >
            Meet our team
          </h1>
        </div>
      </section>

      <TeamShowcase members={members} />

      <section
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <p style={{ opacity: 0.65, fontSize: "1.05rem" }}>Want to work with us?</p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              margin: 0,
              letterSpacing: "-0.03em",
              fontWeight: 600,
            }}
          >
            Let&apos;s build something remarkable.
          </h2>
        </div>
      </section>
    </main>
  );
}