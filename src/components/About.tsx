"use client"
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Title stays aligned with the blue border */}
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* This wrapper ensures the text aligns with the overall page grid */}
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              I started my software journey from photography. Through that experience, 
              I discovered a deep appreciation for creating things from scratch. 
              Photography taught me patience, creativity, and attention to detail.
            </p>
            <p>
              That passion eventually led me into software development, where I found 
              the perfect environment to continuously learn, build solutions, and 
              turn ideas into real-world applications.
            </p>
          </motion.div>

          <motion.div 
            className="about-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="/resume.pdf" 
              download="NSHUTI_Tonny_Resume.pdf" 
              className="btn-primary"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

