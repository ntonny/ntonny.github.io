import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem 5rem 1.5rem",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* 1. Status Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          borderRadius: "9999px",
          background: "rgba(34, 197, 94, 0.08)",
          border: "1px solid rgba(34, 197, 94, 0.25)",
          color: "#4ade80",
          fontSize: "0.85rem",
          fontWeight: 500,
          marginBottom: "1.75rem",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
            boxShadow: "0 0 10px #22c55e",
          }}
        />
        Available for Hire
      </div>

      {/* 2. All Content Below The Badge */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "920px",
          width: "100%",
        }}
      >
        {/* Personalized Greeting */}
        <p
          style={{
            fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
            color: "#94a3b8",
            fontWeight: 500,
            letterSpacing: "0.01em",
            marginBottom: "0.85rem",
          }}
        >
          Hi there, I'm{" "}
          <span
            style={{
              color: "#ffffff",
              fontWeight: 700,
              background: "linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NSHUTI Tonny
          </span>{" "}
          👋
        </p>

        {/* Main Title */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.25rem)",
            fontWeight: 800,
            color: "#f8fafc",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 auto 1.5rem",
          }}
        >
          Full-Stack Software Engineer
        </h1>

        {/* Subtitle / Bio */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
            color: "#94a3b8",
            maxWidth: "650px",
            lineHeight: 1.65,
            margin: "0 auto 2.75rem",
            fontWeight: 400,
          }}
        >
          Crafting scalable, high-performance web applications and building seamless digital experiences from front to back.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.85rem 2rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              color: "#ffffff",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4)",
              transition: "transform 0.2s ease",
            }}
          >
            View Projects &rarr;
          </a>

          <a
            href="#contact"
            style={{
              padding: "0.85rem 2rem",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#e2e8f0",
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "background 0.2s ease",
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

