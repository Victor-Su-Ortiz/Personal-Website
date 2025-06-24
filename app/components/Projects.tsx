'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { ExternalLink, Github } from 'lucide-react'
import GhibliIcon from './GhibliIcons'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
        >
          Magical Creations
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg ghibli-hover ghibli-shadow group"
            >
              <div className="mb-4">
                <GhibliIcon type={project.iconType} size="lg" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              {project.highlights && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs text-emerald-600 font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}