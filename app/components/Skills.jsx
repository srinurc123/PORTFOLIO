'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaReact, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa'
import { SiSpring, SiMysql, SiHibernate, SiJavascript } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'Spring Boot', icon: SiSpring, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
    { name: 'JDBC', icon: FaDatabase, color: 'text-purple-400' },
    { name: 'Hibernate', icon: SiHibernate, color: 'text-amber-600' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'REST API', icon: TbApi, color: 'text-green-400' },
    { name: 'Database', icon: FaDatabase, color: 'text-indigo-400' },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-effect p-6 rounded-xl text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <skill.icon className={`text-5xl mx-auto mb-3 ${skill.color}`} />
                <p className="font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
