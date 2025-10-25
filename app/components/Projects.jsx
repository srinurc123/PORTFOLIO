'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'BUDZ Gaming Platform',
      description: 'Full-stack gaming application with multiple game modes, real-time scoring, and social features. Built with React, Spring Boot, and Firebase.',
      tech: ['React', 'Spring Boot', 'MySQL', 'Firebase'],
      github: '#',
      live: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Essay Challenge Game',
      description: 'Multiplayer essay writing game with AI-powered evaluation, keyword matching, and difficulty levels. Includes timer functionality and coin rewards.',
      tech: ['React', 'Spring Boot', 'NLP', 'MySQL'],
      github: '#',
      live: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Memory Quiz System',
      description: 'Brain teaser application with paragraph shuffling, fill-in-the-blank mechanics, and adaptive difficulty scaling.',
      tech: ['React', 'TypeScript', 'Spring Boot'],
      github: '#',
      live: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Push Notification Service',
      description: 'Scalable notification system with scheduling, user subscription management, and Firebase integration for mobile alerts.',
      tech: ['Spring Boot', 'Firebase', 'MySQL', 'Scheduler'],
      github: '#',
      live: '#',
      color: 'from-green-500 to-teal-500'
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color}`}></div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 hover:text-blue-400"
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 hover:text-blue-400"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
