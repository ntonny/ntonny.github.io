"use client"
import { 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaLinkedin, 
  FaInstagram, 
  FaMapMarkerAlt 
} from "react-icons/fa"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p style={{ color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: '600px' }}>
          Let's build something extraordinary together. I'm currently available for freelance projects and full-time roles.
        </p>
        
        <div className="grid">
          {/* 1. Email */}
          <a 
            href="mailto:nshutitonny10@gmail.com"
            className="card contact-card"
            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
          </a>

          {/* 2. Phone */}
          <a 
            href="tel:+250788610465"
            className="card contact-card"
            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
          </a>

          {/* 3. WhatsApp */}
          <a 
            href="https://wa.me/250788610465" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card contact-card"
            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <FaWhatsapp className="contact-icon" />
            <h3>WhatsApp</h3>
          </a>

          {/* 4. LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/nshuti-tonny-015032351" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card contact-card"
            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
          </a>

          {/* 5. Instagram */}
          <a 
            href="https://www.instagram.com/nshuti_tonny/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card contact-card"
            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <FaInstagram className="contact-icon" />
            <h3>Instagram</h3>
          </a>

          {/* 6. Location */}
          <a 
            href="https://maps.google.com/?q=Kigali,+Rwanda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card contact-card"
            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Kigali, Rwanda</p>
          </a>
        </div>
      </div>
    </section>
  )
}

