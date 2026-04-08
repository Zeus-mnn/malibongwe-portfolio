"use client";

import { motion } from "framer-motion";
import { capabilities, tools } from "@/lib/data";

export default function Capability() {
  return (
    <section
      id="capability"
      style={{
        padding: "7rem 3rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "3.5rem",
        }}
      >
        <span
          style={{
            width: "1.5rem",
            height: "0.5px",
            background: "var(--muted)",
            display: "block",
          }}
        />
        Capability
      </div>

      {/* Capability grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "0.5px solid var(--border)",
          marginBottom: "3rem",
        }}
      >
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              background: "var(--bg)",
              padding: "2rem 1.75rem",
              transition: "background 0.25s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--bg3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--bg)";
            }}
          >
            <span
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "2rem",
                color: "var(--accent)",
                display: "block",
                marginBottom: "0.75rem",
                fontWeight: 400,
              }}
            >
              {cap.num}
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--text)",
                fontWeight: 300,
              }}
            >
              {cap.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Tools */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {tools.map((tool, i) => (
          <motion.span
            key={tool}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              borderBottom: "0.5px solid var(--border)",
              paddingBottom: "0.2rem",
              fontWeight: 300,
              transition: "color 0.2s, border-color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--text)";
              el.style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "var(--muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            {tool}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
