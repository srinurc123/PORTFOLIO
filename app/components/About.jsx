'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass-effect p-8 rounded-2xl"
            >
             <div className="w-64 h-64 mx-auto relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-500/30">
                <Image
                  src="/PHOTO.jpg"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-300">
                I'm a passionate Full Stack Developer with expertise in building full stack applications. 
                using with React, Java (Spring Boot), and creating seamless user experiences.
              </p>
              <p className="text-lg text-gray-300">
                Currently working as a Software Developer Intern at a CVLR GLOBAL, developing gaming applications for all age group peoples
                and learning cutting-edge technologies every day.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
                or playing strategic games.
              </p>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
