"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

type Project = (typeof projects)[0];

function SectionLabel({ text }: { text: string }) {
  return (
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
      {text}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const fields = [
    { label: "Context", value: project.context },
    { label: "Constraint", value: project.constraint },
    { label: "Approach", value: project.approach },
    { label: "Outcome", value: project.outcome },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(8,8,6,0.88)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backdropFilter: "blur(4px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "var(--bg2)",
            border: "0.5px solid var(--border-hover)",
            maxWidth: 640,
            width: "100%",
            padding: "3rem",
            maxHeight: "85vh",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {project.tag} · {project.year}
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "var(--text)",
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "0.5px solid var(--border)",
                color: "var(--muted)",
                cursor: "pointer",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                flexShrink: 0,
                marginLeft: "1rem",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              marginBottom: "2.5rem",
              fontStyle: "italic",
              fontFamily: "'DM Serif Display', Georgia, serif",
            }}
          >
            {project.tagline}
          </p>

          <div
            style={{
              borderTop: "0.5px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {fields.map((field) => (
              <div
                key={field.label}
                style={{
                  padding: "1.5rem 0",
                  borderBottom: "0.5px solid var(--border)",
                  display: "grid",
                  gridTemplateColumns: "5rem 1fr",
                  gap: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    paddingTop: "0.15rem",
                  }}
                >
                  {field.label}
                </span>
                <p
                  style={{
                    color: "var(--text)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="work"
        style={{
          padding: "7rem 3rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <SectionLabel text="Selected Work" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 0,
          }}
        >
          {projects.map((project, i) => {
            const isLeft = i % 2 === 0;
            const isLastRow = i >= projects.length - 2;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (i % 2) * 0.1,
                }}
                onClick={() => setSelected(project)}
                style={{
                  padding: "2.5rem 0",
                  paddingRight: isLeft ? "3rem" : "0",
                  paddingLeft: isLeft ? "0" : "3rem",
                  borderTop: "0.5px solid var(--border)",
                  borderBottom: isLastRow
                    ? "0.5px solid var(--border)"
                    : "none",
                  borderRight: isLeft ? "0.5px solid var(--border)" : "none",
                  cursor: "pointer",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "start",
                  gap: "1rem",
                  transition: "padding-left 0.3s ease",
                }}
                whileHover={{
                  paddingLeft: isLeft ? "1rem" : "4rem",
                  transition: { duration: 0.3 },
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.15,
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted)",
                      fontWeight: 300,
                    }}
                  >
                    {project.tagline}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      border: "0.5px solid var(--accent)",
                      padding: "0.2rem 0.6rem",
                      whiteSpace: "nowrap",
                      marginBottom: "0.5rem",
                      display: "inline-block",
                    }}
                  >
                    {project.tag}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--muted)",
                      display: "block",
                    }}
                  >
                    {project.year}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
