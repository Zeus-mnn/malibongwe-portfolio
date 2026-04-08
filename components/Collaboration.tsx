"use client";

import { motion } from "framer-motion";
import { collaborations } from "@/lib/data";

export default function Collaboration() {
  return (
    <section
      id="collaboration"
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
        Selected Areas of Collaboration
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "3rem",
        }}
      >
        {collaborations.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.1,
            }}
          >
            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "1.35rem",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
