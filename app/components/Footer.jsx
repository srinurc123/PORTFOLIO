'use client'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 flex items-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Shanmukha Srinivas
          </p>

          <div className="flex gap-6">
            <a href="https://github.com/srinurc123" className="hover:text-blue-400 transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/shanmukha-srinivas-52a1072b7" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
           
          </div>

          <p className="text-gray-400">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
