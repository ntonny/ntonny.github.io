"use client"
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="footer"
      style={{
        paddingBottom: "2rem", // Prevents extra empty space at the bottom
        marginBottom: 0,
        minHeight: "auto",
      }}
    >
      <div className="container">
        {/* Top Part */}
        <div className="footer-main">
          <div className="footer-logo">
            <div className="logo-box">NT</div>
            <span className="logo-text">NSHUTI Tonny<span className="dot">.</span></span>
          </div>

          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#projects">projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a 
              href="https://github.com/ntonny?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/nshuti-tonny-015032351" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://wa.me/250788610465" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Part */}
        <div 
          className="footer-bottom"
          style={{
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          <p style={{ margin: 0 }}>© 2026 NSHUTI Tonny Portfolios. All rights reserved.</p>
          <button onClick={scrollToTop} className="back-to-top">
            Back to top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

