'use client'

import { motion } from 'framer-motion'
import { Phone, Github, Linkedin, Mail, Heart } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Contact Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <a
              href="tel:+13062618482"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              +1 (306) 261-8482
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved to{' '}
              <span className="text-white font-semibold">Mahmood ul Islam</span>
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500" /> using Next.js
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
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
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-500 text-sm">
            Senior Software Developer | Cloud & AI Specialist
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
