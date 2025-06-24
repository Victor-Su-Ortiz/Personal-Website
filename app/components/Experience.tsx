'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/data'
import PixelIcon from './PixelIcon'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
        >
          Journey Through Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <PixelIcon type={exp.iconType} size="md" />
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg ghibli-shadow">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                      <p className="text-emerald-600 font-medium">{exp.company}</p>
                      <p className="text-slate-500 text-sm">{exp.location}</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-sky-100 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 flex items-start">
                        <PixelIcon type="plant" size="sm" className="mr-2 mt-1 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}