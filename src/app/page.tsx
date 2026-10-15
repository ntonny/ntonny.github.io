"use client";

import dynamic from 'next/dynamic';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from '@/components/Skills';
// import Timeline from "@/components/Timeline";
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import Background dynamically to prevent any SSR issues
const Background = dynamic(() => import("@/components/Background"), { 
  ssr: false 
});

export default function Home() {
  return (
    <main className="main-wrapper" style={{ position: 'relative' }}>
      {/* 1. Background stays fixed in the back */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Background />
      </div>

      {/* 2. Content stays in front */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        {/* <Timeline /> */}
        <About />
        <Contact />
        <Footer />
      </div>

      {/* 3. Floating WhatsApp Icon (Bottom-Right Corner like Vexa) */}
      <a
        href="https://wa.me/250788610465"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(37, 211, 102, 0.45)",
          zIndex: 9999,
          color: "#ffffff",
          fontSize: "30px",
          textDecoration: "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.65)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.45)";
        }}
      >
        <FaWhatsapp />
      </a>
    </main>
  );
}