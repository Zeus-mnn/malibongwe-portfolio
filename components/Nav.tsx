"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Capability", href: "#capability" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1.25rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: scrolled ? "0.5px solid var(--border)" : "0.5px solid transparent",
          background: scrolled ? "rgba(14,14,12,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1.1rem",
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          MN
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 20, height: 12, position: "relative" }}>
            <span
              style={{
                display: "block",
                width: "100%",
                height: "0.5px",
                background: "var(--text)",
                position: "absolute",
                top: menuOpen ? "50%" : 0,
                transform: menuOpen ? "rotate(45deg)" : "none",
                transition: "all 0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "100%",
                height: "0.5px",
                background: "var(--text)",
                position: "absolute",
                top: "50%",
                opacity: menuOpen ? 0 : 1,
                transition: "all 0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "100%",
                height: "0.5px",
                background: "var(--text)",
                position: "absolute",
                bottom: menuOpen ? "50%" : 0,
                transform: menuOpen ? "rotate(-45deg)" : "none",
                transition: "all 0.3s",
              }}
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 90,
              background: "var(--bg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "2.5rem",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
