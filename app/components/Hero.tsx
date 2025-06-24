'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Pixel art avatar placeholder */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-emerald-400 rounded-full opacity-20 absolute -top-4 -left-4 animate-pulse"></div>
              <div className="w-24 h-24 bg-sky-400 rounded-full opacity-20 absolute -bottom-4 -right-4 animate-pulse delay-1000"></div>
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-emerald-100 to-sky-100 flex items-center justify-center">
                {/* Placeholder for your avatar image */}
                <div className="text-6xl font-bold text-emerald-600">V</div>
                {/* Later replace with: <Image src="/images/avatar.png" alt="Victor" width={160} height={160} /> */}
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600">
            {personalInfo.title}
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-500">
            <MapPin size={20} />
            <span>{personalInfo.location}</span>
          </div>

          <motion.div 
            className="flex gap-4 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg ghibli-hover"
            >
              <Github size={24} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg ghibli-hover"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white rounded-full shadow-lg ghibli-hover"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
