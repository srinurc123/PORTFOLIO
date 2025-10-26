'use client'
import { motion } from 'framer-motion'

// Example images: /college.jpg and /school.jpg in public/
// Update these paths and details for your education!
const educationList = [
  {
    title: 'Bachelor of Technology ',
    institution: 'Andhra Loyola Institute of Engineering and Technology College',
    period: '2020 - 2024',
    image: '/btech.png',
    description : "Pursued Civil Engineering but trained in software development, gaining strong skills in full-stack development and completing multiple practical projects."  },
  {
    title: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    period: '2018 - 2020',
    image: '/inter.png',
    description: 'Studied Mathematics, Physics, and Chemistry at Sri Chaitanya Junior College, showcasing a strong willingness in learning new skills and involved in various technical workshops.',
  },
  {
    title: 'SSC',
    institution: 'Lahari Vidya Mandir High School',
    period: '2017 - 2018',
    image: '/school (2).png',
    description: 'Completed secondary school education with an excellent academic record, demonstrating strong learning ability, discipline, and consistency in overall performance.',
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Education</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="glass-effect rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center"
              >
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-32 h-32 object-cover rounded-xl border-2 border-blue-400 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
                  <p className="text-xl text-blue-400">{edu.institution}</p>
                  <p className="text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
