'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import { publications } from '@/lib/data'

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
        >
          Research Chronicles
        </motion.h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg ghibli-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <BookOpen className="text-emerald-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{pub.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">{pub.authors}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-emerald-600 font-medium">{pub.journal}</span>
                    <span className="text-slate-500">{pub.year}</span>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <span>DOI</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
