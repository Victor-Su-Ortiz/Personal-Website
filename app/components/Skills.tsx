'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import PixelIcon from './PixelIcon'

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      items: skills.languages,
      iconType: "skill" as const,
      color: "emerald"
    },
    {
      title: "Frameworks",
      items: skills.frameworks,
      iconType: "skill" as const,
      color: "sky"
    },
    {
      title: "Tools",
      items: skills.tools,
      iconType: "skill" as const,
      color: "amber"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
        >
          Magical Abilities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <PixelIcon type={category.iconType} size="md" />
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className={`px-3 py-1 ${
                      category.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                      category.color === 'sky' ? 'bg-sky-100 text-sky-700' :
                      'bg-amber-100 text-amber-700'
                    } rounded-full text-sm ghibli-hover`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
