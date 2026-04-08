import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Collaboration from "@/components/Collaboration";
import Capability from "@/components/Capability";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Nav />
      <Hero />
      <div style={{ borderTop: "0.5px solid var(--border)", maxWidth: 1100, margin: "0 3rem" }} />
      <Work />
      <div style={{ borderTop: "0.5px solid var(--border)", maxWidth: 1100, margin: "0 3rem" }} />
      <Collaboration />
      <div style={{ borderTop: "0.5px solid var(--border)", maxWidth: 1100, margin: "0 3rem" }} />
      <Capability />
      <Philosophy />
      <Contact />
    </main>
  );
}
