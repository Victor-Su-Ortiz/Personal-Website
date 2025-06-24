'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import PixelIcon from './PixelIcon'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-sky-100/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
              <PixelIcon type="contact" size="lg" />
            </div>
            <p className="text-slate-600">
              I'm always excited to connect with fellow developers, researchers, and potential collaborators!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
            >
              <Mail className="text-sky-600" />
              <span className="text-slate-700">{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <Phone className="text-emerald-600" />
              <span className="text-slate-700">{personalInfo.phone}</span>
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="text-blue-600" />
              <span className="text-slate-700">LinkedIn Profile</span>
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="text-gray-700" />
              <span className="text-slate-700">GitHub Profile</span>
            </a>
          </div>

          <div className="text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-sky-500 text-white rounded-full font-medium ghibli-hover"
            >
              <Send size={20} />
              Send me a message
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 text-slate-600"
        >
          <p>Made with 💚 and Studio Ghibli magic</p>
          <p className="text-sm mt-2">© 2025 Victor Su-Ortiz. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}