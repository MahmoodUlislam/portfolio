'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useTypingText } from '@/hooks/useTypingText'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahmoodislam/',
    icon: Linkedin,
    color: 'hover:text-blue-400'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MahmoodUlislam',
    icon: Github,
    color: 'hover:text-gray-400'
  },
  {
    name: 'Email',
    href: 'mailto:mahmood.islam@gmail.com',
    icon: Mail,
    color: 'hover:text-red-400'
  }
]

export default function MainHeader() {
  const { text, isTyping } = useTypingText(
    "Welcome to my portfolio site! I'm a Senior Software Developer | Cloud & AI Specialist at Virtual Health Hub, currently working in Canada.",
    50
  )

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Heading */}
      <div className="space-y-4">
        <motion.h1
          className="text-5xl lg:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hello!
          </span>
          <br />
          <span className="text-white">
            I am Mahmood
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {text}
          <span className={`inline-block w-2 h-6 bg-blue-400 ml-1 ${isTyping ? 'animate-pulse' : ''}`} />
        </motion.h2>
      </div>

      {/* Social Links and CTA */}
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Social Links */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-white/10 backdrop-blur-sm rounded-full text-white transition-all duration-300 ${link.color} hover:bg-white/20 hover:scale-110`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Download CV Button */}
        <motion.a
          href="/CVmahmood.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Download className="w-4 h-4" />
          Download CV
        </motion.a>
      </motion.div>

      {/* Skills Tags */}
      <motion.div
        className="flex flex-wrap gap-2 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {['React', 'Next.js', 'Vue.js', 'Node.js', 'AWS', 'Swift'].map((skill, index) => (
          <motion.span
            key={skill}
            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
