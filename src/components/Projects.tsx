"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projectsData = [
  {
    title: "Vexa Empire",
    description: "A full-service production house: music recording, production, mixing & mastering, podcasting, video, photo, design, social media and studio rental — all under one roof.",
    image: "/vexa.jpg",
    live: "https://vexaempire.afrinnovators.rw/",
    github: "https://github.com/ntonny?tab=repositories",
  },
  {
    title: "Centre Lavigerie Platform",
    description: "A comprehensive institutional and hospitality web platform featuring online reservations, facility inquiries, and dynamic content management.",
    image: "/lavigerie.jpg",
    live: "https://centrelavigerie.com/",
    github: "https://github.com/ntonny?tab=repositories",
  },
  {
    title: "REG/EUCL - SecureAccess System",
    description: "An enterprise role-based authentication and secure access management solution developed for REG/EUCL staff and visitors with encrypted authorization and audit logging.",
    image: "/reg.jpg",
    github: "https://github.com/ntonny?tab=repositories",
  },
  {
    title: "Uganda Railway Ticket Reservation System",
    description: "A full-stack web application that allows passengers to book railway tickets online, check schedules, and manage reservations.",
    image: "/railway.jpg",
    github: "https://github.com/ntonny?tab=repositories",
  },
  {
    title: "Heart Disease Prediction Application",
    description: "A machine learning powered healthcare application that predicts the risk of heart disease using patient data and Scikit-Learn.",
    image: "/al predicter.jpg", // Replace with your heart disease image if named differently
    github: "https://github.com/ntonny?tab=repositories",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
              </div>

              <h3>{project.title}</h3>
              
              <p style={{ color: "var(--text-dim)", margin: "1rem 0" }}>
                {project.description}
              </p>

              {/* Action Links */}
              <div style={{ marginTop: "auto", display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
                {/* Live Demo Link (for live projects) */}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", color: "#38bdf8" }}
                  >
                    <FaExternalLinkAlt size={13} /> Live Demo
                  </a>
                )}

                {/* View Code Link */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}
                >
                  <FaGithub size={15} /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

