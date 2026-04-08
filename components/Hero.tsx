"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 3rem 6rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            width: "2rem",
            height: "0.5px",
            background: "var(--accent)",
            display: "block",
          }}
        />
        Malibongwe Ndlovu
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.25 }}
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "clamp(3rem, 6.5vw, 5.75rem)",
          lineHeight: 1.04,
          fontWeight: 400,
          color: "var(--text)",
          maxWidth: "13ch",
          marginBottom: "2.5rem",
        }}
      >
        I design systems that{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>scale</em>{" "}
        under pressure.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
        style={{
          color: "var(--muted)",
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "3rem",
          fontWeight: 300,
        }}
      >
        Software Engineer &nbsp;·&nbsp; Cybersecurity Focus &nbsp;·&nbsp; South Africa
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
        href="#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "var(--text)",
          textDecoration: "none",
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          borderBottom: "0.5px solid var(--accent)",
          paddingBottom: "0.3rem",
          width: "fit-content",
          transition: "gap 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.gap = "1.5rem";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.gap = "0.75rem";
        }}
      >
        Work with me <span>→</span>
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: "0.5px",
            height: "2.5rem",
            background:
              "linear-gradient(to bottom, var(--muted), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
