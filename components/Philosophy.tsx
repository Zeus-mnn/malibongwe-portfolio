"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        background: "var(--bg2)",
        padding: "7rem 3rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
          Philosophy
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="philosophy-grid"
        >
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--text)",
            }}
          >
            Good systems are invisible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
          >
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              I believe complexity is often a design failure. The most valuable
              infrastructure is the kind you don&apos;t notice — it simply
              works, quietly, reliably, and at scale.
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              I build software that serves its purpose without demanding
              attention. Clarity of intent, not elegance of implementation, is
              what separates lasting systems from temporary ones.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
