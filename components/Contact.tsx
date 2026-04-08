"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send — wire up your email service here (e.g. Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "0.5px solid var(--border)",
    padding: "0.75rem 0",
    color: "var(--text)",
    fontSize: "0.9rem",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  return (
    <>
      <section
        id="contact"
        style={{
          padding: "7rem 3rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                marginBottom: "3rem",
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
              Contact
            </div>

            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 400,
                color: "var(--text)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Work with me.
            </h2>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "2.5rem",
                maxWidth: "36ch",
              }}
            >
              Open to the right opportunities — strategic engagements, complex
              engineering challenges, and long-term partnerships.
            </p>

            <a
              href="mailto:nzuzondlovu147@gmail.com"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "1.1rem",
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "0.5px solid var(--border)",
                paddingBottom: "0.2rem",
                letterSpacing: "0.02em",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
              }}
            >
              nzuzondlovu147@gmail.com
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
          >
            {status === "sent" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  paddingTop: "4rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "1.5rem",
                    color: "var(--text)",
                    marginBottom: "1rem",
                  }}
                >
                  Message received.
                </div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                  }}
                >
                  I&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  paddingTop: "4rem",
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor =
                        "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor =
                        "var(--border)";
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor =
                        "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor =
                        "var(--border)";
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor =
                        "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderBottomColor =
                        "var(--border)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: "transparent",
                    border: "0.5px solid var(--border-hover)",
                    color: "var(--text)",
                    padding: "0.9rem 2rem",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: status === "sending" ? "default" : "pointer",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    transition: "border-color 0.2s, color 0.2s",
                    alignSelf: "flex-start",
                    opacity: status === "sending" ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border-hover)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--text)";
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send message →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          borderTop: "0.5px solid var(--border)",
          maxWidth: 1100,
          margin: "0 3rem",
        }}
      />

      {/* Footer */}
      <footer
        style={{
          padding: "2rem 3rem",
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            fontWeight: 300,
          }}
        >
          © 2026 Malibongwe Ndlovu
        </p>
        <p
          style={{
            fontSize: "0.72rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            fontWeight: 300,
          }}
        >
          Durban, South Africa
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}
