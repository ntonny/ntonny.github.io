"use client"
import { motion } from "framer-motion"

export default function Skills() {
  const categories = [
    { 
      title: "Frontend", 
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Modern CSS"] 
    },
    { 
      title: "Backend", 
      skills: ["Node.js", "Python", "Django", "PHP", "Java", "REST APIs"] 
    },
    { 
      title: "Databases", 
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis"] 
    },
    { 
      title: "Data & ML", 
      skills: ["TensorFlow", "Scikit-Learn", "Predictive Modeling", "Pandas"] 
    },
    { 
      title: "CMS & Web Platforms", 
      skills: ["WordPress", "WooCommerce", "Elementor", "Custom Themes", "Plugin Integration", "SEO Optimization"] 
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        {/* We use a specific class 'skills-grid' here */}
        <div className="grid skills-grid">
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

