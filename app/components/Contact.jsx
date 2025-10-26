'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [result, setResult] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send(
    'service_whm338r',
    'template_lzbsil6',
    {
      name: formData.name,        // matches {{name}}
      email: formData.email,      // matches {{email}}
      message: formData.message   // matches {{message}}
    },
    'UTvA1QnGDzJnrCkJT'
  )
  .then(
    () => setResult('✅ Message sent successfully!'),
    () => setResult('❌ Failed to send message. Please try again.')
  );
  setFormData({ name: '', email: '', message: '' });
};


  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p>srinuvalasani5@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                    <FaPhone className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p>+91 7893855952</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent resize-none"
                  required
                ></textarea>
              </div>

              {result && (
                <p className="text-center text-green-500 font-semibold">{result}</p>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
