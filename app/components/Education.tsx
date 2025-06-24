'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { education, awards } from '@/lib/data'
import PixelIcon from './PixelIcon'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
        >
          Academic Adventures
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg ghibli-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <PixelIcon type={edu.iconType} size="lg" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800">{edu.school}</h3>
                  <p className="text-emerald-600 font-medium">{edu.degree}</p>
                  <p className="text-slate-500 text-sm">{edu.location} • {edu.duration}</p>
                </div>
              </div>
              <div className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600">
                    <PixelIcon type="star" size="sm" />
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-amber-500" />
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-lg p-4 text-center shadow-md"
              >
                <PixelIcon type="award" size="md" className="mx-auto mb-2" />
                <p className="text-slate-700">{award}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}