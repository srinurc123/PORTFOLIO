'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'Book My Doctor',
      description:
        "A comprehensive healthcare appointment platform enabling patients to book consultations, track health records, and communicate securely with doctors. Implements real-time notifications, appointment management, secure patient data handling, and integrated search for doctors by specialty. Built with Solid  structure and robust event-driven workflows.",
      tech: [
        'React', 'Java', 'Spring', 'Hibernate', 'SQL', 'Redis',  'REST', 'JWT',  'Email Service'
      ],
      github: [
        { label: 'Frontend', url: 'https://github.com/srinurc123/HEALTHCARE-FRONTEND' },
        { label: 'Backend', url: 'https://github.com/srinurc123/HEALTHCARE-BACKEND' }
      ],
      live: 'https://healthcare-frontend-pi.vercel.app/login',
      image: '/health.jpg'
    },
    {
      title: 'Skill Connect Exchange',
      description:
"A collaborative skill exchange platform where users can offer and discover services—like tutoring, graphic design, or language lessons—through mutual skill trading instead of money. It includes secure messaging, email alerts, profile management, and a feedback system for trust. To enhance engagement, users can play mini reaction-based games that encourage learning and community interaction." ,     tech: [
        'React', 'Spring Boot', 'SQL', 'Hibernate',  'WebSockets','Email Service', 'REST', 'JWT'
      ],
      github: [
        { label: 'Frontend', url: 'https://github.com/srinurc123/SKILL-EXCHANGE-FRONTEND' },
        { label: 'Backend', url: 'https://github.com/srinurc123/SKILL-EXCHANGE-BACKEND' }
      ],
      live: 'https://skill-exchange-frontend.vercel.app/',
      image: '/skill.png',
    },
    {
      title: 'Weather Snap',
      description:"Weather Forecast App lets you instantly check weather conditions for any city worldwide. It provides current temperature, humidity, wind speed, and clear weather icons. You can view hourly updates and a 5-day forecast to plan ahead. It also supports location-based weather and remembers recent searches. With a smooth, responsive design, it ensures a simple and engaging user experience.",
      tech: [
         'HTML', 'CSS', 'JavaScript', 'API Integration', 'Responsive Design'
      ],
      github: [
        { label: 'Frontend', url: 'https://github.com/srinurc123/WHEATHER-APP' }
      ],
      live: 'https://wheather-app-lac.vercel.app/',
      image: '/weather.png',
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
                {project.image && (
                  <div className="h-48 w-full relative">
  <Image
    src={project.image}
    alt={project.title}
    fill
    style={{ objectFit: "cover" }}
    className="rounded-t-2xl"
    priority={index === 0}
  />
</div>

                )}
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
                  <div className="flex gap-4 flex-wrap">
                    {project.github.map((repo) => (
                      <motion.a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 hover:text-blue-400"
                      >
                        <FaGithub /> {repo.label}
                      </motion.a>
                    ))}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 hover:text-blue-400"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
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
