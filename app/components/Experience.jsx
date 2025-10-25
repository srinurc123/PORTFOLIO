'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
  {
    role: 'Software Developer',
    company: 'CVLR GLOBAL PRIVATE LTD',
    period: 'Aug 2025 - Present',
    description: [
      'Building and maintaining full-stack web applications using React for the frontend and Spring Boot for the backend',
      'Developing interactive game modules with real-time scoring, user progress tracking, and in-app notifications to enhance engagement',
      'Collaborating within a 5-member SCRUM team and managing Git workflows for smooth integration and deployment',
      'Integrating Firebase for real-time push notifications and authentication, along with MySQL for efficient data storage and management',
      'Contributing to end-to-end development, including system design, feature implementation, testing, and performance optimization'
    ]
  }
];

   

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-xl text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
